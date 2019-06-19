@echo off

if "%*"=="" exit /b

for /F "tokens=3 delims=: " %%H in ('sc query "%*" ^| findstr "        STATE"') do (
  if /I "%%H" EQU "RUNNING" (
    echo Service is running
  )
)
