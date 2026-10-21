# Especialista — Métricas e Regras de Decisão (pausar, manter, escalar)

Legenda: **[OFICIAL META]**, **[ESTATÍSTICA]**, **[PRATICANTE]**, **[SEM BASE]**. Pesquisa de base: 2026-10-21.
Não existe benchmark oficial do Meta de CTR, CPM ou conversão. Os números de mercado variam muito: compare sempre com o **histórico do próprio dono**.

## 1. Definições (fixe uma fórmula e não mude)
| Métrica | Fórmula da operação | Origem |
|---|---|---|
| CPM | gasto ÷ impressões × 1000 | [OFICIAL META] https://www.facebook.com/business/help/389270858241293 |
| CTR (link) | cliques no link ÷ impressões | [OFICIAL META] https://en-gb.facebook.com/business/help/877711998984611 |
| CPC (link) | gasto ÷ cliques no link | [OFICIAL META] |
| **Connect rate** | visualizações da página de destino ÷ cliques no link | [PRATICANTE] não é métrica oficial; a LPV exige Pixel na página. https://en-gb.facebook.com/business/help/203012060587398 |
| **Hook rate** | reproduções de 3s ÷ impressões | [PRATICANTE: Motion] https://motionapp.com/library/glossary/thumbstop-rate |
| **Hold rate** | ThruPlays ÷ reproduções de 3s | [PRATICANTE] não há padrão; a operação usa esta |
| Taxa de checkout | InitiateCheckout ÷ LPV | operação |
| Taxa de compra | compras (Cakto) ÷ InitiateCheckout | operação |
| CPA | gasto ÷ compras **aprovadas na Cakto** | operação (o CPA do Gerenciador é só apoio) |
| Frequência | impressões ÷ alcance | [OFICIAL META] |

## 2. Referências de mercado (só como norte, nunca como meta)
- Connect rate: abaixo de **70%** é ruim, o ideal é 80% ou mais. Abaixo disso, investigue velocidade da página, pixel e redirecionamentos. [PRATICANTE: Loomer, The Ad Spend] https://theadspend.com/blog/landing-page-views
- Hook rate: **20–40%** é considerado sólido, com variação enorme por nicho. [PRATICANTE: Motion]
- CTR (link) em público frio abaixo de **0,5%** é alerta. [PRATICANTE: AdManage] https://admanage.ai/blog/when-to-kill-a-facebook-ad
- CPM no Brasil (todos os setores): mediana de cerca de US$ 3,46, com pico de US$ 7,45 em jun/2026. [FERRAMENTA: Superads] https://www.superads.ai/facebook-ads-costs/cpm-cost-per-mille/brazil
- Conversão da página low ticket com tráfego frio: 2–5% (visita → compra). [PRATICANTE BR, sem metodologia] https://herospark.com/blog/taxa-de-vendas-ideal-para-infoprodutos-low-ticket/
- Cada segundo a mais de carregamento (até 5s) custa cerca de 4,4% de conversão. [PRATICANTE: Portent, via Locaweb]

## 3. Diagnóstico pelo funil — "primeiro elo quebrado"
| Sintoma | Onde está o problema | Ação |
|---|---|---|
| CTR baixo / hook rate baixo | Criativo (gancho, ângulo) ou público | Novo conceito de criativo (diretor de copy) |
| CTR ok, connect rate abaixo de 70% | Página lenta, pixel ou redirecionamento | Diretor de análise: velocidade e rastreamento |
| LPV ok, poucos IC | Página não convence (promessa, oferta, prova, preço) | Diretor de análise: página |
| IC ok, poucas compras | Checkout, Pix não pago, preço surpresa, rastreamento | Checkout e recuperação de Pix |
| CTR alto e conversão baixa | O criativo atrai curiosidade, não intenção de compra | Revisar a promessa do criativo |
[PRATICANTE] https://viniensina.com.br/ferramentas/analisador-metricas-meta-ads/

## 4. Quando pausar (base estatística)
Lógica: com poucas vendas não dá para **eleger** vencedor com segurança, mas dá para **cortar** com segurança, usando múltiplos do CPA alvo. [ESTATÍSTICA: regra de três / Poisson] https://en.wikipedia.org/wiki/Rule_of_three_(statistics)

| Vendas do criativo/conjunto | Pausar quando o gasto passar de (90% de confiança) | (95%, conservador) |
|---|---|---|
| 0 | **~2,3x o CPA alvo** | ~3x |
| 1 | ~3,9x | ~4,7x |
| 2 | ~5,3x | ~6,3x |
| 3 | ~6,7x | ~7,8x |
[PRATICANTE com base estatística: Cedric Yarish/AdManage, jan/2026] https://admanage.ai/blog/when-to-kill-a-facebook-ad

Regras complementares:
- **Gastar menos de 1x o CPA alvo sem venda não prova nada** (ver regras/analise.md).
- Não decida com menos de 48–72h de dados. Decida por **volume de dados**, não por dias corridos ("regra dos 3 dias" é criticada). [PRATICANTE: AdManage, Trafius]
- Sinais antes da venda: com cerca de 1.000 impressões, olhe hook rate e CTR; com 50–200 cliques, olhe connect rate e IC.
- Frequência acima de 2,5–3 com CTR caindo indica fadiga do criativo.
- **Pause, não exclua** (mantém o histórico e o ID do post).

## 5. Quando escalar
- Pré-requisito sugerido: CPA abaixo do CPA máximo por vários dias e volume de vendas consistente. [PRATICANTE]
- "Aumentar no máximo 20% a cada 48–72h" é **[SEM BASE] oficial**: o Meta só diz que depende do tamanho da mudança. Use como precaução e **registre no diário** o que acontece na conta do dono.
- Conjuntos que já vendem: espere cerca de 10–20 eventos antes de mexer em orçamento ou público. [PRATICANTE BR: Trafius]

## 6. Atribuição — por que o Gerenciador não bate com a Cakto
- Janela padrão: 7 dias clique + 1 dia visualização. Desde mar/2026, clique conta só **clique no link**; os outros cliques vão para "engage-through". A visualização é "a fonte mais provável de resultados inflados". [OFICIAL via Loomer] https://www.jonloomer.com/meta-ads-attribution-2026/
- O Meta registra a venda na **data da impressão**, então aparecem vendas "retroativas". [PRATICANTE: Loomer]
- Purchase disparado em Pix **gerado** infla o resultado (ver rastreamento.md).
- **Para decidir, use a venda aprovada na Cakto com UTM.**
