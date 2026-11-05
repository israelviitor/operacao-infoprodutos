#!/bin/bash
# Renderiza e finaliza (-14 LUFS, até 14 MB) os criativos listados
B=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell
cd /home/user/edicao/remotion
for ID in "$@"; do
  echo "== $ID $(date +%T)"
  npx remotion render src/index.ts $ID ../saida/$ID-raw.mp4 --browser-executable=$B --concurrency=4 --codec=h264 --crf=18 --log=error > ../saida/$ID-render.log 2>&1 || { echo "FALHOU $ID"; continue; }
  ../scripts/finalizar.sh /home/user/edicao/saida/$ID-raw.mp4 /home/user/edicao/saida/$ID.mp4 14
done
echo FIM $(date +%T)
