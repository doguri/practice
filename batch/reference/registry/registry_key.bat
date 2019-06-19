@echo off

::
:: Check if reg key exists, enter from command prompt
::

if "%*" == "" exit /b

reg query "%*" >nul 2>nul
if "%ERRORLEVEL%" == "0" (
  echo Reg key exists
) else (
  echo Reg key does not exist
)
