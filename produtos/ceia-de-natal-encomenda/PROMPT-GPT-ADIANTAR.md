# Prompt para o ChatGPT adiantar a LP — Ceia de Natal por Encomenda

> Montado pela Central em 26/11/2026 a partir do QUADRO e do dossiê. Serve só para o ChatGPT entender a oferta e preparar domínio, projeto e esqueleto. O texto final da página e o pacote completo vêm depois, da Estrutura.

---

Vou montar com você uma landing page de um infoproduto brasileiro. **Nesta etapa NÃO escreva a copy final**: ela vem pronta depois, palavra por palavra, do meu time. Agora quero que você entenda a oferta e adiante a parte técnica e a organização.

## A oferta (síntese)
- **O que é:** um kit digital que ensina a **ganhar dinheiro fazendo ceia de Natal por encomenda em casa**. Ensina a saber **quanto cobrar, quanto fazer e quantos pedidos aceitar**, sem virar a cozinheira que se sobrecarrega e deixa os clientes sem ceia no dia 24.
- **Promessa (rascunho, a copy final vem depois):** "Venda a ceia de Natal sabendo quanto cobrar, quanto fazer e quantos pedidos aceitar, sem virar a cozinheira que deixou os clientes sem ceia."
- **Público:** mulheres de 35 a 55 anos, no Brasil, que cozinham bem para a família ou já vendem doces e salgados de casa (dona de casa, professora, cozinheira autônoma) e querem uma renda extra concentrada em dezembro, para as contas de fim de ano, presentes e o começo do ano.
- **Dores:** não sabe quanto cobrar ("cobra pouco e trabalha de graça"); medo de pegar encomenda demais e falhar no dia 24; cliente que desiste em cima da hora; não sabe divulgar; acha que não dá mais tempo.
- **Urgência real:** as vendas vão até cerca de 10/12. As encomendas dela fecham por volta de 15/12, e a entrega é nos dias 23, 24 e 25. A página precisa estar no ar rápido.
- **Tom:** próximo, de cozinha de casa, direto, com números reais (ex.: kits de ceia vendidos de R$ 179 a R$ 479; um kit de R$ 299 para 6 a 8 pessoas). Copy agressiva e persuasiva, mas mostrando a conta.

## Planos (duas ofertas na mesma página)
**Básico: R$ 17,90**
- 50 receitas de pratos de Natal para vender.

**Premium: R$ 29,90** (destacar como o mais completo)
- As 50 receitas **com quantidades para 4, 6, 10 e 20 pessoas, custo, preço de venda e lucro de cada prato**.
- Bônus:
  1. Como Precificar.
  2. Almoço do Dia 25 (cardápio separado, com produção e limite próprios).
  3. Calendário Anti-Sufoco (quando abrir e fechar pedidos, limite de pedidos por dia).
  4. Kits Prontos de 4 a 20 pessoas, com preço de combo.
  5. Planilha de Pedidos e Sinal (valor, sinal de 50%, saldo, lista de compras).
  6. Checklist da Ceia Segura (segurança alimentar).

**Order bumps no checkout** (sempre desmarcados):
- Como conseguir seus 10 primeiros clientes: R$ 12,90.
- Mensagens que fecham pedido: R$ 7,90.
- Ceias de R$ 400+: pratos premium e como vender para quem paga mais: R$ 14,90.

**Upsell de 1 clique depois da compra:** Ceia de Ano Novo, para vender de novo no dia 31: R$ 19,90.

- **Garantia:** 7 dias.
- **Entrega:** digital, acesso imediato (PDF, funciona no celular).
- **Checkout:** Cakto, um link para cada plano. Eu te passo os links e o ID do Pixel da Meta depois.

## O que NÃO pode ter na página
- Depoimentos, prints de faturamento ou número de alunas inventados (ainda não existem).
- "Chef" ou "nutricionista" falso: a persona é uma pessoa comum.
- Prometer na página receitas ou bônus que não estejam na lista acima.
- Afirmar que "MEI não precisa de licença": a vigilância sanitária depende do município.
- Contagem regressiva ou "de/por" falsos.

## O que eu quero que você adiante AGORA
1. **Domínio:** sugira 10 opções de domínio .com.br curtos, fáceis de falar e ligados a "ceia de Natal + vender/lucrar/encomenda" (o nome do produto ainda não está fechado; pense em nomes que também sirvam de marca). Diga quais parecem mais fortes.
2. **Projeto:** crie e deixe organizado o projeto da página no v0/Vercel, pronto para receber o texto final: página principal, página de termos de uso, página de política de privacidade e uma pasta de imagens.
3. **Esqueleto da página,** só com títulos provisórios de seção e espaços marcados como [TEXTO FINAL], nesta ordem:
   1. Primeira dobra com headline, subheadline, mockup do kit e botão.
   2. Dor e identificação.
   3. A virada (o método: ficha "prato pronto para vender" + calendário de encomendas + limite de pedidos).
   4. A conta (quanto ela pode ganhar, com números de exemplo).
   5. O que você recebe.
   6. Os dois planos lado a lado, com o Premium em destaque.
   7. Bônus do Premium.
   8. Para quem é.
   9. Garantia de 7 dias.
   10. Perguntas frequentes.
   11. Fechamento com urgência real do calendário.
   12. Rodapé com responsável, contato, termos, privacidade e o aviso "Este site não faz parte do Facebook nem da Meta Platforms, Inc.".
4. **Técnico, já preparado:**
   - layout para celular primeiro, carregamento rápido e imagens leves;
   - um botão para cada plano, levando ao checkout certo;
   - script que repassa os parâmetros de UTM (`utm_*`, `src`, `sck`, `fbclid`) da URL para os links do checkout;
   - espaço para o Pixel da Meta (PageView e ViewContent), com o ID a preencher depois.
5. **Visual:** proponha uma identidade visual de Natal acolhedora e "de cozinha de casa" (paleta, fontes e estilo de imagem), sem cara de supermercado, e 3 ideias de mockup do kit (PDF no celular + fichas impressas).

Quando terminar, me mostre: os domínios sugeridos, o link de prévia do projeto e o esqueleto montado. Depois eu te mando o texto final e as imagens para encaixar.
