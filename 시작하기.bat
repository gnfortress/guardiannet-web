@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist node_modules (
  echo 처음 실행이라 필요한 파일을 설치합니다. 잠시 기다려 주세요...
  call npm install
)
start "" http://localhost:3000
call npm run dev
