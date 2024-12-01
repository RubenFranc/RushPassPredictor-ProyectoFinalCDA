@echo off

cd /d "%~dp0react-interface"
start cmd /K "npm run start"

cd /d "%~dp0backend"
rem Ejecutar la aplicación Flask
start cmd /K "python app.py"

pause
