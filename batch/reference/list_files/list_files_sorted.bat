@echo off

for /f "tokens=*" %%i in ('dir /b c:\ ^| sort') do (
  echo %%i
)
