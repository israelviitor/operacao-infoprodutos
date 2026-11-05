#!/bin/bash
# uso: stills.sh C01 "1.0 5.0 10.2 ..." -> /home/user/edicao/stills2/<ID>-grade.jpg
ID=$1; TIMES=$2; B=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell
cd /home/user/edicao/remotion; OUT=/home/user/edicao/stills2; mkdir -p $OUT; rm -f $OUT/$ID-t*.png
for t in $TIMES; do fr=$(python3 -c "print(round($t*30))"); npx remotion still src/index.ts $ID $OUT/$ID-t$fr.png --frame=$fr --browser-executable=$B --log=error >/dev/null 2>&1; done
python3 - "$ID" <<'PY'
import sys, glob
from PIL import Image, ImageDraw
ID=sys.argv[1]; fs=sorted(glob.glob(f'/home/user/edicao/stills2/{ID}-t*.png'), key=lambda x:int(x.split('-t')[1][:-4]))
n=len(fs); cols=min(n,6); rows=(n+cols-1)//cols
s=Image.new('RGB',(cols*270,rows*480),'white')
for i,f in enumerate(fs):
    im=Image.open(f).resize((270,480)); s.paste(im,((i%cols)*270,(i//cols)*480))
    d=ImageDraw.Draw(s); d.rectangle([(i%cols)*270,(i//cols)*480,(i%cols)*270+60,(i//cols)*480+16],fill='black'); d.text(((i%cols)*270+3,(i//cols)*480+2),f"{int(f.split('-t')[1][:-4])/30:.1f}s",fill='yellow')
s.save(f'/home/user/edicao/stills2/{ID}-grade.jpg',quality=82)
PY
