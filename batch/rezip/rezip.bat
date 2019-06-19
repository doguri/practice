@echo off

for %%i in (*.7z) do (
  echo Processing: %%i
  "C:\Program Files\7-Zip\7z.exe" x "%%i" -o"%%i_contents"
  cd "%%i_contents"
  "C:\Program Files\7-Zip\7z.exe" a -tzip "../%%~ni.zip" *
  cd ..
  del "%%i" /f /q
  rmdir "%%i_contents" /s /q
  echo.
  echo.
)

echo DONE...
echo.
