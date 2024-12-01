import React from 'react';
import Header from './components/Header';
import PredictionForm from './components/PredictionForm';
import Footer from './components/Footer';
import './App.css'; // Estilos globales

const App = () => {
    return (
        <div>
            <Header />
            <PredictionForm />
        </div>
    );
};

export default App;
