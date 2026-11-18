"""Textos de páginas HTML geradas (Guia e Cartão) para a tradução, por texto único.
  python3 textos_html.py extrair <html>...            -> JSON com a lista de textos únicos, na ordem
  python3 textos_html.py aplicar <dic.json> <in> <out> -> grava <out> trocando cada texto pelo do dicionário
Ignora estilo, script, título, doctype e textos só de números/símbolos (não precisam de tradução)."""
import sys, json, re
from bs4 import BeautifulSoup, Comment, Doctype

SO_SIMBOLO = re.compile(r'^[\d\s?.,·→−\-+×÷=:%()/]+$')

def nos(soup):
    for n in soup.find_all(string=True):
        if isinstance(n, (Comment, Doctype)) or n.parent.name in ('style', 'script', 'title'):
            continue
        t = str(n).strip()
        if t and not SO_SIMBOLO.match(t):
            yield n, t

if sys.argv[1] == 'extrair':
    vistos = []
    for f in sys.argv[2:]:
        for _, t in nos(BeautifulSoup(open(f, encoding='utf-8').read(), 'html.parser')):
            if t not in vistos:
                vistos.append(t)
    print(json.dumps(vistos, ensure_ascii=False))
else:
    dic = json.load(open(sys.argv[2], encoding='utf-8'))
    src = open(sys.argv[3], encoding='utf-8').read()
    soup = BeautifulSoup(src, 'html.parser')
    falta = []
    for n, t in list(nos(soup)):
        if t in dic:
            orig = str(n)
            n.replace_with(orig.replace(t, dic[t]))
        else:
            falta.append(t)
    html = str(soup).replace('lang="pt-BR"', 'lang="en"')
    open(sys.argv[4], 'w', encoding='utf-8').write(html)
    if falta:
        print('SEM TRADUÇÃO:', falta, file=sys.stderr); sys.exit(1)
