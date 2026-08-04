@echo off
setlocal EnableExtensions
cd /d "%~dp0"

set "SITE_URL=https://attacksd.github.io/LastRecall/"
set "GH_EXE=gh"
if exist "%ProgramFiles%\GitHub CLI\gh.exe" set "GH_EXE=%ProgramFiles%\GitHub CLI\gh.exe"

echo Syncing Simplified Chinese notes...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\sync-simplified-chinese.ps1"
if errorlevel 1 goto :error

call npx prettier --write "content\zh-Hans"
if errorlevel 1 goto :error

echo Building LastRecall Project Notes...
call npx quartz build
if errorlevel 1 goto :error

git add -A
if errorlevel 1 goto :error

git diff --cached --quiet
if errorlevel 1 (
  for /f %%i in ('powershell -NoProfile -Command "Get-Date -Format 'yyyy-MM-dd HH:mm:ss'"') do set "NOW=%%i"
  git commit -m "update: notes %NOW%"
  if errorlevel 1 goto :error
)

git push origin v4
if errorlevel 1 goto :error

for /f %%i in ('git rev-parse HEAD') do set "COMMIT_SHA=%%i"
set "RUN_ID="
set "RUN_FILE=%TEMP%\lastrecall-pages-run.txt"
for /L %%i in (1,1,12) do (
  set "RUN_ID="
  "%GH_EXE%" run list --repo attackSD/LastRecall --branch v4 --commit %COMMIT_SHA% --limit 1 --json databaseId --jq ".[0].databaseId" > "%RUN_FILE%" 2>nul
  set /p RUN_ID=<"%RUN_FILE%"
  if defined RUN_ID goto :watch
  timeout /t 5 /nobreak >nul 2>&1
)

echo Could not find the GitHub Pages deployment for this update.
goto :error

:watch
del /q "%RUN_FILE%" >nul 2>&1
echo Waiting for GitHub Pages to finish publishing...
"%GH_EXE%" run watch %RUN_ID% --repo attackSD/LastRecall --exit-status
if errorlevel 1 goto :error

start "" "%SITE_URL%"
endlocal
exit /b 0

:error
echo.
echo Update failed. Review the message above, then try again.
pause
endlocal
exit /b 1
