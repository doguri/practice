@echo off

::
:: Stop process if running, enter from command prompt
::

if "%*" == "" exit /b

tasklist /fi "imagename eq %*" |find ":" > nul
if errorlevel 1 (
  taskkill /im %1 /f
)
