# Diário de testes de tráfego — Decodifica Matemática

## Teste 1 — 16/10 a ~20/10/2026 (corrigido com print do Gerenciador em 2026-10-21)
- **Pergunta:** validar se a oferta vende.
- **Estrutura:** 23 campanhas. 21 "Triplo 1" (CBO 1-1-1: 1 campanha / 1 conjunto / 1 criativo, R$ 25/dia cada) + 2 campanhas CBO 1-1-10 (Enem 12 e Enem 13, R$ 100/dia). Objetivo/evento e posicionamentos a confirmar.
- **Total:** gasto R$ 415,30 · 870 cliques no link · 23 IC · 6 compras (Gerenciador) · CPA R$ 69,22 · CPM R$ 53,49. Receita ~R$ 100. Ticket médio ~R$ 16. CPA alvo ~R$ 15.
- **Por campanha (visíveis no print: 12 de 23):**

| Campanha | Gasto | CPM | Impressões (calc.) | Cliques link | CTR link (calc.) | IC | Compras |
|---|---|---|---|---|---|---|---|
| Enem 12 (1-1-10) | 157,58 | 94,36 | ~1.670 | 102 | ~6,1% | 15 | 3 |
| Enem 13 (1-1-10) | 53,28 | 82,99 | ~642 | 24 | ~3,7% | 3 | 1 |
| Enem 08 | 35,53 | 175,02 | ~203 | 9 | ~4,4% | 3 | 2 |
| Enem 06 | 15,19 | 25,44 | ~597 | 165 | **~27,6%** | 0 | 0 |
| Enem 07 | 16,78 | 28,73 | ~584 | 146 | **~25,0%** | 0 | 0 |
| Enem 04 | 15,45 | 25,41 | ~608 | 139 | **~22,9%** | 2 | 0 |
| Enem 03 | 15,63 | 34,89 | ~448 | 112 | **~25,0%** | 0 | 0 |
| Enem 11 | 16,70 | 11,44 | ~1.460 | 81 | ~5,5% | 0 | 0 |
| Enem 10 | 18,96 | 21,35 | ~888 | 55 | ~6,2% | 0 | 0 |
| Enem 09 | 17,62 | 114,42 | ~154 | 3 | ~1,9% | 0 | 0 |
| Enem 05 | 19,51 | 148,93 | ~131 | 7 | ~5,3% | 0 | 0 |
| Enem 02 | 17,04 | 128,12 | ~133 | 4 | ~3,0% | 0 | 0 |

- **Leitura:** Enem 03, 04, 06, 07, 10 e 11 gastaram ~R$ 99 (24% da verba) e trouxeram 698 dos 870 cliques (80%), com só 2 IC. CTR de link de 23–28% e CPC de ~R$ 0,10 não é padrão de clique com intenção de compra: hipótese principal de **tráfego de baixa qualidade** (posicionamento como Audience Network, clique acidental ou criativo que gera clique curioso). A confirmar com o detalhamento por posicionamento e com as LPV. Onde o clique custou R$ 1,50–3,50 (Enem 12, 13, 08), de 12,5% a 33% dos cliques viraram IC.
- **Conclusão (confiança média):** o "muito clique e pouca finalização" está concentrado nas campanhas de clique barato. Não é evidência forte de que a LP seja o principal problema.
- **Vira regra?** Ainda não. Hipótese para testar: "campanhas com CTR de link acima de ~15% e CPC abaixo de R$ 0,20 não geram IC nesta oferta".
- **Configuração confirmada (export de edição, 2026-10-21):**
  - Objetivo Vendas, otimização para PURCHASE e lance de maior volume.
  - Público aberto Brasil 18–65 com Advantage+ Audience.
  - **Posicionamentos automáticos** (todos, incluindo Audience Network).
  - Atribuição 7d clique + 1d visualização + 1d engaged-view.
  - UTMs completas, com utm_term={{placement}}.
  - 13 anúncios com título "Últimas unidades!" (escassez falsa para produto digital = risco de compliance).
- **Pendências:** export de desempenho por anúncio e por posicionamento; utm_term das 6 vendas na Cakto.

### Leitura completa do Teste 1 (exports por anúncio e por posicionamento, 2026-10-21)
Dados em `dados/teste1-por-anuncio.csv` e `dados/teste1-por-posicionamento.csv`.

| Recorte | Gasto | Impressões | Cliques link | LPV | Compras |
|---|---|---|---|---|---|
| Audience Network | R$ 23,95 (6%) | 4.298 | **785 (90%)** | 390 | **0** |
| Facebook + Instagram | R$ 391,35 | 3.466 | 85 | 80 | **6** |

- **FB+IG:** CPM **R$ 113** · CTR link 2,45% · CPC link R$ 4,60 · connect rate **94%** · LPV→compra **7,5%** · LPV→IC ~29% · IC→compra 26%.
- Compras: Instagram Feed 3, Instagram Reels 1, Instagram Stories 1, Facebook Feed 1.
- **Elo quebrado: CPM** (R$ 113 contra a referência de mercado BR de ~R$ 18–32 [PRATICANTE: Trafius]). Página e checkout converteram bem com o tráfego de FB/IG.
- Simulação: mesmo CTR e conversão com CPM de R$ 30 → CPC ≈ R$ 1,22 → CPA ≈ R$ 17.
- Audience Network: 390 LPV sem venda; com a taxa de 7,5% de FB/IG, o esperado seriam ~29 vendas. Tráfego sem intenção de compra. Custou pouco (R$ 24), mas distorceu a leitura ("muito clique, pouca finalização").
- Amostra pequena (3,5 mil impressões em FB/IG): confiança baixa no CPM exato.

**Por criativo (só FB+IG):**

| Criativo | Gasto | CPM | CTR | Vendas |
|---|---|---|---|---|
| vídeo 02 | 67 | 163 | 2,2% | 2 |
| vídeo 08 | 35 | 182 | 3,1% | 2 |
| imagem 02 | 42 | 63 | 1,8% | 1 |
| imagem 06 | 6,50 | 64 | 5,9% | 1 |
| imagem 04 | 33 | 71 | 3,5% | 0 |
| vídeo 04 | 17 | 60 | 3,1% | 0 |
| imagem 03 | 42 | 152 | 2,9% | 0 |
| vídeo 07 | 33 | 146 | 1,3% | 0 |

Os demais criativos gastaram menos de 1x o CPA alvo.

**Proposta de regra (aguardando ok do dono):** excluir a Audience Network nas campanhas de vendas do Decodifica.

## Mudanças antes do Teste 2 (informadas pelo dono em 2026-10-21)
- Nova LP, modelada numa estrutura validada.
- Order bumps: 1 de R$ 19,90 e 3 de R$ 12,90.

## Teste 2 — planejado em 2026-10-21
- **Pergunta:** consolidando em 1 campanha, só FB/IG, o CPM cai e o CPA (Cakto) fica ≤ R$ 15?
- **Estrutura:** 1 campanha Vendas CBO, otimização Purchase, 1 conjunto aberto BR 18+, posicionamentos só FB+IG. Criativos: vídeo 02, vídeo 08, imagem 02, imagem 06, imagem 04, vídeo 04. Nova LP + bumps (1×R$ 19,90 e 3×R$ 12,90).
- **CPA alvo para decisões:** R$ 15 (conservador, sem contar bumps até ter a taxa real da Cakto).
- **Fase 1:** R$ 100/dia até R$ 150 gastos (~2 dias).
  - 6 vendas ou mais → Fase 2.
  - 4–5 vendas → mais R$ 100 e reavalia.
  - 3 ou menos → para e revisa. Com CPA real de R$ 15, a chance de sair 3 ou menos é ~1%.
- **Trava por criativo:** 0 vendas aos R$ 35 → pausar; 1 venda aos R$ 58 → pausar. [ESTATÍSTICA/PRATICANTE: AdManage]
- **Fase 2:** CPA ≤ R$ 15 → subir 20–30% a cada 48–72h até ~R$ 140/dia, a verba para ~50 compras/semana. [OFICIAL: aprendizado / PRATICANTE: fórmula CPA×50÷7 e % de aumento]
- **Controles de página:** comparar LPV→compra com a base de 7,5% do teste 1; abaixo de ~5% após R$ 150 → voltar para a LP antiga.

## Teste 3 — teste de criativos (planejado em 2026-10-21, roda em paralelo ao Teste 2)
- **Pergunta:** algum dos 9 criativos que não receberam verba no Teste 1 vende a CPA ≤ R$ 15?
- **Por quê:** o Meta prioriza diversidade de criativos [OFICIAL: Andromeda]; no Teste 1 o CBO concentrou a verba e 9 criativos ficaram sem teste [DIÁRIO].
- **Estrutura:** campanha separada `Enem T3 - Teste criativos - ABO`, Vendas/Compra, FB+IG só (sem Audience Network), público aberto BR 18+. **ABO: 3 conjuntos × 3 criativos, R$ 35/dia cada** (isolamento proposital para medir criativos).
  - Lote A: vídeo 05, vídeo 09, vídeo 10
  - Lote B: vídeo 11, vídeo 12, vídeo 13
  - Lote C: vídeo 14, vídeo 15, imagem 01
- **Travas (perda máxima = R$ 315):**
  - Corte precoce: criativo com R$ 15 gastos e CTR de link < 1% → pausar. [OPINIÃO baseada no DIÁRIO: média FB/IG do teste 1 = 2,45%]
  - Criativo com 0 venda aos R$ 35 → pausar. [ESTATÍSTICA]
  - Conjunto sem venda aos R$ 70 → pausar.
- **Vencedor:** criativo que vender com CPA ≤ R$ 15 vai para a campanha principal (Teste 2), pelo mesmo post.
- **Sub-testados para uma próxima rodada:** vídeo 01, vídeo 03, vídeo 06, imagem 05.
- **Pausados por regra:** imagem 03, vídeo 07 (gastaram mais de 2,3x o CPA alvo sem venda).
- **Confirmado pelo dono (2026-10-21):** os 9 criativos são conceitos completamente diferentes entre si. Testes 2 e 3 começam juntos às 00h00 de 2026-10-22.

### Teste 3 — acompanhamento 22/10 (manhã, print do dono)
- Total R$ 65,50 · CPM R$ 124 · 5 cliques no link · 0 IC · 0 vendas.
- vídeo 09: R$ 18,97, ~171 impressões, 1 clique → CTR link ~0,6% → **pausado pela trava de corte precoce** (R$ 15 e CTR link < 1%).
- Demais anúncios abaixo de R$ 15 (vídeo 14 R$ 11,90; vídeo 12 R$ 10,72; imagem 01 R$ 9,72; vídeo 15 R$ 8,62; vídeo 11 R$ 4,86; vídeos 05/10/13 ≈ R$ 0) → sub-testados, manter.
- Observação: CPM continua alto (R$ 124) mesmo sem Audience Network.
