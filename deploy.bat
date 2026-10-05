@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo [1/3] 필요한 파일 확인...
if not exist node_modules call npm install
echo [2/3] 사이트 빌드 (out 폴더 생성)...
call npm run build
if errorlevel 1 (
  echo 빌드에 실패했습니다. 위 메시지를 확인해 주세요.
  pause
  exit /b 1
)
echo [3/3] Firebase Hosting 배포...
call npx --yes firebase-tools deploy --only hosting
if errorlevel 1 (
  echo.
  echo 배포에 실패했습니다. 처음이라면 아래 명령으로 Firebase 로그인 후 다시 실행해 주세요.
  echo   npx firebase-tools login
)
echo.
echo 완료. 창을 닫으셔도 됩니다.
pause
