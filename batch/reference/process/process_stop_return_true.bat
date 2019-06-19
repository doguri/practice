@echo off

::
:: Stop process if running and return true, enter from command prompt
::

if "%*" == "" exit /b

tasklist /fi "imagename eq %*" |find ":" > nul
if errorlevel 1 (
  taskkill /im %1 /f || exit 0
)
