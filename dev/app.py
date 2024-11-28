from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Cargar el modelo entrenado
model = joblib.load('models/RandomForest.joblib')  # Asegúrate de que el modelo esté guardado en este archivo

@app.route('/', methods=['GET', 'POST'])
def home():
    prediction = None
    if request.method == 'POST':
        feature1 = float(request.form['feature1'])
        feature2 = float(request.form['feature2'])
        # Recoge más características según sea necesario
        prediction = model.predict([[feature1, feature2]])
    return render_template('index.html', prediction=prediction)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
