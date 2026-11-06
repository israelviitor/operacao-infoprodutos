# Gateway para vender em dólar nos EUA — Kiwify × Digistore24 (Stripe e ClickBank como referência)

> Estrutura, 2026-11-06. Pesquisa de 4 alunos, só fontes oficiais de cada plataforma, acessadas em 2026-11-06. Data = "atualizado em" da página; "s/d" = página sem data.
> Contexto: vendedor no Brasil, produto digital de pagamento único, low ticket (US$ 10–40), comprador nos EUA, tráfego do Meta. Regra geral de 06/11: o gateway dos EUA está a definir (proposta do dono: Kiwify). **Nada foi configurado.**

## 1. Quadro comparativo
| | **Kiwify (internacional)** | **Digistore24 (Inc.)** | Stripe (conta Brasil) — ref. | ClickBank — ref. |
|---|---|---|---|---|
| Checkout em USD e inglês | Sim. O mesmo checkout se adapta ao IP do comprador; preço cadastrado em USD. Só pagamento único. | Sim (`currency=USD`, `lang=en`). Order form sempre da Digistore24; embutível no domínio. | Inglês sim. Cobrar em USD com conta BR **não confirmado** (liquidação em BRL; preço convertido para o comprador). | Sim, em 6 idiomas; 31 moedas, tudo creditado em USD. |
| Quem vende (MoR) e impostos | Kiwify US Inc. (Miami); cobra sales tax do comprador. | Digistore24 Inc.; calcula e recolhe sales tax. | O próprio vendedor. | ClickBank; fatura sai como CLKBANK. |
| Meios para o comprador dos EUA | Cartão à vista e Apple Pay. **PayPal e Google Pay: não encontrado.** | Cartões, PayPal, Apple/Google Pay (no cart builder), Klarna, Sezzle. | Visa/Mastercard ok; **Amex não aceita** em conta BR; sem Link. | Cartão, débito, Klarna; PayPal se o vendedor conectar. |
| Aprovação de cartão estrangeiro | Sem dado oficial ("quem recusa é o banco emissor"). | Sem dado oficial (só marketing). | Sem dado; restrição cambial da conta BR, exceto Visa/Master estrangeiros. | Sem dado. |
| Order bump | Sim (até 5). **Não confirmado em venda internacional.** | Sim; **nunca pré-marcado na Inc.** (lei dos EUA). | Sim (cross-sell nativo do Checkout). | Sim (4 ou 5; texto aprovado pelo compliance). |
| Upsell de 1 clique | Sim (cartão salvo). **Não confirmado em venda internacional.** | Sim, nativo, até 6 etapas + downsell. | Não nativo: exige desenvolvimento. | Sim, até 3 ofertas + downsell; cada funil aprovado (3–5 dias úteis). |
| Taxa por venda | 9,99% + US$ 0,80 | 7,9% + US$ 1 (9,9% se chargeback > 1%) | 3,99% + R$ 0,39 + 2% internacional | 7,5% + US$ 1 + ativação US$ 49,95 |
| Líquido de uma venda de US$ 19,90 / US$ 29,90 | ≈ US$ 17,11 / 26,11 | ≈ US$ 17,33 / 26,54 | ≈ US$ 18,6 / 28,0 (não comparável: o vendedor é o MoR e responde pelo sales tax; antes do câmbio) | ≈ US$ 17,41 / 26,66 (antes das taxas fixas) |
| Chargeback | US$ 50 por alerta ou chargeback | US$ 50 (US$ 40 com prevenção) | R$ 55 | US$ 22 a US$ 49 + margem |
| Liberação e saque para o Brasil | D+15; saque convertido em **reais via Pix**, até 4 dias úteis; US$ 1 por saque. Câmbio/IOF não informado. | 90% em D+14 e 10% em D+60; saque só em USD: PayPal (US$ 20 para conta fora dos EUA) ou wire (US$ 40, mínimo 250); datas fixas (7 e 21). Payoneer: dois artigos se contradizem. | Diário e automático em BRL; 1º saque após 30 dias (5 para internacional). | Wire US$ 45 ou Payoneer via conta dos EUA; semanal; conta nova só recebe depois de 5 vendas com mais de 14 dias. |
| Reserva | 10% por 45 dias (termos US) — diverge da central BR | 10% por 60 dias | — | 10% por 84 dias |
| Aceita vendedor PF no Brasil? | Os termos BR pedem conta do mesmo titular e domicílio; nenhuma fonte restringe PF. | **Não está claro** (um artigo diz que só paga empresas). | Sim (CPF basta). | **Não confirmado.** |
| Aprovação do produto | Nenhuma fonte cita aprovação prévia. | Manual, até 48 h úteis; selo e rodapé obrigatórios; reembolso escrito de 60, 90 ou 180 dias. | Não há. | 3–5 dias úteis; reembolso padrão de 60 dias. |
| Risco de conta (nicho de saúde, chargeback) | Bloqueio de saldo por até 120 dias se o chargeback passar de 1,5% (termos BR, cl. 14.4). O que acontece com o saldo numa suspensão por conteúdo: não encontrado. | Taxa sobe para 9,9% acima de 1% de chargeback; suplemento e saúde passam por aprovação especial. Retenção numa suspensão: não encontrado. | Aprovação em categoria restrita "pode ser revogada a qualquer momento". | Chargeback mais caro acima de 1%; pode mudar a política de reembolso do vendedor; pode reter fundos (contrato §4(c)). |
| Nichos | Proíbe "rápida perda de peso", "enriquecimento instantâneo", cura sem respaldo, automedicação, apostas, day trade, pirâmide. | Proíbe fraude no "make money", trading; suplemento exige aprovação especial; disclaimer de ganhos. | Proíbe "get rich quick", suplemento com alegação nociva; namoro é restrito. | Proíbe "sem dieta nem exercício", "safe" para suplemento, cronômetro sem base, urgência falsa. |
| Meta Pixel / CAPI | Pixel nativo (IC e Purchase). O Purchase vai com o **valor líquido** da comissão, o que distorce o ROAS no Meta. CAPI nativa com deduplicação, mas o artigo é de 2021: **a confirmar**. | CAPI nativa server-side via IPN; pixel no order form; embutir no domínio para iOS. | Nenhum nativo: só código próprio ou webhook. | CAPI nativa S2S (IC, Purchase, Upsell) com `fbclid`. |

## 2. Recomendação
**Kiwify**, com 3 perguntas ao suporte antes de configurar:
1. Order bump e upsell de 1 clique funcionam no checkout internacional em USD (e com Apple Pay)? O bump vem desmarcado nas vendas da Kiwify US Inc.? Pela lei dos EUA, a Digistore24 Inc. proíbe o bump pré-marcado.
2. Qual reserva vale para venda internacional de vendedor brasileiro: 10% por 45 dias? O que acontece com o saldo se a conta for suspensa por conteúdo?
3. Qual câmbio e qual IOF incidem na conversão USD → BRL do saque? E a CAPI de hoje continua a do artigo de 2021, com qual moeda no Purchase?

**Por quê:**
- **Saque mais simples.** É a única das duas que paga em reais, via Pix, com taxa de US$ 1 por saque.
- **Menos barreira de entrada.** Nenhuma fonte restringe vendedor pessoa física nem cita aprovação prévia, selos ou reembolso mínimo de 60 dias. A Digistore24 exige os três.
- **Rastreamento nativo.** Tem Pixel e CAPI nativos. A CAPI ainda precisa ser confirmada.
- **Em compensação:**
  - A taxa por venda é maior: US$ 0,22 a mais que a Digistore24 numa venda de US$ 19,90 e US$ 0,43 a mais numa de US$ 29,90.
  - A Digistore24 libera antes: 90% em D+14, contra D+15 na Kiwify.

**Ponto de equilíbrio do custo:**
- O saque da Digistore24 custa US$ 20 (PayPal) a US$ 40 (wire), em 2 datas por mês: US$ 40 a US$ 80 por mês. Na Kiwify são cerca de US$ 2 por mês.
- Somando isso à diferença por venda, a Digistore24 só fica mais barata **acima de ~90 a ~350 vendas por mês**, conforme o ticket e a forma de saque. E isso sem contar o câmbio, que é desconhecido nas duas.
- No volume de teste, a Kiwify sai mais barata. Se a operação passar dessa faixa, vale refazer a conta com o câmbio real.

**Plano B: Digistore24.** Vale se a Kiwify disser que bump ou upsell **não** funcionam em venda internacional e a oferta depender deles, ou se a falta de PayPal derrubar a conversão. A Digistore24 tem upsell de 1 clique e PayPal confirmados para os EUA. O custo é o saque em dólar, mais uma dúvida a esclarecer: se ela aceita vendedor pessoa física no Brasil.

**Referências descartadas:**
- **Stripe:** o vendedor vira o MoR e responde pelo sales tax dos EUA. A conta Brasil não confirma cobrança em USD, não aceita Amex e não tem upsell nem Pixel nativos.
- **ClickBank:**
  - aprovação prévia de cada funil e de cada texto de bump (3 a 5 dias úteis);
  - conta nova só recebe depois de 5 vendas com mais de 14 dias;
  - reserva de 84 dias e US$ 45 por wire;
  - vendedor brasileiro não confirmado.

**Hotmart:** ficou fora porque não foi pedida, mas o VittaFlow já vende em USD por ela. Se quiser, entra como 5ª coluna na mesma régua antes da decisão.

**Nicho de saúde (VittaFlow):** as duas proíbem ou controlam alegações de cura e de perda de peso rápida. Uma conta bloqueada com saldo retido pesa mais do que US$ 0,20 por venda. Qualquer oferta de saúde precisa passar antes pelo compliance da página (sem antes e depois, sem cura, sem urgência falsa).

## 3. Lacunas (só o suporte responde)
- Taxa oficial de aprovação de cartão americano: nenhuma das 4 publica.
- Kiwify: Google Pay e PayPal internacionais; moeda enviada no Purchase do Pixel em venda em USD.
- Digistore24: Payoneer como forma de saque (os artigos se contradizem); documentos do KYC.

## 4. Fonte por linha do quadro
- **Checkout, MoR e meios:** Kiwify — checkout fora do Brasil, termos BR §7.6, termos US §4.C · Digistore24 — pre-fill do order form (23640618463633), revendedoras, meios de pagamento · Stripe — conta Brasil, restrição cambial, bandeiras, payment-method-support (sem Link) · ClickBank — offering globally (10535226), currencies (10535139), terms of sale (10535340).
- **Bump e upsell:** Kiwify — order bump, upsell de 1 clique · Digistore24 — upsells, add-ons · Stripe — cross-sells, save-during-payment · ClickBank — order bump, upsell flows.
- **Taxas, chargeback, saque e reserva:** Kiwify — checkout fora do Brasil, saque internacional, prazo de saque, termos BR §14.4 e §14.6.2, termos US §4.E · Digistore24 — taxas (23694606727057), saque (23461749197457), Payoneer (23543008174993), prazos e mínimos (23544585099665) · Stripe — preços BR, saques · ClickBank — taxas, saque, política contábil, Payoneer (10535384).
- **Nichos e risco de conta:** Kiwify — política de conteúdo, termos BR §14.4 · Digistore24 — produtos proibidos, critérios EUA · Stripe — negócios restritos (namoro restrito, "get rich quick" proibido) · ClickBank — guidelines de produto e promocionais, contrato §4(c).
- **Pixel/CAPI:** Kiwify — pixel, CAPI (2021) · Digistore24 — CAPI, pixel no order form · Stripe — analyze-conversion-funnel · ClickBank — S2S Meta.

## 5. Fontes principais
- Kiwify — checkout fora do Brasil (03/11/2026): https://ajuda.kiwify.com.br/pt-br/article/o-checkout-funciona-fora-do-brasil-1cdb1ri/ · Termos (versão 29/10/2026): https://kiwify.com.br/termos-de-uso · Termos US (s/d): https://kiwify.com/terms-and-conditions-buyers-and-vendors · Saque internacional (08/10/2026): https://ajuda.kiwify.com.br/pt-br/article/como-consultar-o-saldo-e-sacar-minhas-vendas-internacionais-nv00xm/ · Prazo de saque (08/10/2026): https://ajuda.kiwify.com.br/pt-br/article/depois-de-efetuar-um-saque-quanto-tempo-leva-para-cair-na-conta-13f4hdt/ · Upsell 1 clique (30/10/2026): https://ajuda.kiwify.com.br/pt-br/article/como-configurar-upsell-de-1-clique-12ei26e/ · Order bump (06/11/2026): https://ajuda.kiwify.com.br/pt-br/article/como-funcionam-os-order-bumps-1bb22bl/ · Impostos internacionais (08/10/2026): https://ajuda.kiwify.com.br/pt-br/article/como-funcionam-os-impostos-nas-vendas-internacionais-y3egw1/ · Política de conteúdo (10/08/2026): https://kiwify.com.br/politica-de-conteudo · Pixel (28/10/2026): https://ajuda.kiwify.com.br/pt-br/article/como-configurar-o-pixel-do-facebook-1rb2xtr/ · CAPI (30/09/2021): https://ajuda.kiwify.com.br/pt-br/article/como-configurar-a-api-de-conversao-do-facebook-194ipi9/ · Recusa de cartão (20/03/2026): https://ajuda.kiwify.com.br/pt-br/article/por-que-uma-venda-via-cartao-de-credito-foi-recusada-vrir7h/
- Digistore24 — revendedoras (25/10/2026): https://help.digistore24.com/hc/en-us/articles/23314370906897 · Critérios EUA (02/11/2026): https://help.digistore24.com/hc/en-us/articles/23661590794769 · Taxas (01/11/2026): https://help.digistore24.com/hc/en-us/articles/23694606727057 · Saque (31/10/2026): https://help.digistore24.com/hc/en-us/articles/23461749197457 · Payoneer (29/10/2026): https://help.digistore24.com/hc/en-us/articles/23543008174993 · Order form/moedas (19/10/2026): https://help.digistore24.com/hc/en-us/articles/23640618463633 · Prazos e mínimos (01/11/2026): https://help.digistore24.com/hc/en-us/articles/23544585099665 · Upsells (05/11/2026): https://help.digistore24.com/hc/en-us/articles/24285485511313 · Add-ons (02/11/2026): https://help.digistore24.com/hc/en-us/articles/24012113127057 · Meios de pagamento (02/11/2026): https://help.digistore24.com/hc/en-us/articles/23836749484945 · CAPI (07/08/2026): https://help.digistore24.com/hc/en-us/articles/24293227203089 · Produtos proibidos (03/11/2026): https://help.digistore24.com/hc/en-us/articles/23347395409425
- Stripe — conta Brasil (s/d): https://support.stripe.com/questions/brazil-specific-information-to-open-a-stripe-account · Restrição cambial (s/d): https://support.stripe.com/questions/transaction-declined-stripe-brazil-accounts · Bandeiras (s/d): https://docs.stripe.com/payments/cards/supported-card-brands · Meios por país (s/d): https://docs.stripe.com/payments/payment-method-support · Preços BR (s/d): https://stripe.com/br/pricing · Saques (s/d): https://docs.stripe.com/payouts · Cross-sells (s/d): https://docs.stripe.com/payments/checkout/cross-sells · Negócios restritos (22/09/2026): https://stripe.com/legal/restricted-businesses
- ClickBank — idiomas e moedas (14/01/2026): https://support.clickbank.com/en/articles/10535226-offering-products-globally · Moedas (07/04/2025): https://support.clickbank.com/en/articles/10535139-what-currencies-are-accepted-by-clickbank · Terms of Sale (26/08/2026): https://support.clickbank.com/en/articles/10535340-clickbank-terms-of-sale · Contrato (26/08/2026): https://support.clickbank.com/en/articles/10535337-clickbank-client-contract · Payoneer (17/06/2026): https://support.clickbank.com/en/articles/10535384-payoneer-clickbank-integration · Taxas (26/08/2026): https://support.clickbank.com/en/articles/10535137-what-are-clickbank-s-fees · Upsell (17/03/2026): https://support.clickbank.com/en/articles/10535233-upsell-flows · Order bump (31/03/2025): https://support.clickbank.com/en/articles/10535236-using-the-order-bump-feature · Saque (13/01/2026): https://support.clickbank.com/en/articles/10535123-how-do-i-get-paid · Política contábil (10/09/2026): https://support.clickbank.com/en/articles/10535345-clickbank-accounting-policy · CAPI (10/04/2025): https://support.clickbank.com/en/articles/10535369-s2s-tracking-integration-meta-facebook-pixel · Regras promocionais (10/04/2025): https://support.clickbank.com/en/articles/10535354-promotional-guidelines
