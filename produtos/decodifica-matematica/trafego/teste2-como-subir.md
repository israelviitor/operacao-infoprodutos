# Teste 2 — como subir (Decodifica Matemática)

## 0. Antes de criar (rastreamento)
- [ ] Cakto > produto > Pixel de conversão: Pixel do Facebook **com token da API de Conversões** preenchido.
- [ ] Opção "disparar Purchase ao gerar pedido" **desligada**.
- [ ] Nova LP: Pixel instalado e botão de compra **repassando as UTMs** (teste: abrir a LP com `?teste=abc` e ver se o link do botão leva o `teste=abc`).
- [ ] Domínio da nova LP cadastrado na aba **Links** do produto na Cakto.

## 1. Campanha
- Criar → objetivo **Vendas** → Nome: `Enem T2 - CBO - FB/IG - 1/1/6`
- **Orçamento da campanha (Advantage campaign budget): ligado** · **R$ 100 diário** · Estratégia de lance: **Maior volume**

## 2. Conjunto (1 só)
- Nome: `Aberto - BR - FB/IG`
- Local da conversão: **Site** · Pixel · Evento: **Compra**
- Público: Brasil · 18–65 · Advantage+ Audience ligado (sem interesses)
- Posicionamentos: **manuais** → marcar só **Facebook** e **Instagram** (desmarcar Audience Network, Messenger, Threads e WhatsApp)
- **Desmarcar "Permitir gasto limitado em posicionamentos excluídos"** (senão ~5% do orçamento por posicionamento excluído volta para eles)
- Atribuição: padrão. Decisões pela Cakto.

## 3. Anúncios (6)
- Usar **"Usar publicação existente"** (mesmo post → mantém curtidas e comentários): vídeo 02, vídeo 08, imagem 02, imagem 06, imagem 04, vídeo 04.
- Link: **nova LP** · Parâmetros de URL: os mesmos do teste 1 (`utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}`)
- **Desligar os aprimoramentos de criativo do Advantage+** (o Meta não reescreve o texto).
- Título: trocar "Últimas unidades!" por, por ex., "60 padrões + 4 bônus por R$ 14,90". Sem "garantir aprovação" no texto.

## 4. Depois de publicar
- Não mexer por 48–72h.
- Pausar criativo: 0 vendas com R$ 35 gastos · 1 venda com R$ 58.
- Aos R$ 150 gastos na campanha:
  - 6 vendas ou mais (Cakto) → fase 2;
  - 4–5 vendas → mais R$ 100;
  - 3 ou menos → para.

## Posts exatos dos 6 criativos (atenção: há nomes repetidos em campanhas diferentes)
| Criativo | Campanha de origem (teste 1) | Vendas | Post |
|---|---|---|---|
| video 02 (sem acento) | Enem 12 - 1/1/10 | 2 | https://www.facebook.com/reel/29044267131872831/ |
| vídeo 08 | Enem 08 - Triplo 1 | 2 | https://www.facebook.com/reel/1327160652716994/ |
| imagem 02 | Enem 12 - 1/1/10 | 1 | https://www.facebook.com/61594648123233/posts/pfbid02rY5i7PTg7trL9yY7xhzTvQpPyXNZMNfaxrazHcq4v5mxAZVndeWS6A8dZfYyXxz5l |
| imagem 06 | Enem 13 - 1/1/10 | 1 | https://www.facebook.com/61594648123233/posts/pfbid0FBfRRXDDQoiHah8tbcTecm9DpXPCaxYRit65ULKFA57MVrx1ZVsPVVBTFnSuG19dl |
| imagem 04 | Enem 13 - 1/1/10 | 0 (CTR 3,5%) | https://www.facebook.com/61594648123233/posts/pfbid029nZFTFVCLuXrrXQrMJLKUpeFPFxoCot3pjwzhr6DfNgXtt2WxZVFeQpC36kf9GVol |
| vídeo 04 (com acento) | Enem 04 - Triplo 1 | 0 (CTR 3,6%, 2 IC) | https://www.facebook.com/reel/1484724603578766/ |

NÃO usar: "vídeo 02" (com acento) da Enem 02 nem "imagem 02" da Enem 10 — mesmo nome, outro post, 0 vendas.
