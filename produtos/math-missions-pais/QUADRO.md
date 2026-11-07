# Quadro da Oferta — Math Missions (versão para pais) — nome de trabalho

> Memória compartilhada entre os diretores. **Todo diretor lê este quadro antes de trabalhar e atualiza ao terminar** (e faz commit e push).
> O dossiê (`dossie.md`) diz O QUE é o produto. Este quadro diz EM QUE PÉ está e QUEM faz o quê agora.

## Em uma linha
Modelagem do Matemática em Missão (`produtos/matematica-investigativa/`) para **pais** de crianças de 8 a 11 anos, mercado internacional em inglês. Tudo é produzido em português e traduzido só na montagem final (`regras/geral.md`).

## Fase atual
Estrutura (amostras) + Copy (promessa e página, com pesquisa enxuta própria). **Sem dossiê da Mineração neste produto** (decisão do dono): a base é `produtos/matematica-investigativa/dossie.md` + este quadro.

## Decisões do dono (valem para todas as áreas)
- [2026-11-06] Criar a versão do Matemática em Missão para **pais** (1 criança ou irmãos, instruções para quem não é professor, gabarito explicado), mercado internacional em inglês.
- [2026-11-06] **Página única em inglês americano, preço em dólar, rodando para os países de língua inglesa** (EUA, Reino Unido, Austrália, Canadá…). Sem versões ou trocas de texto por país no lançamento. A página fala em **idade ("ages 8–11")**, não só em série. Só localizar a página se o custo por compra por país (quebra no Gerenciador) mostrar Reino Unido/Austrália muito atrás.
- [2026-11-06] **Entregável único para todos os países: sem valores em moeda real** (nada de $, £, A$). Os problemas de dinheiro usam uma moeda fictícia do jogo (ex.: moedas de ouro, pontos) para manter a habilidade sem amarrar a um país. Mesmo critério para medidas: preferir unidades que valem em todos (minutos, horas, contagem, métrico — que também está no currículo americano), evitando polegadas/libras-peso.
- [2026-11-06] **Pular a Mineração neste produto.** Base: dossiê do Matemática em Missão + decisões deste quadro. A Copy coleta, com os próprios alunos, falas reais de pais e 3–5 páginas de concorrentes, e registra em `copy/pesquisa/`.
- [2026-11-06] **Mecanismo central: o método de Singapura** (país nº 1 em matemática no TIMSS e no PISA — citar com fonte): Concreto → Desenho → Abstrato + **bar model** ("desenhe o problema antes de calcular") + domínio antes de avançar. Substitui o "Método da Pista Escondida"/"Problema com Enredo"; o enredo de mistério continua como a forma divertida de treinar o método. Copy agressiva (regra geral). **Não usar "Singapore Math" como nome do produto** (marca registrada nos EUA — a Copy confirma); usar "o método de Singapura".
- [2026-11-06] **O produto passa a conter o método de verdade:** (1) etapa "desenhe o problema" (bar model) em cada missão; (2) **Guia do Método de Singapura para Pais** como peça central (como aplicar os 3 passos em casa + o que dizer quando a criança travar); (3) cartões de bar model para imprimir. Pilha de valor da página: Guia + 30 missões + cartões + roteiros para pais + kit de missão.
- [2026-11-06] Tradução: só na montagem final, pelo `/diretor-traducao`, a partir da versão aprovada em PT.

## Status por área
| Área | Status | Entrega (arquivo) | Atualizado |
|---|---|---|---|
| Mineração / dossiê | ➖ dispensada pelo dono (base: dossiê do Matemática em Missão) | — | 2026-11-06 |
| Copy de Oferta | 🔵 v2 (método de Singapura) da PROMESSA e da página em PT, revisada pelo comitê; aguardando o dono (headline, preço, garantia, pilha) | `copy/PROMESSA.md`, `copy/pagina-vendas.md`, `copy/pesquisa/2026-11-06-fatos-singapura.md` | 2026-11-07 |
| Estrutura — amostras / entregável | 🔵 3 amostras com bar model + Guia do Método de Singapura (rascunho) + Cartão do Desenho, aguardando aprovação do dono | `estrutura/entregavel/amostras/` | 2026-11-07 |
| Estrutura — página | ⬜ | `estrutura/pagina/` | — |
| Estrutura — checkout (gateway USD) | ⬜ gateway: Kiwify recomendada, aguardando respostas do suporte | `produtos/_estrutura/2026-11-06-gateways-usd.md` | 2026-11-06 |
| Tradução | ⬜ só depois das peças aprovadas em PT | `traducao/en-US/` | — |
| Copy de Criativos | ⬜ | `criativos/` | — |
| Edição | ⬜ (áudios por sotaque: o dono gera) | — | — |
| Tráfego | ⬜ | `trafego/` | — |
| Análise | ⬜ | `analises/` | — |

Status: ⬜ não começou · 🟡 em andamento · 🔵 aguardando o dono · ✅ pronto · ⛔ travado

## Pedidos entre áreas (abertos)
- [ ] [2026-11-07] **De** Copy de Oferta **para** Estrutura: dizer se o Kit de Missão (crachá, ficha, certificado) será produzido. Se não for, ele sai da pilha da página. (Os papéis dos irmãos, os 15 min do Guia e o Cartão do Desenho já foram alinhados na copy.)
- [ ] [2026-11-07] **De** Copy de Oferta **para** dono/jurídico: antes de veicular em inglês, conferir no USPTO/TSDR o uso de "Singapore method" e do nome "Singapore Method Guide" (a marca "SINGAPORE MATH" é a reg. 4030323), e conferir os números do TIMSS/PISA em timss2023.org e oecd.org.
- [x] [2026-11-07] **De** Estrutura **para** Copy de Oferta: confirmar com link oficial Singapura 1º em matemática no TIMSS 2023 (4º e 8º ano) e no PISA 2022 — o Guia cita isso em rascunho (`estrutura/entregavel/fonte/gerar-guia.js`, seção 1). Usar no Guia os mesmos termos da página: "método de Singapura", "bar model", "Concreto → Desenho → Conta". → Respondido pela Copy: fontes em `copy/pesquisa/2026-11-06-fatos-singapura.md` (MOE e timss2023.org; OCDE). Usar "1º lugar no TIMSS 2023 e no PISA 2022", nunca "desde 1995".
- [x] [2026-11-06] **De** Central **para** Estrutura: refazer as 3 amostras com a etapa de bar model e produzir o Guia do Método de Singapura para Pais (rascunho) + 1 cartão de bar model, em PT, para o dono aprovar.
- [x] [2026-11-06] **De** Central **para** Copy de Oferta: reescrever PROMESSA e página com o método de Singapura como mecanismo central (estrutura sugerida pela Central: gancho do ranking → dor do problema escrito → inimigo "decorar e repetir" → revelação do bar model → "você não precisa saber matemática" → missões como treino → demonstração → pilha de valor → preço/garantia/FAQ). Confirmar a marca "Singapore Math" e os dados do TIMSS/PISA com fonte.
- [ ] [2026-11-06] **De** Copy de Oferta **para** Estrutura: depois que o dono aprovar, montar a página com `copy/pagina-vendas.md` **a partir da versão traduzida** (Tradução). Imagens: as páginas reais das 3 amostras. No gateway em dólar, confirmar o preço final com impostos (IVA no Reino Unido, GST na Austrália), PayPal e o consentimento do direito de 14 dias (Reino Unido).
- [ ] [2026-11-06] **De** Copy de Oferta **para** Tradução: traduzir a PROMESSA e a página para en-US só depois da aprovação do dono. Notas: preço como "US$12"/"USD 12"; criança em linguagem neutra ("your child"); nunca "summer"; o aviso da Meta no rodapé é texto fixo; "the Singapore method", nunca "Singapore Math" (marca registrada nos EUA).
- [x] [2026-11-06] **De** Central **para** Estrutura: 3 missões-amostra para pais (8–9, 9–10 e 10–11 anos), em PT, sem moeda real, para o dono aprovar o formato.
- [x] [2026-11-06] **De** Central **para** Copy de Oferta: pesquisa enxuta (falas de pais + 3–5 concorrentes) e promessa + página de vendas em PT.

## Próximo passo
Estrutura (amostras) e Copy (pesquisa + promessa + página, em PT) em paralelo → dono aprova → Tradução (en-US).

## Histórico (mais recente em cima)
- [2026-11-07] Copy de Oferta: PROMESSA e página v2 com o método de Singapura (CPA + bar model; Guia como peça central da pilha), fatos do TIMSS/PISA e da marca levantados (`copy/pesquisa/2026-11-06-fatos-singapura.md`), revisadas pelo comitê.
- [2026-11-07] Estrutura: amostras refeitas com a etapa "desenhe o problema" (bar model guiado 8–9, meio 9–10, livre 10–11; passo Concreto e critério de domínio na página do adulto; desenho esperado no gabarito) + rascunho do Guia do Método de Singapura para Pais (6 págs) + Cartão do Desenho (2 por folha A4), revisados pelo comitê. Em `estrutura/entregavel/amostras/`.
- [2026-11-06] Dono: aprovou o método de Singapura como mecanismo central e o Guia + bar model dentro do produto; Copy e Estrutura refazem.
- [2026-11-06] Copy de Oferta: pesquisa enxuta (falas de pais + 10 concorrentes), PROMESSA (big idea "Seu filho não é ruim em matemática. Ninguém nunca o deixou escolher a conta."; mecanismo "Método da Pista Escondida") e página de 17 blocos em PT, revisadas pelo comitê e alinhadas às amostras da Estrutura.
- [2026-11-06] Estrutura: 3 missões-amostra para pais (biscoitos 8–9, tesouro 9–10, robô 10–11) em `estrutura/entregavel/amostras/`, 4 págs cada (adulto, missão ×2, gabarito), contas verificadas pelo gerador. Nota para a Tradução: palavras-código mudam em inglês (VOVO→NANA, LAGO→LAKE, CABO→CORD), decimais com ponto.
- [2026-11-06] Central: quadro criado com as decisões do dono (página única em USD para o mundo de língua inglesa; entregável sem moeda real).
