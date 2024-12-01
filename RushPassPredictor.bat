@echo off

cd /d "%~dp0react-interface"
start cmd /C "npm install && npm run start && exit"

cd /d "%~dp0backend"
rem Ejecutar la aplicación Flask
start cmd /C "python app.py && exit"

pause

rem Matar el proceso de Flask y React al cerrar el .bat
taskkill /F /IM "node.exe" > nul 2>&1
taskkill /F /IM "python.exe" > nul 2>&1