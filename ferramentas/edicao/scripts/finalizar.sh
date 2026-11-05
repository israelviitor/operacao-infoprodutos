#!/bin/bash
# Normaliza o áudio em -14 LUFS e comprime em 2 passes para caber em ~14 MB
IN=$1; OUT=$2; MAXMB=${3:-14}
D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$IN")
VB=$(python3 -c "print(int(min(9000, ($MAXMB*8*1024*0.95/$D) - 160)))")
cd $(dirname "$OUT")
ffmpeg -v error -y -i "$IN" -c:v libx264 -b:v ${VB}k -pass 1 -preset slow -an -f mp4 /dev/null
ffmpeg -v error -y -i "$IN" -c:v libx264 -b:v ${VB}k -pass 2 -preset slow -pix_fmt yuv420p -af loudnorm=I=-14:TP=-1.5:LRA=11 -c:a aac -b:a 160k -ar 48000 -movflags +faststart "$OUT"
rm -f ffmpeg2pass-0.log*
echo "$OUT $(du -h "$OUT" | cut -f1) ${VB}k"
