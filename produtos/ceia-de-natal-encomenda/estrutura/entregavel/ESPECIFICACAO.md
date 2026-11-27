# Especificação do entregável · Ceia que Vende

> Estrutura, 2026-11-26. Fecha os itens "Confirmar antes de montar" de `copy/pagina-vendas.md`: **tudo o que a página e o checkout prometem está aqui**, e o produto tem de ser produzido exatamente assim.
> **Produzido em 2026-11-27** (`entregavel/final/`). As contas saem de `fonte/contas.js` e são conferidas por `fonte/conferir.js` (memória de cálculo em `contas-conferidas.md`). As imagens da LP (ficha 07, Kits, Calendário, Planilha) foram **recortadas do produto real** (`pagina/fonte/imagens-do-produto.js`), então mostram os mesmos números.
> Restrições do dossiê: sem "chef", sem depoimento inventado, sem "MEI não precisa de licença", sem citar o nome da cozinheira de 2020, **sem bacalhau**.

## 1. Básico (R$ 17,90)
- PDF único `ceia-que-vende-basico.pdf`, A4 retrato, legível no celular.
- **50 receitas** (lista da seção 3): ingredientes e modo de preparo **para 1 rendimento-padrão** (o da receita), tempo e rendimento.
- **Não tem:** tabela 4/6/10/20, custo, preço, lucro, kits, calendário, planilha ou bônus (os ✖ do card Básico têm de ser verdade).

## 2. Premium (R$ 29,90)
PDF principal `ceia-que-vende-premium.pdf` + os 6 bônus. Cada uma das **50 receitas** é uma ficha de 2 páginas no padrão da ficha-modelo 07:
1. **A Conta da Quantidade:** tabela para 4, 6, 10 e 20 pessoas (quantidade do item principal e dos ingredientes que mudam).
2. **A Conta do Preço:** custo de mercado, preço de venda e lucro para 4, 6, 10 e 20 pessoas, mais a linha **"preço mínimo (custo × 2,5)"** e o campo **"Seu custo na sua cidade: R$ ___ × 2,5 = preço mínimo R$ ___"** (a FAQ promete "você vê o lucro mínimo antes de dizer o preço"). Regra: **preço = custo × 2,5 a 3**, arredondado para final 0, 5 ou 9; nota com a data e a base do custo ("preços de referência de novembro/2026; ajuste para a sua cidade").
3. Ingredientes e preparo da receita-base (o rendimento de cada receita; a Conta da Quantidade diz quantas receitas fazer para 4, 6, 10 e 20).
4. **A Conta do Limite:** caixa com o limite de forno/fogão daquele prato (ex.: "1 forno doméstico assa até 2 pernis de 4 kg por fornada").

Abertura do PDF: "Comece aqui: as 3 contas em 5 minutos" (1 página) e índice por categoria.

**Ficha 07 · Pernil assado de Natal (final):** 4 → 1,6 kg · 6 → 2,4 kg · 10 → 4 kg · 20 → 8 kg (2 peças). Custo/preço/lucro: 50/135/85 · 70/190/120 · 120/325/205 · 239/650/411. Pernil R$ 25/kg, preço = custo × 2,7 arredondado (até R$ 500 múltiplo de 5; acima, de 10), sempre entre 2,5 e 3.

## 3. As 50 receitas (proposta da Estrutura; trocar à vontade, mantendo as categorias do bloco 6 e o pernil como nº 07)
**Assados (1–14):** 01 Peru assado · 02 Chester assado · 03 Tender glaceado com abacaxi · 04 Lombo suíno recheado · 05 Frango assado inteiro com farofa · 06 Costela suína ao barbecue · 07 Pernil assado de Natal · 08 Peito de peru com laranja · 09 Lombo com ameixa · 10 Coxa e sobrecoxa assadas com ervas · 11 Lagarto recheado · 12 Cupim assado · 13 Pernil desfiado para sanduíche · 14 Frango recheado desossado (rocambole).
**Acompanhamentos (15–36):** 15 Arroz à grega · 16 Farofa de Natal (bacon e frutas) · 17 Salpicão de frango · 18 Maionese de batata · 19 Arroz com passas e castanha · 20 Arroz de forno · 21 Farofa de banana · 22 Purê de batata · 23 Batata gratinada · 24 Batata sauté com alecrim · 25 Salada de maionese com maçã · 26 Salada verde com manga · 27 Legumes assados · 28 Rocambole de batata · 29 Lasanha de Natal · 30 Molho de ameixa · 31 Molho de laranja para aves · 32 Torta salgada de frango · 33 Cuscuz paulista · 34 Pão de alho caseiro · 35 Salada de grão-de-bico · 36 Arroz de brócolis.
**Sobremesas (37–50):** 37 Rabanada · 38 Pavê de chocolate · 39 Pudim de leite · 40 Torta de nozes · 41 Mousse de maracujá · 42 Pavê de pêssego · 43 Bolo de Natal (panetone caseiro) · 44 Torta holandesa · 45 Manjar de coco com ameixa · 46 Pudim de pão · 47 Salada de frutas · 48 Trufas de Natal · 49 Bombom de travessa · 50 Brownie de Natal.

## 4. Os 6 bônus do Premium
| # | Bônus | Conteúdo mínimo (o que a página promete) | Formato |
|---|---|---|---|
| 1 | Como Precificar | A conta do preço passo a passo incluindo **gás, embalagem e a hora de trabalho**; como cobrar mais sem perder cliente | PDF 8–12 p. |
| 2 | Almoço do Dia 25 | Cardápio próprio do dia 25 (6–8 pratos, reaproveitando compras), **produção e limite separados** da ceia, com as 3 contas | PDF 10–14 p. |
| 3 | Calendário Anti-Sufoco | **Uma ação para cada dia de 26/11 a 25/12** (a FAQ diz "diz o que fazer a cada dia"), agrupada nas fases: abrir as encomendas no dia da compra (até 1º/12) · sinal de 50% em cada pedido · 15/12 fechar · 21/12 compras · 22–23 pré-preparo · 24 produção e entregas · 25 almoço; caixa "Meu limite de pedidos por dia de entrega" | PDF 3–4 p. (fases como na imagem + lista dia a dia) |
| 4 | Kits Prontos de 4 a 20 Pessoas | Kit 4 (86/230/144) · Kit 6 a 8 (117/299/182, destaque) · Kit 10 (220/590/370) · Kit 20 (581/1.570/989), custo = soma das fichas, com os pratos de cada kit e a mensagem de WhatsApp de cada um | PDF 4–6 p. |
| 5 | Planilha de Pedidos e Sinal | Google Sheets com "Fazer uma cópia": abas **Pedidos** (cliente, kit, valor, sinal 50%, saldo, data/hora de entrega, status), **Lista de compras** (soma automática por ingrediente a partir dos pedidos) e **Resumo** (total vendido, sinal recebido, a receber) | Sheets + PDF de 1 p. "como usar" |
| 6 | Checklist da Ceia Segura | Refrigerar em até 2 h · reaquecer a 75 °C · etiqueta com validade · transporte · e **o que perguntar na prefeitura/vigilância sanitária** (sem dizer que MEI dispensa licença) | PDF 3–4 p. |

## 5. Order bumps (só ativar na Cakto quando prontos)
| Bump | Conteúdo mínimo |
|---|---|
| Como Conseguir Seus 10 Primeiros Clientes (R$ 12,90) | Quem avisar primeiro (lista de 30 contatos quentes), onde divulgar (status, grupos do bairro, condomínio, igreja, Marketplace), 7 posts/stories prontos, plano de 7 dias. "10 primeiros" é meta, não garantia. PDF 10–12 p. |
| Mensagens que Fecham Pedido (R$ 7,90) | Mensagens de copiar e colar: abrir encomendas, cardápio com preço, cobrar sinal, responder "tá caro?", confirmar pedido, lembrete de retirada/entrega, pós-venda e pedido de indicação. Mínimo 25 mensagens. PDF ou Docs. |
| Ceias de R$ 400+ (R$ 14,90) | 10 pratos premium (sem bacalhau) com as 3 contas, kit premium para 8 a 10 pessoas na faixa de R$ 450 a R$ 580, como apresentar (embalagem, cartão) e para quem oferecer. Referência citada: R$ 579,90 para 8–10 pessoas (Campo Grande, `pesquisa/2026-11-26-mecanismo-numeros.md`). PDF 12–16 p. |

## 6. Upsell · Ceia de Ano Novo (R$ 19,90)
Os 4 itens do "O que vem", todos obrigatórios: cardápio de Ano Novo para vender (pratos e kits do dia 31) · as 3 contas em cada prato · calendário de 26 a 31/12 com abrir/fechar pedidos · mensagem para oferecer a ceia de Ano Novo a quem comprou a de Natal. PDF 15–20 p. no padrão das fichas.

## 7. Entrega e suporte
- **Cakto Members**, acesso no e-mail "Pagamento Confirmado". Módulos em `estrutura/cakto-roteiro.md`, passo 1.
- **À vista** (sem parcelamento). Upsell 1 clique no cartão; Pix novo no Pix.
- `[E-MAIL DE SUPORTE]`: o dono informa (página, termos e Cakto).

## 8. Ordem de produção (prazo: pronto antes do primeiro anúncio)
1. Premium: 50 fichas + Comece aqui (é o que 60% compram e o que a página mostra).
2. Bônus 3, 4 e 5 (já desenhados nas imagens da LP) → bônus 1, 6 e 2.
3. Básico (sai das mesmas receitas, sem as contas).
4. Bump 2 → bump 1 → bump 3 → upsell (cada um liga na Cakto quando ficar pronto).
