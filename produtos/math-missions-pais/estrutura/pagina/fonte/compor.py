"""Monta os mockups e comprime as imagens do protótipo.
Uso: python3 compor.py <pasta_tmp> <pasta_img>
"""
import sys, os
from PIL import Image, ImageFilter, ImageDraw

tmp, out = sys.argv[1], sys.argv[2]
L = lambda n: Image.open(os.path.join(tmp, n + '.png')).convert('RGB')


def salvar(img, nome, largura=900, q=80):
    if img.width > largura:
        img = img.resize((largura, round(img.height * largura / img.width)), Image.LANCZOS)
    img.save(os.path.join(out, nome + '.jpg'), 'JPEG', quality=q, optimize=True, progressive=True)


def folha(img, w):
    """Página com borda fina, redimensionada para a largura w."""
    img = img.resize((w, round(img.height * w / img.width)), Image.LANCZOS)
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, img.width - 1, img.height - 1], outline=(205, 210, 220))
    return img


def colar(fundo, img, xy, ang):
    rgba = img.convert('RGBA').rotate(ang, expand=True, resample=Image.BICUBIC)
    sombra = Image.new('RGBA', rgba.size, (0, 0, 0, 0))
    sombra.putalpha(rgba.getchannel('A').point(lambda a: 70 if a else 0))
    sombra = sombra.filter(ImageFilter.GaussianBlur(14))
    fundo.alpha_composite(sombra, (xy[0] + 10, xy[1] + 16))
    fundo.alpha_composite(rgba, xy)


def mockup(W, H, pecas, nome, fundo_cor=(238, 242, 248)):
    f = Image.new('RGBA', (W, H), fundo_cor + (255,))
    for img, w, xy, ang in pecas:
        colar(f, folha(img, w), xy, ang)
    salvar(f.convert('RGB'), nome, largura=W, q=82)


capa, missao, cartao = L('guia-capa'), L('missao-folha'), L('cartao-folha')
cartao_meio = cartao.crop((0, 0, cartao.width, cartao.height // 2))
barras = L('c5-guia-barras')

# Mockup da dobra: Guia na frente, missão e cartão atrás
mockup(1000, 760, [
    (missao, 400, (30, 60), 6),
    (cartao_meio, 440, (520, 400), -5),
    (capa, 430, (290, 30), -3),
], 'mockup-dobra')

# Mockup grande da oferta: tudo junto
mockup(1000, 820, [
    (missao, 330, (20, 150), 8),
    (L('c7-gabarito'), 320, (640, 150), -7),
    (barras, 330, (560, 70), -2),
    (L('roteiro-adulto'), 310, (120, 90), 4),
    (cartao_meio, 420, (540, 520), -4),
    (capa, 390, (300, 50), -1),
], 'mockup-oferta')

# Carrossel e capas da pilha
for n in ['c1-problema', 'c2-desenhe', 'c3-resolvida', 'c4-codigo', 'c7-gabarito', 'roteiro-adulto']:
    salvar(L(n), n)
salvar(barras, 'c5-guia-barras')
salvar(cartao_meio, 'c6-cartao')
salvar(capa, 'guia-capa', largura=600)
print('ok  imagens em', out)
