"""Monta os mockups e comprime as imagens da LP (cada uma < 150 KB).
Uso: python3 compor.py .tmp ../img
"""
import sys, os
from PIL import Image, ImageDraw, ImageFilter

tmp, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
L = lambda n: Image.open(os.path.join(tmp, n + '.png')).convert('RGB')
FUNDO = (15, 61, 46)


def salvar(img, nome, largura=900, q=84):
    if img.width > largura:
        img = img.resize((largura, round(img.height * largura / img.width)), Image.LANCZOS)
    dest = os.path.join(out, nome + '.jpg')
    while True:
        img.convert('RGB').save(dest, 'JPEG', quality=q, optimize=True, progressive=True)
        if os.path.getsize(dest) < 150 * 1024 or q <= 50:
            break
        q -= 4
    print(f'{nome}.jpg {img.width}x{img.height} {os.path.getsize(dest)//1024} KB')


def colar(fundo, img, xy, ang=0, sombra=90):
    rgba = img.convert('RGBA').rotate(ang, expand=True, resample=Image.BICUBIC)
    s = Image.new('RGBA', rgba.size, (0, 0, 0, 0))
    s.putalpha(rgba.getchannel('A').point(lambda a: sombra if a else 0))
    s = s.filter(ImageFilter.GaussianBlur(16))
    fundo.alpha_composite(s, (xy[0] + 12, xy[1] + 18))
    fundo.alpha_composite(rgba, xy)


def larg(img, w):
    return img.resize((w, round(img.height * w / img.width)), Image.LANCZOS)


def celular(tela, w=380):
    """Moldura de celular com a parte de cima da imagem na tela."""
    tw = w - 28
    tela = larg(tela, tw)
    th = min(round(tw * 2.05), tela.height)
    tela = tela.crop((0, 0, tw, th))
    h = th + 28
    cel = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(cel)
    d.rounded_rectangle([0, 0, w - 1, h - 1], radius=48, fill=(20, 20, 22))
    mask = Image.new('L', tela.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, tela.width - 1, tela.height - 1], radius=36, fill=255)
    cel.paste(tela, (14, 14), mask)
    d.rounded_rectangle([w // 2 - 50, 22, w // 2 + 50, 40], radius=9, fill=(20, 20, 22))
    return cel


def fundo_natal(W, H):
    f = Image.new('RGBA', (W, H), FUNDO + (255,))
    d = ImageDraw.Draw(f)
    for i in range(0, W, 90):  # brilho dourado discreto
        d.ellipse([i, 30 + (i * 7) % 60, i + 5, 35 + (i * 7) % 60], fill=(233, 207, 138, 255))
    return f


ficha, capa = L('ficha'), L('capa')
b = [L(f'bonus{i}') for i in range(1, 7)]

# 1) Dobra: celular com a ficha do pernil + capa + 2 bônus em leque
f = fundo_natal(1200, 820)
colar(f, larg(b[2], 300), (60, 230), 10)
colar(f, larg(b[3], 300), (840, 250), -9)
colar(f, larg(capa, 380), (190, 140), 6)
colar(f, celular(ficha, 400), (560, 40), -3, 120)
salvar(f, 'mockup-dobra', 1000)

# 7) Oferta / bônus: capa + 6 bônus
f = fundo_natal(1200, 980)
pos = [(40, 300, 12), (200, 120, 7), (380, 40, 2), (700, 50, -3), (860, 140, -8), (980, 320, -13)]
for img, (x, y, a) in zip(b, pos):
    colar(f, larg(img, 270), (x, y), a)
colar(f, larg(capa, 420), (390, 300), 0, 130)
salvar(f, 'mockup-oferta', 1000)

# 2–6) páginas soltas
salvar(L('ficha-quantidade'), 'ficha-quantidade', 900)
salvar(L('ficha-preco'), 'ficha-preco', 900)
salvar(L('kits'), 'kits-prontos', 900)
salvar(L('calendario'), 'calendario-anti-sufoco', 900)
salvar(L('planilha'), 'planilha-pedidos', 1000)
salvar(capa, 'capa', 600)
salvar(L('capa-basico'), 'capa-basico', 600)
for i, img in enumerate(b, 1):
    salvar(img, f'bonus-{i}', 420)
