import re, sys, json, subprocess, html
# uso: coverr_search.py termo1 termo2 ... -> lista título | url 1080p (ignora vídeos gerados por IA)
for q in sys.argv[1:]:
    s = subprocess.run(["curl","-s","-A","Mozilla/5.0",f"https://coverr.co/s?q={q}"],capture_output=True,text=True).stdout
    s = html.unescape(s).replace('\\"','"')
    seen = set(); print(f"## {q}")
    for m in re.finditer(r'"title":"([^"]{3,120})".{0,1500}?"urls":\{"mp4":"(https://cdn\.coverr\.co/videos/([^/"]+)/1080p\.mp4)"', s):
        t, u, slug = m.groups()
        if slug in seen or 'ai-generation' in slug: continue
        seen.add(slug); print(f"{t} | {u}")
