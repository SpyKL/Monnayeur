@echo off
setlocal

:: Définir le chemin du script en fonction de l'emplacement du fichier batch
set "SCRIPT_DIR=%~dp0"
set "APP_PATH=%SCRIPT_DIR%MonnayeurCode\app.py"

:: Ouvrir l'URL dans le navigateur
start "" http://127.0.0.1:5000

:: Lancer le script Python
python "%APP_PATH%"

:: Pause pour garder la console ouverte
pause