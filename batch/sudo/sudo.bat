@echo off

if "%*"=="" exit /b

runas /user:domain\$admin "%*"
