"""Gera o pacote da página para o ChatGPT publicar (regra de 2026-11-09 em regras/paginas.md).

Uso (da pasta estrutura/pagina):  python3 fonte/gerar-pacote.py
Entrada: index.html (protótipo, com cada texto marcado por data-bloco / data-t) e img/.
Saída:
  pacote/index.html, pacote/termos.html, pacote/privacidade.html, pacote/img/
  pacote-chatgpt-math-missions-pt.zip
  TEXTOS-PT.md  (todos os textos por bloco e chave; a Tradução devolve o mesmo arquivo em en-US)
"""
import os, re, shutil, zipfile
from bs4 import BeautifulSoup

AQUI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAC = os.path.join(AQUI, 'pacote')
ZIP = os.path.join(AQUI, 'pacote-chatgpt-math-missions-pt.zip')
LANG = 'pt-BR'

TITULO = 'Math Missions · O método do país nº 1 em matemática para seu filho'
DESCRICAO = ('Em 3 passos (Concreto → Desenho → Conta), seu filho de 8 a 11 anos aprende a enxergar o problema '
             'antes de fazer a conta, e treina em missões de mistério para imprimir.')

SCRIPT = r"""
<script>
// ===== CONFIGURAÇÃO (preencher antes de publicar) =====
var CONFIG = {
  checkout: '',  // COLE AQUI o link do checkout em dólar (US$ 17), entre as aspas
  pixel: ''      // COLE AQUI o ID do Pixel do Meta (só números), entre as aspas
};

// Repasse de UTMs: utm_*, src, sck e fbclid da URL da página vão para o botão do checkout.
// Só o botão da oferta (classe "checkout") vai ao checkout. Sem link preenchido, ele fica na própria oferta.
(function () {
  if (!CONFIG.checkout) return;
  var aqui = new URLSearchParams(location.search);
  document.querySelectorAll('a.checkout').forEach(function (a) {
    var url = new URL(CONFIG.checkout);
    aqui.forEach(function (v, k) {
      if (/^utm_/.test(k) || k === 'src' || k === 'sck' || k === 'fbclid') url.searchParams.set(k, v);
    });
    a.href = url.toString();
  });
})();

// Pixel do Meta: PageView ao abrir, ViewContent quando a oferta aparece e InitiateCheckout no clique do botão de compra.
if (CONFIG.pixel) {
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', CONFIG.pixel);
  fbq('track', 'PageView');
  var dados = { content_name: 'Math Missions', value: 17.00, currency: 'USD' };
  var oferta = document.getElementById('oferta'), visto = false;
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) {
    if (!visto && es[0].isIntersecting) { visto = true; fbq('track', 'ViewContent', dados); }
  }).observe(oferta);
  document.querySelectorAll('a.checkout').forEach(function (a) {
    a.addEventListener('click', function () { if (CONFIG.checkout) fbq('track', 'InitiateCheckout', dados); });
  });
}
</script>
"""

CSS_LEGAL = ('body{margin:0;background:#fbfcfe;font-family:Figtree,system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;'
             'font-size:16px;line-height:1.6;color:#0f2547}.wrap{max-width:680px;margin:0 auto;padding:24px 18px 60px}'
             'h1{font-size:26px;line-height:1.2}h2{font-size:19px;margin-top:26px}a{color:#1f3f8f}')


def legal(titulo, corpo):
    return (f'<!doctype html><html lang="{LANG}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
            f'<meta name="robots" content="noindex"><title>{titulo} · Math Missions</title><style>{CSS_LEGAL}</style></head>'
            f'<body><div class="wrap"><p><a href="index.html">← Voltar</a></p><h1>{titulo}</h1><p><em>Última atualização: [DATA]</em></p>'
            f'{corpo}</div></body></html>\n')


TERMOS = legal('Termos de uso', """
<p>Estes termos valem para a compra e o uso do material digital <strong>Math Missions</strong> (Guia do Método de Singapura para Pais, 30 Missões de Mistério, Cartão do Desenho e Roteiros para Pais), vendido por [EMPRESA/RESPONSÁVEL], [ENDEREÇO DA EMPRESA], contato [E-MAIL].</p>
<h2>1. O que é o produto</h2><p>Material educativo digital em PDF, para imprimir em casa, em preto e branco, para crianças de 8 a 11 anos. É um material independente que usa os princípios do método ensinado nas escolas de Singapura. Não tem vínculo com o Ministério da Educação de Singapura, a IEA, a OCDE, a Singapore Math Inc. ou a Marshall Cavendish. “Singapore Math” é marca registrada de seus titulares.</p>
<h2>2. Preço e pagamento</h2><p>O preço é cobrado em dólar americano (US$), em pagamento único, pela plataforma de pagamento indicada no checkout. Seu banco ou cartão pode converter o valor para a sua moeda e cobrar tarifas próprias. Impostos sobre consumo que a lei do seu país exigir são informados no checkout antes do pagamento.</p>
<h2>3. Entrega</h2><p>Assim que o pagamento é aprovado, o link de download é enviado ao e-mail informado na compra. Recomendamos baixar e guardar os arquivos. Se não receber o e-mail, confira a caixa de spam e escreva para [E-MAIL].</p>
<h2>4. Licença de uso (familiar)</h2><p>A compra dá uma licença pessoal a quem comprou, para uso com as crianças da própria família. Você pode imprimir quantas vezes quiser para esse uso.</p><p>Não é permitido usar em sala de aula ou em escola, revender, compartilhar os arquivos, nem publicar em sites, grupos ou redes sociais.</p>
<h2 id="reembolso">5. Garantia e reembolso (30 dias)</h2><p>Você tem 30 dias, contados da compra, para pedir o reembolso por qualquer motivo. Escreva para [E-MAIL] com o e-mail usado na compra e devolvemos 100% do valor pago, pelo mesmo meio de pagamento. Este prazo não reduz nenhum direito que a lei do seu país lhe garanta.</p>
<h2>6. Resultados</h2><p>O material é um apoio para a família. Não prometemos notas nem resultados escolares, que dependem de muitos fatores.</p>
<h2>7. Direitos autorais</h2><p>Textos, missões, ilustrações e diagramação são protegidos por direitos autorais. O uso fora da licença do item 4 não é permitido.</p>
<h2>8. Contato</h2><p>[EMPRESA/RESPONSÁVEL] · [ENDEREÇO DA EMPRESA] · [E-MAIL]</p>
""")

PRIVACIDADE = legal('Política de privacidade', """
<p>Esta política explica como [EMPRESA/RESPONSÁVEL] (“nós”) trata os seus dados pessoais nesta página e na compra do Math Missions, conforme as leis de proteção de dados aplicáveis ao seu país.</p>
<h2>1. Dados que coletamos</h2><p><strong>Na compra:</strong> nome, e-mail, país e dados de pagamento, informados no checkout da plataforma de pagamento, que processa o pagamento. Não recebemos nem guardamos os dados do seu cartão.</p><p><strong>Na navegação:</strong> esta página usa o Pixel do Meta (Facebook/Instagram), que registra visitas e ações na página por meio de cookies, e parâmetros de campanha na URL (UTMs) para sabermos qual anúncio trouxe a visita.</p>
<h2>2. Para que usamos</h2><p>Para entregar o produto, dar suporte e processar reembolsos; para cumprir obrigações legais e fiscais; e para medir o resultado dos nossos anúncios com o Pixel do Meta. Você pode recusar a medição bloqueando cookies no navegador.</p>
<h2>3. Com quem compartilhamos</h2><p>Com a plataforma de pagamento (pagamento e entrega), com a Meta (medição de anúncios) e com prestadores de hospedagem e e-mail, apenas no necessário para essas finalidades. Não vendemos os seus dados. Alguns prestadores podem tratar dados em servidores de outros países.</p>
<h2>4. Seus direitos</h2><p>Você pode pedir acesso, correção ou exclusão dos seus dados, ou retirar o consentimento, escrevendo para [E-MAIL]. Também pode ajustar as preferências de anúncios na sua conta do Facebook/Instagram.</p>
<h2>5. Crianças</h2><p>A página e a compra são para adultos. Não coletamos dados de crianças.</p>
<h2>6. Por quanto tempo guardamos</h2><p>Pelo tempo necessário para a entrega, o suporte e as obrigações legais.</p>
<h2>7. Contato</h2><p>[EMPRESA/RESPONSÁVEL] · [E-MAIL]</p>
<p><small>This site is not a part of the Facebook website or Meta Platforms, Inc.</small></p>
""")


def main():
    src = open(os.path.join(AQUI, 'index.html'), encoding='utf-8').read()
    soup = BeautifulSoup(src, 'html.parser')
    for el in soup.select('.prototipo'):
        el.decompose()
    for m in soup.find_all('meta'):
        m.decompose()  # meta de protótipo; o cabeçalho final é escrito abaixo
    if soup.title:
        soup.title.decompose()
    links = ''.join(str(l) for l in soup.find_all('link'))
    for l in soup.find_all('link'):
        l.decompose()
    style = str(soup.find('style')); soup.find('style').decompose()
    corpo = str(soup).strip()

    head = (f'<!doctype html>\n<html lang="{LANG}">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
            f'<title data-t="00-meta.01">{TITULO}</title>\n<meta name="description" data-t="00-meta.02" content="{DESCRICAO}">\n'
            f'{links}\n{style}\n</head>\n<body>\n')
    html = head + corpo + '\n' + SCRIPT + '</body>\n</html>\n'

    shutil.rmtree(PAC, ignore_errors=True)
    os.makedirs(os.path.join(PAC, 'img'))
    open(os.path.join(PAC, 'index.html'), 'w', encoding='utf-8').write(html)
    open(os.path.join(PAC, 'termos.html'), 'w', encoding='utf-8').write(TERMOS)
    open(os.path.join(PAC, 'privacidade.html'), 'w', encoding='utf-8').write(PRIVACIDADE)
    usadas = sorted(set(re.findall(r'img/([\w.-]+\.(?:jpg|webp|png))', html)))
    for f in usadas:
        shutil.copy(os.path.join(AQUI, 'img', f), os.path.join(PAC, 'img', f))

    # TEXTOS-PT.md: o texto de cada chave, na ordem da página
    final = BeautifulSoup(html, 'html.parser')
    linhas, bloco_atual = [], None
    for el in final.select('[data-t]'):
        k = el['data-t']; b = k.split('.')[0]
        if b != bloco_atual:
            linhas.append(f'\n## {b}\n\n| Chave | Texto |\n|---|---|'); bloco_atual = b
        if el.name == 'img':
            t = 'ALT: ' + el.get('alt', '')
        elif el.name == 'meta':
            t = el.get('content', '')
        else:
            t = el.decode_contents().strip()
        t = re.sub(r'\s+', ' ', t).replace('|', '\\|')
        linhas.append(f'| `{k}` | {t} |')
    cab = ('# Textos da página por bloco · Math Missions (pais) · PT\n\n'
           '> Gerado de `estrutura/pagina/index.html` por `fonte/gerar-pacote.py`. Cada texto da página tem um atributo `data-t` com a chave abaixo.\n'
           '> **Para a Tradução:** devolver este mesmo arquivo em en-US, com as mesmas chaves, mantendo as tags HTML internas (`<b>`, `<sup>`, `<span class="q">`). '
           'Imagens: só o texto do `alt`. O ChatGPT troca o conteúdo de cada elemento pela chave, sem mexer no layout. '
           'Também trocar `lang="pt-BR"` por `lang="en"` e traduzir `termos.html` e `privacidade.html`.\n')
    open(os.path.join(AQUI, 'TEXTOS-PT.md'), 'w', encoding='utf-8').write(cab + '\n'.join(linhas) + '\n')

    with zipfile.ZipFile(ZIP, 'w', zipfile.ZIP_DEFLATED) as z:
        for raiz, _, arqs in os.walk(PAC):
            for a in sorted(arqs):
                cam = os.path.join(raiz, a)
                z.write(cam, os.path.relpath(cam, PAC))
    print(f'ok  pacote: {len(usadas)} imagens · {len(final.select("[data-t]"))} textos com chave · {os.path.getsize(ZIP)//1024} KB')


main()
