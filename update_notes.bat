@echo off
setlocal

set "SITE_URL=https://attackSD.github.io/LastRecall/"

echo Building LastRecall Project Notes...
npx quartz build
if errorlevel 1 exit /b 1

git add -A
git diff --cached --quiet
if not errorlevel 1 (
  for /f %%i in ('powershell -NoProfile -Command "Get-Date -Format 'yyyy-MM-dd HH:mm:ss'"') do set "NOW=%%i"
  git commit -m "update: notes %NOW%"
  if errorlevel 1 exit /b 1
)

git push origin v4
if errorlevel 1 exit /b 1

start "" "%SITE_URL%"
endlocal
