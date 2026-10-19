"""Agrupa anúncios minerados por oferta e aplica os filtros de idade e volume.

Uso: python3 agrupar-ofertas.py <pasta_bruto> <saida.json> [--min-dias 3] [--max-dias 45] [--min-anuncios 6]

Oferta = mesmo anunciante (page_id) + mesmo domínio de destino.
Idade da oferta = dias do anúncio mais antigo visto. Anúncios ativos = soma de criativos_iguais dos anúncios vistos
(é um piso: a página pode ter mais anúncios do que os que apareceram nas buscas).
"""
import json
import pathlib
import re
import sys
from urllib.parse import urlparse

args = sys.argv[1:]
pasta, saida = pathlib.Path(args[0]), pathlib.Path(args[1])


def opt(nome, padrao):
    return int(args[args.index(nome) + 1]) if nome in args else padrao


MIN_DIAS, MAX_DIAS, MIN_ANUNCIOS = opt('--min-dias', 3), opt('--max-dias', 45), opt('--min-anuncios', 6)

# Domínios que não identificam a oferta (redes sociais, encurtadores, mensageiros).
GENERICOS = re.compile(r'(facebook|instagram|fb\.me|wa\.me|whatsapp|bit\.ly|linktr|l\.instagram|youtube|tiktok|mod\.lk)')


def dominio(a):
    d = a.get('dominio') or ''
    if not d and a.get('link'):
        d = urlparse(a['link']).netloc
    d = re.sub(r'^https?://', '', d.lower()).split('/')[0].removeprefix('www.')
    return '' if GENERICOS.search(d) else d


ofertas = {}
for arq in sorted(pasta.glob('*.json')):
    try:
        dados = json.loads(arq.read_text() or '{}')
    except json.JSONDecodeError:
        continue
    for a in dados.get('anuncios', []):
        chave = (a['page_id'], dominio(a))
        o = ofertas.setdefault(chave, {
            'anunciante': a['anunciante'], 'page_id': a['page_id'], 'perfil': a.get('perfil'),
            'dominio': chave[1], 'anuncios': {}, 'termos': set(),
        })
        o['anuncios'][a['id']] = a
        o['termos'].add(arq.stem)

resultado = []
for o in ofertas.values():
    ads = list(o['anuncios'].values())
    dias = [a['dias_ativo'] for a in ads if a.get('dias_ativo') is not None]
    if not dias:
        continue
    total = sum(a.get('criativos_iguais') or 1 for a in ads)
    idade = max(dias)
    item = {
        'anunciante': o['anunciante'], 'page_id': o['page_id'], 'perfil': o['perfil'], 'dominio': o['dominio'],
        'anuncios_ativos_min': total, 'idade_dias': idade, 'anuncio_mais_novo_dias': min(dias),
        'termos': sorted(o['termos']),
        'exemplo_link': next((a['link'] for a in ads if a.get('link')), ''),
        'copies': [a['texto'][:300] for a in sorted(ads, key=lambda x: -(x.get('criativos_iguais') or 1))[:3]],
        'titulos': sorted({a['titulo'] for a in ads if a.get('titulo')})[:5],
        'passa_filtros': MIN_DIAS <= idade <= MAX_DIAS and total >= MIN_ANUNCIOS,
    }
    resultado.append(item)

resultado.sort(key=lambda x: (not x['passa_filtros'], -x['anuncios_ativos_min']))
saida.write_text(json.dumps(resultado, ensure_ascii=False, indent=1))
ok = [r for r in resultado if r['passa_filtros']]
print(f'{len(ofertas)} ofertas vistas, {len(ok)} passam idade {MIN_DIAS}-{MAX_DIAS} dias e >= {MIN_ANUNCIOS} anúncios')
for r in ok:
    print(f"- {r['anunciante']} | {r['dominio'] or '(sem domínio)'} | {r['anuncios_ativos_min']} anúncios | {r['idade_dias']} dias")
