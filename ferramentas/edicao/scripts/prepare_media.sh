#!/bin/bash
# Padroniza takes de banco para 1080x1920 30fps (crop central), sem áudio
IN=$1; OUT=$2
w=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$IN"); h=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of csv=p=0 "$IN")
if [ "$w" -gt "$h" ]; then VF="crop=ih*9/16:ih,scale=1080:1920:flags=lanczos"; else VF="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920"; fi
ffmpeg -v error -y -i "$IN" -an -vf "$VF,fps=30,format=yuv420p" -c:v libx264 -preset veryfast -crf 18 -g 15 "$OUT"
