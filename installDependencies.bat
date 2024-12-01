@echo off

rem Instalar dependencias de Python (Flask)
cd /d "%~dp0backend"
pip install -r requirements.txt

rem Instalar dependencias de Node.js (React)
cd /d "%~dp0react-interface"
npm install

rem Mantener la ventana abierta
pause
