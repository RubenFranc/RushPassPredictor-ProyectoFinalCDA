import joblib
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask import Flask, send_from_directory
import os

# Cargar el modelo
model = joblib.load('./models/clasificadorDecisionTree.joblib')

# Crear la aplicación Flask
app = Flask(__name__, static_folder='build', static_url_path='')

# Agregar soporte para CORS
CORS(app)

# Ruta para servir el archivo HTML principal de React
@app.route('/')
def index():
    return send_from_directory(os.path.join(app.static_folder, 'index.html'))

# Ruta para servir archivos estáticos de React (JS, CSS, imágenes, etc.)
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(os.path.join(app.static_folder, path))

@app.route('/predict', methods=['POST'])
def predict():
    # Obtener los datos enviados por el usuario
    input_data = request.json
    print("Datos recibidos:", input_data)  # Log para revisar la entrada
    
    # Validar datos de entrada (opcional, pero recomendado)
    if not input_data:
        return jsonify({"error": "No data provided"}), 400

    # Convertir datos a formato esperado por el modelo
    try:
        features = [input_data["features"]]
        # Realizar predicción
        prediction = model.predict(features)
        return jsonify({"prediction": prediction.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
