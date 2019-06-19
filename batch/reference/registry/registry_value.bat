@echo off

::
:: Check if reg value exists, enter from command prompt
::

reg query %1 /v %2 >nul 2>nul
if "%ERRORLEVEL%" == "0" (
  echo Reg key exists
) else (
  echo Reg key does not exist
)
