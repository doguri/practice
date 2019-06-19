@echo off

::
:: Check if service is running, enter from command prompt
::

if "%*" == "" exit /b

for /F "tokens=3 delims=: " %%H in ('sc query "%*" ^| findstr "        STATE"') do (
  if /I "%%H" EQU "RUNNING" (
    echo Service is running
  ) else (
    echo Service is not running
  )
)
