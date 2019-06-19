@echo off

set temp=%PATH%

:while
  if "%temp%"=="" goto wend
  for /F "delims=;" %%i in ("%temp%") do echo %%i
  for /F "delims=; tokens=1,*" %%i in ("%temp%") do set temp=%%j
  goto while
:wend
