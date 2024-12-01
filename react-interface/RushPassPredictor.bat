@echo off
cd /d "%~dp0" 
start cmd /K "npm run start"

cd ../backend
REM Ejecutar la aplicación Flask
python app.py
REM Mantener la ventana abierta
pause
