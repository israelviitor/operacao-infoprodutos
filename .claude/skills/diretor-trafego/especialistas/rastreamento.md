# Especialista — Rastreamento (Pixel + API de Conversões, Cakto, UTMs)

Legenda de origem: **[OFICIAL META]**, **[OFICIAL CAKTO]**, **[PRATICANTE]**, **[A CONFIRMAR]**.
Pesquisa de base: 2026-10-21. Sem rastreamento confiável, nenhuma decisão de tráfego é confiável: confira isto **antes** de julgar criativo.

## 1. Pixel + CAPI juntos
- Usar Pixel e API de Conversões juntos, mandando os mesmos eventos pelos dois. [OFICIAL META] https://developers.facebook.com/docs/marketing-api/conversions-api/best-practices
- Deduplicação: `event_id` + `event_name` iguais no navegador e no servidor (o nº do pedido é um bom ID). [OFICIAL META] https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events
- Qualidade de correspondência (EMQ, nota de 0 a 10, no Gerenciador de Eventos). Parâmetros de maior peso: e-mail, telefone, IP, user agent, fbp, fbc, nome e sobrenome. E-mail, telefone e nome vão com hash SHA-256; IP, user agent, fbp e fbc vão sem hash. [OFICIAL META] https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters
- O único evento padrão que exige valor e moeda é o Purchase. [OFICIAL META] https://developers.facebook.com/docs/meta-pixel/reference

## 2. Cakto
- Pixel por produto: Produtos > [produto] > Configurações > Pixel de conversão > Facebook. Na engrenagem ao lado do pixel fica o **token da API de Conversões**. Leva de 24 a 48h para ativar. [OFICIAL CAKTO] https://ajuda.cakto.com.br/pt-br/articles/56-como-configurar-o-pixel-do-facebook-na-cakto
- Eventos: InitiateCheckout ao abrir o checkout; Purchase quando a compra é aprovada. [OFICIAL CAKTO] (mesmo link)
- **Pix pago depois só chega ao Meta se o token da CAPI estiver preenchido.** [OFICIAL CAKTO] https://ajuda.cakto.com.br/pt-br/articles/67-guia-de-pixels-de-conversao-na-cakto-o-que-sao-e-como-funcionam
- Opção "disparar Purchase ao gerar pedido" com 30 a 50% do valor do Pix. **Atenção:** praticantes alertam que Purchase em Pix gerado infla o ROAS do Gerenciador. Recomendação do time: deixar essa opção desligada e contar só o Pix pago, via token. [OFICIAL CAKTO] + [PRATICANTE] https://keroanunciar.com/blog/pix-trafego-pago-roas-gerenciador
- UTMs lidas pelo checkout: src, sck e utm_*. Elas aparecem em Minhas Vendas > Detalhes da venda. A URL da landing precisa estar cadastrada na aba **Links** do produto. [OFICIAL CAKTO] https://ajuda.cakto.com.br/pt-br/articles/54-como-usar-utm-e-src-no-link-do-checkout
- Integração nativa com a UTMify (eventos pix_gerado e purchase_approved). [OFICIAL CAKTO] https://ajuda.cakto.com.br/pt-br/articles/92-como-integrar-o-utmify-na-cakto
- Webhooks disponíveis: purchase_approved, pix_gerado, refund, chargeback, checkout_abandonment etc. [OFICIAL CAKTO] https://ajuda.cakto.com.br/pt-br/articles/1-como-funcionam-os-webhooks-na-cakto-guia-completo
- [A CONFIRMAR] Se o valor do order bump entra no Purchase e se o upsell gera um Purchase separado. Confirmar com uma compra teste e a ferramenta Test Events.

## 3. Landing própria (Vercel etc.)
- Se o botão da landing tiver link fixo, as UTMs **se perdem** no checkout. É preciso um script que repasse os parâmetros da URL para o link do checkout. Teste: abrir a landing com `?teste=abc` e conferir o link do botão. [PRATICANTE] https://trafius.com.br/blog/utms-nao-chegam-checkout-como-resolver
- [A CONFIRMAR] Se o cookie fbc/fbp da landing chega ao checkout da Cakto, que está em outro domínio.

## 4. Configurações da conta
- AEM: a priorização de 8 eventos acabou, e a verificação de domínio deixou de ser obrigatória, mas continua recomendada. As datas divergem entre as fontes. [PRATICANTE] https://www.jonloomer.com/meta-announces-big-changes-to-website-conversion-campaigns/
- Verificar o domínio por DNS TXT (Configurações do negócio > Segurança da marca > Domínios). [PRATICANTE]

## 5. Problemas comuns e diagnóstico
- **Purchase duplicado:** pixel instalado duas vezes, falta de event_id, mais de um emissor de CAPI (por exemplo Cakto nativa + UTMify + Stape ao mesmo tempo). **Regra:** um único emissor de CAPI por pixel. [PRATICANTE] https://blog.henriquearsego.com.br/api-de-conversoes-e-pixel-duplicados-como-resolver-em-2026/
- **Gerenciador ≠ Cakto** (normal até certo ponto): janela de atribuição (7 dias clique / 1 dia visualização), fuso horário, vendas sem clique, eventos sem valor. Para decidir, use a **venda da Cakto com UTM**; o Gerenciador serve de apoio.

## Checklist antes de qualquer teste de tráfego
1. Pixel no produto da Cakto **com token da CAPI**.
2. Purchase em Pix gerado **desligado**.
3. Landing com Pixel (PageView/ViewContent) e repasse de UTMs para o checkout.
4. URL da landing cadastrada na aba Links da Cakto.
5. Anúncios com UTMs (`utm_source=facebook&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`...).
6. Compra teste: o Purchase aparece **uma vez** no Test Events e a venda mostra as UTMs na Cakto.
