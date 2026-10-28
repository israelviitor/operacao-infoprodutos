# Prompt de redesign da página — para colar no ChatGPT

> Base: análise de 2026-10-28 (`analises/2026-10-28-analise.md`) + ajustes da Estrutura. Só layout: botões, checkout e dados pessoais ficam para outra etapa.
> Anexar junto o `imagens-redesign.zip` (imagens novas já prontas, em WebP).

---

Quero um **redesign só de layout** da landing page "Matemática em Missão", que está publicada no v0 (projeto `matematica-em-missao`). **Não mexa agora** no link dos botões, no checkout, no pixel, nos dados do responsável nem no e-mail: isso fica para outra etapa. Mantenha o `<script>` do fim da página (UTMs e pixel) exatamente como está.

## Regras que não podem ser quebradas
1. **O texto aprovado não muda.** Headline, subheadline, textos das seções, FAQ e garantia ficam palavra por palavra. Só entram os textos novos marcados como **[NOVO]** abaixo, e só sai o que está marcado como **[TIRAR]**.
2. **Palavras proibidas** (pertencem aos concorrentes): "detetive", "Arquivo Secreto", "Caso Aberto"/"Caso em aberto", "Mistério do…" em título. **Tire o rótulo "✦ CASO EM ABERTO / MISSÃO MATEMÁTICA"** e qualquer "✦ MISSÃO EM ANDAMENTO" repetido. Nosso vocabulário: missão, agente, cadeado, código, pasta da missão.
3. **Sem gatilho falso:** nada de "oferta por tempo limitado", cronômetro, "De R$ X por R$ 17,90", "mais vendido", número de compradores, estrelas ou depoimentos. Não temos nada disso de verdade.
4. **O material é em preto e branco.** A cor vai na moldura, no fundo e nos elementos da página, nunca nas folhas. Nenhuma imagem pode fazer parecer que as folhas são coloridas.
5. **Leve e rápida:** a página hoje pesa 0,28 MB e abre em 0,9 s. Depois do redesign ela tem que ficar **abaixo de 1,5 MB**. Toda imagem em WebP (máx. ~150 KB cada), com `loading="lazy"` em todas, menos a primeira. No máximo 1 fonte do Google (ex.: Nunito 700/800 para títulos); o resto em fonte do sistema.
6. **Celular primeiro** (390 px): texto com 16 px ou mais, botões com altura de 52 px ou mais e largura total, nada cortado nem com rolagem lateral.
7. Termos, privacidade e o rodapé ("Material independente, sem vínculo com o MEC ou o Inep." + "Este site não faz parte do Facebook nem da Meta Platforms, Inc.") continuam.

## Identidade visual "missão"
- **Fundo creme de papel** `#FBF6EA` como base (no lugar do azul-escuro/cinza-azulado). Cores de destaque: azul-marinho `#1F2A5A` (títulos, faixas) e amarelo `#F5C431` (marca-texto, etiquetas, números). Botão em verde `#12873F` com texto branco, que é a única coisa verde da página.
- **Alterne o fundo das seções** (creme → branco → azul-marinho → creme…) para separar os blocos. Use azul-marinho em 2 seções no máximo: "O que a turma pratica" e a oferta ou o fechamento.
- **Elementos de missão desenhados em CSS/SVG** (leves, sem imagem pesada): um carimbo inclinado "MISSÃO Nº 01" perto da headline, fita amarela de "etiqueta" no topo dos cards, um ícone de cadeado nos 4 passos e clipes nos cards de missão. Com moderação: 1 elemento por seção.
- **Um rótulo pequeno diferente por seção** (em caixa alta, amarelo sobre azul ou azul sobre amarelo), nunca repetido: O PROBLEMA · A VIRADA · POR DENTRO · AS MISSÕES · O QUE A TURMA PRATICA · O QUE VEM NO KIT · PARA QUEM É · OFERTA · DÚVIDAS.
- Ícones: um por item de lista, todos do mesmo estilo (emoji consistente ou SVG de traço).

## Seção por seção (nesta ordem)

### 1. Faixa do topo
"Para professoras do 3º, 4º e 5º ano" — fina, amarela com texto azul (como está).

### 2. Primeira dobra
- Headline e subheadline como estão. Headline em azul-marinho sobre o creme, com o carimbo "MISSÃO Nº 01" ao lado.
- **Imagem principal nova:** gere com o seu gerador de imagem, com este prompt:
  > "Ilustração editorial em estilo flat/vetorial, cores quentes (creme, azul-marinho, amarelo-mostarda), vista de cima em leve ângulo: 3 ou 4 crianças de 8 a 10 anos, de etnias variadas, em volta de uma mesa escolar, concentradas, uma apontando para uma folha. Sobre a mesa: folhas de atividade impressas em PRETO E BRANCO (texto e tabelas em preto), uma pasta de papel pardo com a etiqueta 'MISSÃO', um cadeado de código de 3 dígitos, lápis e uma lupa. Clima de investigação divertida. Sem texto legível, sem logos, sem personagens conhecidos, sem estilo fotográfico."
  - Estilo ilustração, nunca foto: não pode parecer uma turma real.
  - Exporte em **WebP de ~1000 px de largura, até ~150 KB**.
  - É a única imagem sem lazy-load.
- **[TIRAR]** a linha "30 missões · 3º, 4º e 5º ano · 3 níveis · P&B · R$ 17,90" da dobra. O preço fica só na oferta.
- **[NOVO]** 4 chips com ícone, em grade 2×2, logo abaixo da imagem:
  - 📚 30 missões prontas
  - 🎒 3º, 4º e 5º ano
  - 🔐 3 níveis na mesma missão
  - 🖨️ P&B, pouca tinta
- Botão "Quero as missões da minha turma".

### 3. "Você já ouviu isso hoje?" (rótulo O PROBLEMA)
- O balão "Professora, é de mais ou de vezes?" grande, com cara de balão de fala, levemente inclinado.
- Os 3 parágrafos como estão, em largura confortável. Use marca-texto amarelo em "o problema vir em texto" e em "travam do mesmo jeito".

### 4. "Não é você. É a lista de continhas." (rótulo A VIRADA)
- Texto como está. A fonte (UFPA/UFRGS) em letra pequena.
- "Por isso criamos o **Problema com Enredo**" em destaque.
- Os 4 passos (Ler, Decidir, Resolver, Conferir) como uma **trilha vertical**: um ícone de cadeado com o número em cada passo, ligados por uma linha pontilhada. O último ("Conferir") termina num cadeado aberto.
- "Só a resposta certa abre a próxima etapa." + botão.

### 5. "Veja uma missão por dentro" (rótulo POR DENTRO)
- **Troque a folha inteira (ilegível) por `etapa-zoom.webp`** (anexo). É a etapa ampliada com 3 anotações numeradas. Legenda: "Repare: a folha não diz se é de mais ou de menos. Quem decide é a turma."
- Em seguida, `niveis.webp` (a mesma etapa nos 3 níveis, legível). Legenda: "O mesmo mistério em 3 níveis. A turma toda resolve o mesmo caso, cada um no seu ritmo."
- Por último, `professora.webp`. Legenda: "Gabarito comentado e roteiro de 2 minutos: você lê antes de entrar na sala e aplica."
- As imagens ocupam a largura toda no celular, com borda arredondada e sombra suave.

### 6. [NOVO] "Missões que sua turma vai resolver" (rótulo AS MISSÕES)
3 cards com clipe ou fita, um por série. Em cada card: uma etiqueta com a série, o nome, uma linha de enredo e "Pratica:".
- **3º ano · Missão da Horta:** "As cenouras da horta amanheceram mordidas. Quem foi, e como entrou com o portão fechado?" — Pratica: subtração, multiplicação, dinheiro e troco, divisão.
- **4º ano · Missão dos R$ 50:** "No fim da Feira do Livro, o caixa tem R$ 50 a menos. A turma testa 4 explicações sem acusar ninguém." — Pratica: subtração, troco e desconto, horas e minutos, divisão.
- **5º ano · Missão da Cápsula do Tempo:** "Há 25 anos, uma turma enterrou uma cápsula na escola. Com um gráfico, frações e um recibo antigo, vocês descobrem onde." — Pratica: gráfico de colunas, frações, números decimais, multiplicação e divisão.

Embaixo dos cards, uma faixa: "+ 27 missões no kit, 10 para cada série."

### 7. [NOVO] "O que a turma pratica" (rótulo O QUE A TURMA PRATICA; fundo azul-marinho, texto branco)
Grade 2×3 com ícone grande e rótulo curto:
- 🔍 Interpretar o problema
- 🤔 Escolher a operação
- 🍕 Frações
- 💰 Dinheiro e troco
- ⏰ Medidas e tempo
- 📊 Tabelas e gráficos

Faixa amarela embaixo: **"Não é só continha: é problema em texto, como nas avaliações."**

### 8. "O que você recebe" (rótulo O QUE VEM NO KIT)
- **Compacte.** Os 7 itens da lista (texto igual ao atual) ficam **num card só**, com um ícone por linha em vez do ✔ repetido e uma linha fina entre os itens. Nada de 7 cards grandes.
- O parágrafo "Tudo em PDF…" vira uma nota pequena com ícone de e-mail.
- **Bônus em destaque:** card com fita amarela "BÔNUS" e a imagem `bonus-destaque.webp` (anexo) grande, com o texto atual do bônus. Ela substitui a imagem pequena e cinza.
- Botão "Quero as 30 missões por R$ 17,90".

### 9. "É para você se / Não é para você se" (rótulo PARA QUEM É)
2 colunas lado a lado no celular (ou 1 card com ✔ verdes e ✖ cinzas). Textos curtos como estão, sem caixas grandes.

### 10. "Por que ensinar com problema e história"
Junte as 2 provas numa **faixa única** e curta, com as fontes em letra pequena (BNCC, p. 266 · tese USP, 2023). Sem 2 cards grandes.

### 11. Oferta (rótulo OFERTA)
- Card grande, com borda azul-marinho grossa e o carimbo "MISSÃO Nº 01" no canto.
- Em cima, `kit.webp` grande, como uma "pasta da missão".
- "Tudo isso por" + os itens **um por linha** com ✔: 30 missões · 3 séries · 3 níveis · gabarito comentado · roteiro de 2 min · Kit de Ambientação.
- Preço **R$ 17,90** bem grande + "pagamento único" + "Menos de R$ 0,60 por missão pronta." com marca-texto amarelo.
- Botão.
- Logo abaixo do botão, 3 selos pequenos lado a lado: 🔒 Pagamento seguro · 🛡️ Garantia de 7 dias · ✉️ Acesso imediato no e-mail.
- O bloco da garantia (texto atual) embaixo, com um selo "7 DIAS" redondo.

### 12. FAQ (rótulo DÚVIDAS)
Acordeão (fechado por padrão), com as 6 perguntas atuais e **[NOVO]** mais 2:
- **"Posso imprimir mais de uma vez?"** — "Sim. Você pode imprimir quantas vezes quiser para as suas turmas."
- **"Quais as formas de pagamento?"** — "Pix ou cartão de crédito."

### 13. Fechamento e rodapé
- Fundo azul-marinho. A frase "Na próxima aula de problemas, deixe a turma descobrir qual é a conta." grande em branco, `kit.webp` menor e o botão.
- Rodapé como está.

## Antes de publicar, confira e me mostre
1. Print da página no celular (390 px): primeira dobra e página inteira.
2. Peso total abaixo de 1,5 MB e imagens em WebP.
3. Nenhuma das palavras proibidas da regra 2 em lugar nenhum, inclusive rótulos e `alt` das imagens.
4. Nenhuma frase do texto aprovado mudou (fora os [NOVO] e [TIRAR]).
5. O `<script>` do fim continua lá.
