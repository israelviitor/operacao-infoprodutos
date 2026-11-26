# Prompt para o ChatGPT montar a LP · Ceia que Vende

> Estrutura, 2026-11-26. Regra de `regras/paginas.md` (2026-11-09): quem monta e publica é o ChatGPT (v0/Vercel), na conta do dono.
> Copy: `copy/pagina-vendas.md` (texto exato, revisado pelo comitê). Os [CONFIRMAR] da copy foram resolvidos pela especificação do entregável (`estrutura/entregavel/ESPECIFICACAO.md`): tudo o que a página promete entra no produto.

## O que você (dono) faz
1. Baixe `estrutura/pagina/pacote-imagens-ceia-que-vende.zip`. Ele tem a pasta `img/` com as 14 imagens da página: mockups, ficha do pernil, kits, calendário, planilha, capa e os 6 bônus.
2. Abra uma conversa nova no ChatGPT, **anexe o .zip** e cole tudo o que está entre as linhas "INÍCIO DO PROMPT" e "FIM DO PROMPT".
3. Quando tiver os links da Cakto e o ID do Pixel, troque os 3 campos `[CHECKOUT BÁSICO]`, `[CHECKOUT PREMIUM]` e `[PIXEL]` (o ChatGPT vai te pedir). Dá para publicar antes, e os botões de compra só rolam até a oferta.
4. Mande o link publicado para a sessão de Estrutura fazer a auditoria (botões, UTMs, preço, velocidade).

---

## ===== INÍCIO DO PROMPT =====

Quero que você monte e publique uma landing page de venda no v0/Vercel que você já tem conectado à minha conta. A copy está pronta e aprovada **palavra por palavra**. O seu trabalho é o layout, o código e a publicação, **não** a escrita. Anexei um .zip com a pasta `img/`, com as imagens da página.

### 1. Regras que você NÃO pode quebrar
1. **Não reescreva, não resuma e não "melhore" nenhum texto.** Use o texto exatamente como está abaixo, incluindo pontuação, negritos e emojis. Se algum texto não couber, diminua a fonte ou ajuste o layout, nunca o texto.
2. **Não invente nada:** nenhum depoimento, número de alunas, print de faturamento, cronômetro, contador de vagas, "de R$ X por R$ Y", selo de "mais vendido" ou bônus que não esteja aqui.
3. **Não troque os preços:** Básico **R$ 17,90** e Premium **R$ 29,90**.
4. **Só os 2 botões do bloco 11 vão para o checkout** (um para cada plano). Todos os outros botões rolam até a oferta (âncora `#oferta`).
5. **Não use rostos de pessoas** em nenhuma imagem (só mãos, mesa, comida e materiais).
6. **Não remova o `<script>` de configuração** (seção 4). Ele passa as UTMs para o checkout e liga o Pixel.
7. **Sem pop-up, sem menu e sem link de WhatsApp.** O rodapé não tem botão.
8. A página é **para celular primeiro** (390 × 844). Ela precisa ficar perfeita no celular e boa no computador.
9. Não converta para outro idioma e não mude o nome do produto (**Ceia que Vende**).

### 2. Identidade visual (tema de Natal premium)
- **Cores** (use como variáveis CSS):
  - verde-pinheiro `#0F3D2E` (fundo das faixas escuras e títulos);
  - vermelho-vinho `#8C1C24` (faixa do topo, destaques e preço);
  - dourado `#C9A24A` (bordas do Premium e detalhes; para texto dourado sobre verde, use `#E9CF8A`);
  - creme `#FBF6EC` (fundo principal);
  - texto `#2A1F1A`;
  - verde do ✔ `#1E6B3F`;
  - cinza do ✖ `#8A8079`.
- **Fontes** (Google Fonts): títulos em **Playfair Display** (700 e 800); textos e botões em **Inter** (400, 600 e 800).
- **Tamanhos no celular:** texto 16 a 17 px; títulos de seção 26 a 30 px; headline 30 a 34 px.
- **Botões de rolagem:** verde-pinheiro com texto creme, altura mínima 56 px, cantos 12 px, largura total no celular.
- **Botão do Premium:** vermelho-vinho com borda dourada, um pouco maior e com um brilho suave de destaque. **Botão do Básico:** contorno verde, fundo transparente.
- **Climinha de Natal sem poluir:** pequenos detalhes dourados (estrelas finas, um filete dourado entre seções) e fundo creme. Nada de neve animada, gif, música ou enfeite que pese a página.
- **Faixas alternadas:** creme e branco-quente (`#FFFDF8`), com 2 seções em verde-pinheiro: o bloco 4 (As 3 Contas) e o bloco 11 (Oferta).
- **Alinhamento:** à esquerda, textos curtos, muito espaço entre blocos (40 a 56 px).
- **Performance:** imagens com `loading="lazy"`, exceto a da primeira dobra. Página leve (meta: abaixo de 1,5 MB).

### 3. Imagens (pasta `img/` do .zip)
| Arquivo | Onde | O que é |
|---|---|---|
| `mockup-dobra.jpg` | Bloco 1 (dobra) e bloco 16 | Celular aberto na ficha do pernil para 10 pessoas (quantidade, custo, preço e lucro), a capa "Ceia que Vende" e 2 bônus em leque, sobre fundo verde de Natal |
| `ficha-quantidade.jpg` | Bloco 3, página 1 | Ficha do pernil: tabela "A Conta da Quantidade" para 4, 6, 10 e 20 pessoas |
| `ficha-preco.jpg` | Bloco 3, página 2 | Mesma ficha: tabela "A Conta do Preço" (custo, preço de venda e lucro) |
| `kits-prontos.jpg` | Bloco 3, página 3 | Página do bônus Kits Prontos (4, 6 a 8, 10 e 20 pessoas, com preço do combo) |
| `calendario-anti-sufoco.jpg` | Bloco 3, página 4 | Página do Calendário Anti-Sufoco (26/11 a 25/12 + limite de pedidos por dia) |
| `planilha-pedidos.jpg` | Bloco 3, página 5, e bônus 5 | Print da Planilha de Pedidos e Sinal |
| `mockup-oferta.jpg` | Bloco 11 (card Premium) | Capa do Premium na frente e os 6 bônus em leque |
| `capa.jpg` | Reserva (se precisar de uma capa sozinha) | Capa do Premium |
| `bonus-1.jpg` a `bonus-6.jpg` | Bloco 10, um em cada bônus | Capa de cada bônus |

**Imagem que você mesmo cria (bloco 16):** foto realista de uma **mesa de ceia de Natal posta**, vista de cima, num ambiente de casa brasileira: pernil assado fatiado numa travessa, arroz à grega, farofa, salpicão, rabanadas, velas acesas, guardanapos vermelhos e detalhes dourados. Luz quente de fim de tarde. **Sem pessoas e sem rostos**, sem texto, sem logos e sem marcas. Formato 4:3, leve (até 150 KB).

**Imagens de apoio que você pode desenhar em ícones simples** (SVG, traço fino, cores da paleta): balança (bloco 4, conta 1), cifrão (conta 2), calendário (conta 3), os 4 passos do bloco 7, os 3 passos do bloco 14 e os selos do bloco 11. No bloco 7, se quiser uma imagem, use **mãos de adulto na cozinha, sem rosto**.

### 4. Configuração técnica (colar no fim do `index.html`, antes de `</body>`)
```html
<script>
// ===== CONFIGURAÇÃO: o dono troca os 3 campos abaixo =====
var CONFIG = {
  checkoutBasico: '[CHECKOUT BÁSICO]',   // link do checkout do Básico na Cakto (R$ 17,90)
  checkoutPremium: '[CHECKOUT PREMIUM]', // link do checkout do Premium na Cakto (R$ 29,90)
  pixel: '[PIXEL]'                       // ID do Pixel da Meta (só números)
};
var ok = function (v) { return v && v.charAt(0) !== '['; };

// Botões de compra: passam utm_*, src, sck e fbclid para o checkout. Sem link preenchido, rolam até a oferta.
(function () {
  var aqui = new URLSearchParams(location.search);
  [['a.checkout-basico', CONFIG.checkoutBasico], ['a.checkout-premium', CONFIG.checkoutPremium]].forEach(function (par) {
    if (!ok(par[1])) return;
    document.querySelectorAll(par[0]).forEach(function (a) {
      var url = new URL(par[1]);
      aqui.forEach(function (v, k) { if (/^utm_/.test(k) || k === 'src' || k === 'sck' || k === 'fbclid') url.searchParams.set(k, v); });
      a.href = url.toString();
    });
  });
})();

// Pixel da Meta: PageView ao abrir e ViewContent quando a oferta aparece. InitiateCheckout e Purchase saem da Cakto.
if (ok(CONFIG.pixel)) {
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', CONFIG.pixel);
  fbq('track', 'PageView');
  var visto = false, oferta = document.getElementById('oferta');
  if (oferta && 'IntersectionObserver' in window) new IntersectionObserver(function (es) {
    if (!visto && es[0].isIntersecting) { visto = true; fbq('track', 'ViewContent', { content_name: 'Ceia que Vende', value: 29.90, currency: 'BRL' }); }
  }).observe(oferta);
}
</script>
```
- O botão do Premium no bloco 11 tem `class="checkout-premium"` e `href="#oferta"`. O botão do Básico tem `class="checkout-basico"` e `href="#oferta"`. O script troca o `href` quando o link existir.
- Todos os outros botões: `href="#oferta"` com rolagem suave.
- A seção do bloco 11 tem `id="oferta"`.
- `<title>`: **Ceia que Vende · Faça a ceia de Natal que paga o seu dezembro**. `<meta name="description">`: **50 receitas de Natal com as 3 contas prontas: quanto fazer, quanto cobrar e quantos pedidos aceitar.**
- Crie também `termos.html` e `privacidade.html` com os textos da seção 7 e ligue-os no rodapé.

### 5. A página, bloco a bloco (texto exato)
`**texto**` = negrito. Cada `·` separa itens de uma lista. O que está em *[layout]* é instrução para você, não é texto da página.

---

**BLOCO 1 · PRIMEIRA DOBRA** *[layout: tudo visível sem rolar em 390 × 844, na ordem abaixo. Faixa fina no topo, depois a headline, a subheadline, o mockup com no máximo ~220 px de altura no celular, os 3 bullets e o botão. No computador: texto à esquerda e mockup à direita.]*
- Faixa do topo *[vermelho-vinho, texto creme, 13–14 px]*: 🎄 Encomendas de Natal fecham por volta de 15/12. Quem abre primeiro pega os clientes.
- Headline *[Playfair, verde-pinheiro; "paga o seu dezembro" pode ter um sublinhado dourado]*: **Faça a ceia de Natal que paga o seu dezembro.**
- Subheadline: 50 receitas de Natal com as **3 contas prontas**: quanto fazer, quanto cobrar e quantos pedidos aceitar.
- Imagem: `mockup-dobra.jpg` *(alt: Celular aberto na ficha do pernil para 10 pessoas com custo, preço e lucro, a capa do Ceia que Vende e bônus)*
- Bullets *[✔ verde]*:
  - ✔ Custo, preço e **lucro de cada prato** para 4, 6, 10 ou 20 pessoas
  - ✔ 10 ceias de R$ 299 = **R$ 2.990**. A conta está pronta.
  - ✔ Tudo isso no **Premium por R$ 29,90**, com acesso imediato no celular
- Botão → `#oferta`: **QUERO VENDER MINHA CEIA**

---

**BLOCO 2 · DOR** *[fundo creme]*
- Título: Todo ano é a mesma coisa.
- *[3 balões estilo WhatsApp, empilhados, alternando esquerda e direita]*: "Quanto eu cobro?" · "Quanto eu faço?" · "Será que ainda dá tempo?"
- Você cozinha bem. A família inteira sabe. Todo Natal alguém pergunta: "Você não faz pra vender?"
- Aí você chuta um preço. Cobra o que a vizinha cobra. Aceita todo pedido que chega no WhatsApp.
- E no dia 23 descobre que o pernil custou mais do que você cobrou, que o forno não dá conta e que **trabalhou de graça** o Natal inteiro.
- *[caixa de destaque com borda vermelho-vinho e, ao fundo, um recorte de manchete de jornal desfocado e ilegível, SEM nome e SEM rosto]*: Em 2020, uma cozinheira aceitou dezenas de ceias, não deu conta e deixou os clientes sem ceia na noite de Natal. Virou meme no Brasil inteiro. A frase dela depois: **"Não fiz e não farei mais ceia."**
- *[frase grande, Playfair]*: Ela não cozinhava mal. **Ela só não fez as contas antes de aceitar o pedido.**

---

**BLOCO 3 · AS PÁGINAS DO MATERIAL** *[carrossel horizontal com rolagem por arrasto e "pontinhos" embaixo; cada item mostra a imagem inteira e legível dentro de um cartão branco com sombra leve, e a legenda abaixo]*
- Título: Abra o pernil para 10 pessoas: o custo, o preço e o lucro já estão aí
- Item 1: `ficha-quantidade.jpg`. Legenda: Cada receita com a quantidade certa para 4, 6, 10 e 20 pessoas.
- Item 2: `ficha-preco.jpg`. Legenda: O custo do mercado, o preço de venda e o que sobra no seu bolso.
- Item 3: `kits-prontos.jpg`. Legenda: Kits prontos de 4 a 20 pessoas, com o preço do combo fechado.
- Item 4: `calendario-anti-sufoco.jpg`. Legenda: O calendário que diz quando abrir, quando fechar e quantos pedidos cabem por dia.
- Item 5: `planilha-pedidos.jpg`. Legenda: A planilha que mostra quem pagou o sinal e quanto falta receber.
- *[texto pequeno abaixo do carrossel]*: Arraste para o lado →
- Botão → `#oferta`: **QUERO AS FICHAS PRONTAS**

---

**BLOCO 4 · AS 3 CONTAS DA CEIA** *[fundo verde-pinheiro, texto creme; 3 cartões creme com ícone dourado: balança, cifrão e calendário]*
- Título: Quem lucra com ceia faz **3 contas** antes de aceitar o primeiro pedido
- Cartão 1: **1. A Conta da Quantidade.** Quanto comprar e quanto fazer de cada prato. Sem sobra que vira prejuízo e sem faltar comida na mesa do cliente.
- Cartão 2: **2. A Conta do Preço.** Quanto custa, por quanto vender e quanto sobra. Você vê o lucro **antes** de dizer "sim".
- Cartão 3: **3. A Conta do Limite.** O limite de pedidos por dia, quando fechar as encomendas e o sinal de 50% que paga as compras.
- *[frase de fechamento, destaque dourado]*: Nenhuma receita de YouTube faz essas contas por você. **No Premium, elas já vêm feitas.**

---

**BLOCO 5 · ANTES E DEPOIS** *[2 colunas no computador; no celular, uma embaixo da outra: a de "antes" em cinza com ✖ e a de "depois" com borda verde e ✔]*
- Título: Natal no olho × Natal com as contas
- Antes: ✖ Preço chutado · ✖ Compra no mercado sem lista · ✖ Aceita todo pedido · ✖ Cliente desiste no dia 23 e o peru fica com você · ✖ Dia 24 sem dormir
- Depois: ✔ Preço com lucro calculado · ✔ Lista de compras pronta · ✔ Limite de pedidos por dia · ✔ Sinal de 50% no Pix antes de comprar · ✔ Encomendas fechadas no dia 15 e dia 24 sob controle

---

**BLOCO 6 · NÚMEROS, O QUE COBRE E A CONTA**
- *[4 números grandes em grade 2×2 no celular]*: **50** receitas · **4** tamanhos (4, 6, 10 e 20 pessoas) · **6** bônus · **1** calendário do dia 26/11 ao dia 25/12
- *[linha pequena logo abaixo dos números, em itálico]*: *Tamanhos, contas e bônus: no Premium*
- *[chips/etiquetas agrupadas por categoria]*: Assados (peru, chester, pernil, tender, lombo) · Acompanhamentos (arroz à grega, farofa, salpicão, maionese) · Sobremesas (rabanada, pavê, pudim)
- *[caixa de destaque creme com borda dourada]*: **Faça a conta:** se você aceitar 10 pedidos de um kit de R$ 299, são **R$ 2.990**. Com custo de R$ 1.000 a R$ 1.200 (preço = custo × 2,5 a 3), sobram cerca de **R$ 1.800 a R$ 2.000** antes de gás, embalagem e entrega. E o sinal de 50% paga as compras.
- *[nota em letra pequena logo abaixo da caixa]*: Exemplo com preço praticado no mercado (kit para 6 a 8 pessoas, Recife). Seu resultado depende do seu preço, custo e número de pedidos.
- *[lista curta, com a fonte em letra pequena]*: Quanto o cliente já paga: kit de ceia de R$ 179 a R$ 479,90 (padaria, Natal/RN, 2025) · chester de ~3,5 kg por R$ 300 a R$ 360 · tender caseiro com farofa por R$ 350 · ceia pronta de mercado e restaurante a partir de R$ 219
- Botão → `#oferta`: **QUERO SABER QUANTO COBRAR**

---

**BLOCO 7 · COMO FICA A SUA SEMANA** *[linha do tempo vertical com 4 ícones; selo pequeno "PREMIUM" ao lado do título]*
- Título: Do pedido à entrega, em 4 passos
- **1. Escolha** os pratos e os kits que vai vender.
- **2. Divulgue** no WhatsApp com o preço pronto.
- **3. Receba o sinal** de 50% no Pix e anote na planilha.
- **4. Feche as encomendas** no dia certo e produza com a lista de compras pronta.

---

**BLOCO 8 · PARA QUEM É**
- Título "É para você se" *[✔ verdes]*: ✔ Cozinha bem e todo Natal ouve "você devia vender" · ✔ Já vende doce, salgado ou marmita e quer o dinheiro de dezembro · ✔ Nunca vendeu comida e quer começar com as contas certas · ✔ Tem medo de pegar pedido demais e não dar conta · ✔ Precisa de um dinheiro extra para as contas de fim de ano
- Título "Não é para você se" *[lista cinza, curta]*: ✖ Procura curso de gastronomia · ✖ Quer receita de bacalhau sofisticado com preço de restaurante

---

**BLOCO 9 · O QUE MUDA** *[cartões empilhados, cada um com ícone; o recurso em negrito e o ganho depois da seta; selo "PREMIUM" no título]*
- Título: O que muda no seu Natal com o Premium
- **Quantidade por nº de pessoas** → você compra o certo e não joga dinheiro fora.
- **Custo, preço e lucro** → você nunca mais trabalha de graça.
- **Kits prontos** → o cliente escolhe em 10 segundos e você vende o combo, não um prato.
- **Calendário e limite por dia** → o dia 24 chega com tudo pronto, não com 40 pedidos atrasados.
- **Sinal de 50%** → o cliente que desiste no dia 23 não leva o seu lucro junto.
- Botão → `#oferta`: **QUERO MEU NATAL NO LUCRO**

---

**BLOCO 10 · OS 6 BÔNUS** *[grade 2 × 3 no celular (2 colunas), cada bônus num cartão com a capa (`bonus-N.jpg`, pequena) em cima e o texto embaixo; selo "SÓ NO PREMIUM" no título]*
- Título: No Premium, você ainda leva **6 bônus**
- `bonus-1.jpg` · 🎁 **Como Precificar.** A conta do preço passo a passo, incluindo gás, embalagem e a sua hora de trabalho, e como cobrar mais sem perder cliente.
- `bonus-2.jpg` · 🎁 **Almoço do Dia 25.** Um cardápio próprio para vender de novo no dia 25, com produção e limite separados da ceia. É dinheiro extra no mesmo Natal.
- `bonus-3.jpg` · 🎁 **Calendário Anti-Sufoco.** O dia de abrir e de fechar as encomendas, comprar, produzir e entregar, com o limite de pedidos por dia.
- `bonus-4.jpg` · 🎁 **Kits Prontos de 4 a 20 Pessoas.** Combos de ceia montados, com preço fechado. É só mandar no WhatsApp.
- `bonus-5.jpg` · 🎁 **Planilha de Pedidos e Sinal.** Quem pediu, quanto pagou, quanto falta receber e a lista de compras do Natal.
- `bonus-6.jpg` · 🎁 **Checklist da Ceia Segura.** Como guardar, transportar e entregar sem risco: refrigerar em até 2 horas, reaquecer a 75 °C, etiqueta com a validade. Inclui o aviso do que consultar na prefeitura da sua cidade.

---

**BLOCO 11 · OFERTA** (`id="oferta"`) *[fundo verde-pinheiro. Título em creme. Os 2 cards LADO A LADO no computador, com o Premium MAIOR e destacado. No celular, o Premium vem em cima e o Básico embaixo. O card Premium, os 2 botões e os selos precisam ficar no mesmo campo visual, sem rolar para achar o botão do Premium.]*
- Título: Escolha como você quer vender este Natal

**Card PREMIUM** *[fundo creme, borda dourada de 3 px, sombra; selo "RECOMENDADO" em vermelho-vinho no topo do card; imagem `mockup-oferta.jpg` no topo do card]*
- Selo: **RECOMENDADO**
- Nome: **Ceia que Vende PREMIUM**
- ✔ 50 receitas de Natal para vender
- ✔ **Quantidade para 4, 6, 10 e 20 pessoas em cada receita**
- ✔ **Custo, preço de venda e lucro em cada receita**
- ✔ Bônus: Como Precificar
- ✔ Bônus: Almoço do Dia 25
- ✔ Bônus: Calendário Anti-Sufoco
- ✔ Bônus: Kits Prontos de 4 a 20 Pessoas
- ✔ Bônus: Planilha de Pedidos e Sinal
- ✔ Bônus: Checklist da Ceia Segura
- Preço *[grande, vermelho-vinho, Playfair 800]*: **R$ 29,90**
- *[logo abaixo do preço, letra média]*: à vista no Pix ou no cartão
- *[letra pequena, itálico]*: "Menos que 1 kg de salpicão de padaria."
- Botão *[class="checkout-premium"]*: **QUERO O PREMIUM: AS 3 CONTAS PRONTAS**

*[faixa de comparação entre os 2 cards, texto creme sobre verde, com a primeira frase em destaque dourado]*:
**No Básico você tem as receitas. No Premium você tem as contas.** Por R$ 12 a mais, você sabe quanto cobrar antes de aceitar o primeiro pedido.

**Card BÁSICO** *[menor, fundo branco-quente, sem imagem grande, borda fina cinza]*
- Nome: **Ceia que Vende BÁSICO**
- ✔ 50 receitas de Natal para vender
- ✖ Sem quantidade por nº de pessoas
- ✖ Sem custo, preço e lucro
- ✖ Sem os 6 bônus
- Preço: **R$ 17,90**
- Botão *[class="checkout-basico", estilo contorno]*: **QUERO SÓ AS RECEITAS**

*[linha de selos logo abaixo dos botões, ícones pequenos]*: 🔒 Compra segura · ⚡ Acesso imediato no e-mail · 💳 Pix ou cartão · ✅ Garantia de 7 dias

---

**BLOCO 12 · PROVA SOCIAL** · **NÃO CRIAR.** Não há depoimentos reais ainda. Não coloque nada no lugar.

---

**BLOCO 13 · GARANTIA** *[selo circular dourado "7 DIAS" à esquerda do texto]*
- Título: Garantia de 7 dias: o risco é todo meu
- Abra o material, escolha os pratos e veja se vale. Se achar que não vale, peça o reembolso em até 7 dias pelo e-mail de compra ou pela Cakto e receba **100% do seu dinheiro**. Sem pergunta e sem burocracia.

---

**BLOCO 14 · COMO VOCÊ RECEBE** *[3 passos numerados com ícones]*
- **1.** Você paga no Pix ou no cartão.
- **2.** O acesso chega no seu e-mail na hora.
- **3.** Você abre no celular, escolhe os pratos e já pode divulgar hoje.

---

**BLOCO 15 · PERGUNTAS FREQUENTES** *[acordeão: a pergunta em negrito abre a resposta]*
1. **Ainda dá tempo?** Dá. As encomendas costumam fechar por volta de 15/12, e quem divulga agora pega os clientes antes das outras. O calendário (Premium) diz o que fazer a cada dia.
2. **E se eu não der conta?** É para isso que serve a Conta do Limite: você decide quantos pedidos aceitar **antes** de abrir as encomendas, e fecha quando chegar lá.
3. **Receita tem de graça no YouTube. Por que pagar?** Receita tem. Custo, preço de venda, lucro e quantidade para 10 pessoas, não. É isso que faz você ganhar dinheiro em vez de trabalhar de graça.
4. **Na minha cidade ninguém paga isso.** No Premium, os preços das fichas são referência e você ajusta para a sua cidade. A conta do custo × margem funciona em qualquer lugar: você vê o lucro mínimo antes de dizer o preço.
5. **E se o cliente desistir em cima da hora?** Você cobra 50% de sinal no Pix no momento do pedido. O sinal paga as compras e o cliente que desiste não leva o seu lucro.
6. **Nunca vendi comida. Serve para mim?** Serve. Você começa com os kits prontos do Premium e um limite pequeno de pedidos.
7. **Qual a diferença entre o Básico e o Premium?** O Básico tem as 50 receitas. O Premium tem as 50 receitas com quantidade, custo, preço e lucro, e mais os 6 bônus. Se você quer saber quanto cobrar, é o Premium.
8. **Preciso de MEI ou licença?** Depende da sua cidade. O Checklist da Ceia Segura (Premium) traz os cuidados com o alimento e o que perguntar na prefeitura.
9. **Como recebo?** No seu e-mail, logo depois do pagamento. Abre no celular, no computador ou impresso.
10. **E se eu não gostar?** Você tem 7 dias de garantia e recebe 100% de volta.
- Botão → `#oferta`: **QUERO VENDER MINHA CEIA**

---

**BLOCO 16 · FECHO** *[a foto da mesa de ceia que você criou (seção 3), larga; texto por cima ou logo abaixo]*
- Imagine o dia 24: os pedidos entregues no horário, o sinal e o saldo no Pix, e você sentada à sua própria mesa de Natal.
- **Este ano, faça a ceia que paga o seu dezembro.** As contas já estão prontas no Premium.
- Botão → `#oferta`: **QUERO AS 3 CONTAS PRONTAS**

---

**BLOCO 17 · RODAPÉ** *[letra pequena, fundo verde-pinheiro, sem botão]*
- Ceia que Vende · Contato: [E-MAIL DE SUPORTE] · Termos de uso (link `termos.html`) · Política de privacidade (link `privacidade.html`)
- Resultados dependem do seu preço, custos e número de pedidos. Este produto não garante faturamento.
- Este site não faz parte do Facebook nem da Meta Platforms, Inc.

### 6. Campos que eu vou te passar (me peça antes de publicar, e troque só estes)
- `[CHECKOUT BÁSICO]` e `[CHECKOUT PREMIUM]`: links da Cakto, no `CONFIG` do script.
- `[PIXEL]`: ID do Pixel da Meta, no `CONFIG`.
- `[E-MAIL DE SUPORTE]`, `[RESPONSÁVEL]` (nome + CPF ou CNPJ) e `[DATA]`: no rodapé e nas páginas de termos e privacidade.
- Se eu ainda não tiver algum link ou o pixel, **deixe o campo como está**: o script já ignora campo entre colchetes.

### 7. Textos das páginas legais
**termos.html** (título: Termos de uso · Última atualização: [DATA])
1. **O produto.** Ceia que Vende é um material digital em PDF, vendido por [RESPONSÁVEL], contato [E-MAIL DE SUPORTE]. O plano Básico tem 50 receitas de Natal para vender. O plano Premium tem as 50 receitas com quantidade para 4, 6, 10 e 20 pessoas, custo, preço de venda e lucro de cada uma, e mais 6 bônus.
2. **Entrega.** Depois que o pagamento é aprovado pela Cakto, o acesso é enviado ao e-mail informado na compra. Se não chegar, confira a caixa de spam e escreva para [E-MAIL DE SUPORTE].
3. **Licença.** A compra dá uma licença pessoal. Você pode usar as receitas, os preços e as planilhas no seu próprio negócio. Não é permitido revender, compartilhar ou publicar os arquivos.
4. **Garantia e reembolso.** Você tem 7 dias, contados da compra, para pedir o reembolso por qualquer motivo, conforme o art. 49 do Código de Defesa do Consumidor. Peça em [E-MAIL DE SUPORTE] ou pela própria Cakto, no link do e-mail de compra. Devolvemos 100% do valor pago, pelo mesmo meio de pagamento, e o acesso é encerrado.
5. **Resultados.** Os preços, custos e lucros do material são referências de mercado. O resultado depende do seu preço, dos seus custos e do número de pedidos. Este produto não garante faturamento.
6. **Segurança alimentar e licenças.** A venda de alimentos segue as regras da vigilância sanitária do seu município. O material traz cuidados de segurança alimentar e o aviso do que consultar na prefeitura, mas não substitui essa consulta.
7. **Contato.** [RESPONSÁVEL] · [E-MAIL DE SUPORTE]

**privacidade.html** (título: Política de privacidade · Última atualização: [DATA])
1. Esta política explica como [RESPONSÁVEL] trata os seus dados nesta página e na compra do Ceia que Vende, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).
2. **Na compra:** nome, e-mail, CPF, telefone e dados de pagamento são informados no checkout da Cakto, que processa o pagamento. Não recebemos os dados do seu cartão.
3. **Na navegação:** esta página usa o Pixel da Meta (Facebook/Instagram), que registra visitas por cookies, e parâmetros de campanha na URL (UTMs) para sabermos qual anúncio trouxe a visita.
4. **Para que usamos:** para entregar o produto, dar suporte, processar reembolsos, cumprir obrigações legais e medir o resultado dos anúncios. Não vendemos os seus dados.
5. **Com quem compartilhamos:** com a Cakto (pagamento e entrega), com a Meta (medição de anúncios) e com prestadores de hospedagem e e-mail, só no necessário.
6. **Seus direitos:** você pode pedir acesso, correção ou exclusão dos seus dados escrevendo para [E-MAIL DE SUPORTE].
7. Este site não faz parte do Facebook nem da Meta Platforms, Inc.

### 8. Conferência antes de me devolver (me mostre cada item)
1. No celular (390 × 844), a primeira dobra mostra a faixa, a headline, a subheadline, o mockup, os 3 bullets e o botão **sem rolar**.
2. Todos os textos estão idênticos aos deste prompt (nenhuma frase mudou, nenhuma foi cortada).
3. O bloco 12 não existe e não há depoimento nem número inventado em lugar nenhum.
4. Só os 2 botões do bloco 11 levam ao checkout; os outros rolam até `#oferta`.
5. Abrindo `/?utm_source=teste&utm_campaign=x` (com os links já preenchidos), os 2 botões do bloco 11 levam ao checkout certo com `utm_source=teste&utm_campaign=x` no fim.
6. Os preços são R$ 29,90 (Premium) e R$ 17,90 (Básico).
7. As 14 imagens do .zip carregam, e a do bloco 16 não tem pessoas.
8. A página tem menos de 1,5 MB e abre rápido no celular.
9. `termos.html` e `privacidade.html` abrem pelo rodapé.

No fim, me passe a URL publicada.

## ===== FIM DO PROMPT =====

---

## Se o v0 fugir do combinado
- **Reescreveu algum texto:** peça "Volte ao texto exato do prompt, sem mudar nenhuma palavra, e ajuste só o layout."
- **Criou depoimento, cronômetro ou "de/por":** peça para remover. A regra 2 do prompt proíbe.
- **Converteu para React e quebrou o script:** peça "Mantenha o `<script>` da seção 4 exatamente como está, no fim do `index.html`."
