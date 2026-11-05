import re, sys, json, subprocess
out = {}
for q in sys.argv[1:]:
    html = subprocess.run(["curl","-s","-A","Mozilla/5.0",f"https://mixkit.co/free-stock-video/{q}/"],capture_output=True,text=True).stdout
    items = re.findall(r'videos/(\d+)/\1-thumb-360-0\.jpg" class="item-grid-video-player__thumb" alt="([^"]*)"', html)
    out[q] = items
    print(f"## {q}")
    for i,a in items: print(i, a)
json.dump(out, open("/home/user/edicao/banco/busca.json","w"), indent=1)
