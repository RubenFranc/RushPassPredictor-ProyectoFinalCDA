import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#A5ACAF', /* Gris metálico */
            color: '#013369', /* Azul */
            textAlign: 'center',
            padding: '10px',
            position: 'fixed',
            bottom: 0,
            width: '100%',
        }}>
            <p>© 2024 Predicción de Jugadas NFL</p>
            <p><a href="https://www.nfl.com" style={{ color: '#D50A0A' }}>Sitio Oficial de la NFL</a></p>
        </footer>
    );
};

export default Footer;
