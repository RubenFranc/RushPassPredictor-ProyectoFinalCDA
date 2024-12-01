import React, { useState } from "react";
import axios from "axios";
import './PredictionForm.css'; /* Importamos un archivo CSS específico para el formulario */

const PredictionForm = () => {
    // Lista de nombres personalizados para los features
    const featureNames = ["Quarter","Down","Yards to go","Game clock (in minutes, e.g: 1:30 >> 1.5)","Home Score","Visitor Score","Is dropback (True - 1 or False - 0)","Pff run pass option (True - 1 or False - 0)","Ofenssive formation EMPTY (True - 1 or False - 0)","Ofenssive formation IFORM (True - 1 or False - 0)","Ofenssive formation JUMBO (True - 1 or False - 0)","Ofenssive formation PISTOL (True - 1 or False - 0)","Ofenssive formation SHOTGUN (True - 1 or False - 0)","Ofenssive formation SINGLEBACK (True - 1 or False - 0)","Ofenssive formation WILDCAT (True - 1 or False - 0)"];
    
    // Estado para manejar los valores de entrada
    const [features, setFeatures] = useState(Array(featureNames.length).fill(0));
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState("");

    // Manejar cambios en los campos de entrada
    const handleChange = (e, index) => {
        const newFeatures = [...features];
        newFeatures[index] = parseFloat(e.target.value);
        setFeatures(newFeatures);
    };

    // Enviar datos a la API
    const handleSubmit = async (e) => {
        e.preventDefault();
	console.log("Datos enviados:", features); // Log para verificar los datos
        try {
            const response = await axios.post("http://127.0.0.1:5000/predict", {
                features: features,
            });
            setPrediction(response.data.prediction);
            setError("");
        } catch (err) {
            setError("Error al obtener la predicción. Revisa los datos o el servidor.");
        }
    };

    return (
        <div>
            <h1>Parameters of the play</h1>
            <form onSubmit={handleSubmit}>
                {featureNames.map((name, index) => (
                    <div key={index}>
                        <label>{name}: </label>
                        <input
                            type="number"
                            step="any"
                            onChange={(e) => handleChange(e, index)}
                            required
                        />
                    </div>
                ))}
                <button type="submit">Rush or pass prediction</button>
            </form>
            {prediction && (
                <div>
	            <h3>(1 >> Rush | 0 >> Pass)</h3>
		    <h2>PREDICTION: {prediction}</h2>
                
		</div>

            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default PredictionForm;
