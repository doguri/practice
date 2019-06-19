@echo off

:: remove files older than 30 days...

for /d %%i in ("c:\users\*.*") do (
  forfiles -p "%%i\appdata\local\temp" /s /d -30 /c "cmd /c del /q @path"
  for /f "usebackq" %%d in (`"dir /ad/b/s %%i\appdata\local\temp | sort /r"`) do rd /q "%%d"
)
