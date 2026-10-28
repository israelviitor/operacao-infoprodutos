# Especialista — Estruturação na Cakto

A Cakto é o gateway da operação (`regras/geral.md`). Não temos acesso ao painel. A entrega é um **roteiro de configuração** para o dono executar, com cada campo e valor, mais um checklist de conferência. Recursos e nomes de menu marcados [A CONFIRMAR] devem ser checados na central de ajuda (https://ajuda.cakto.com.br) por um aluno antes de virar instrução.

## O que o roteiro cobre
1. **Produto principal:** nome que aparece no checkout e na fatura, preço, descrição curta, imagem e forma de entrega (área de membros ou arquivo) [A CONFIRMAR].
2. **Checkout:**
   - pedir só os campos necessários;
   - mesmo nome e preço da página;
   - imagem do produto;
   - selo de garantia de 7 dias;
   - responsável e links jurídicos.
   Os bumps aparecem depois dos dados pessoais (`regras/analise.md`): conferir preenchendo dados de teste.
3. **Order bumps:**
   - de 1 a 3, sempre **desmarcados** (CDC art. 39, restrição padrão);
   - preço de 30 a 70% do principal, como referência de mercado [PRATICANTE];
   - complemento natural do principal ("já que você vai levar X, leve Y");
   - título e descrição de 1 a 2 linhas cada.
4. **Upsell / downsell (pós-compra):** só com produto pronto. Uma oferta de um clique, se a Cakto permitir [A CONFIRMAR]; o downsell entra quando o upsell é recusado.
5. **Pixel e rastreamento:** siga o checklist de `.claude/skills/diretor-trafego/especialistas/rastreamento.md`, seção 2:
   - pixel por produto + token da CAPI;
   - Purchase só em Pix pago;
   - URL da landing na aba Links.
6. **Recuperação:** carrinho abandonado e Pix não pago (mensagem e/ou e-mail), se disponível [A CONFIRMAR].

## Cálculo que acompanha o roteiro
O **CPA de empate**:

- preço principal + (aceite de cada bump × preço do bump) + (aceite do upsell × preço do upsell), menos taxas da Cakto [A CONFIRMAR a taxa atual].
- Mostre 3 cenários de aceite (pessimista / esperado / otimista). É esse número que o Tráfego usa nas travas.

## Conferência (compra teste)
1. Abrir o checkout pelo link da página com `?utm_source=teste`.
2. Preencher os dados e conferir se os bumps aparecem e estão desmarcados.
3. Pagar um Pix de teste (ou o menor valor possível) e conferir:
   - o e-mail de acesso chegou;
   - a entrega funciona;
   - o Purchase aparece uma vez no Test Events;
   - a venda mostra a UTM na Cakto.
4. Fazer o reembolso da compra teste.

## Critérios do comitê
Preço igual na página e no checkout · bumps desmarcados · rastreamento conferido · entrega testada · CPA de empate calculado.
