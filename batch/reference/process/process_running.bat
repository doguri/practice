@echo off

::
:: Check process is running, enter from command prompt
::

if "%*" == "" exit /b

tasklist /fi "imagename eq %*" |find ":" > nul
if errorlevel 1 (
  echo Process is running
) else (
  echo Process is not running
)
