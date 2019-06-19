@echo off

for /f "delims=" %%i in (' dir /b c:\*') do (
  @echo %%~ni
)
