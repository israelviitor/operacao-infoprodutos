# Roteiro de configuração na Cakto · Ceia que Vende

> Estrutura, 2026-11-26. Para o dono (ou quem ele delegar) executar no painel. Nós não temos acesso à Cakto.
> Caminhos e taxas: os mesmos já conferidos na central de ajuda para a Matemática em Missão (`produtos/matematica-investigativa/estrutura/cakto-roteiro.md`, out-nov/2026). O que a central não detalha está marcado **[CONFERIR NO PAINEL]**.
> Textos de checkout, bumps e upsell: exatos de `copy/pagina-vendas.md` (seção "Checkout na Cakto").

## 0. Ordem e trava de compliance
1. **Hoje:** cadastrar os 2 produtos principais (Básico e Premium) e colar os 2 links de checkout no `CONFIG` da LP.
2. **Os 3 bumps e o upsell são cadastrados agora, mas só ficam ATIVOS quando o material deles existir** (CDC arts. 30 e 35). Bump ligado sem material = vender o que não existe.
3. **Os anúncios só rodam depois** que os entregáveis do **Premium e do Básico** estiverem prontos e da compra teste (passo 7) aprovada. Prazo da oferta: vender até ~10/12, então cada dia de atraso no entregável é um dia a menos de venda.

## 1. Os 2 produtos principais
São **2 produtos separados** (não 2 ofertas do mesmo produto), porque a entrega é diferente: o Básico recebe só as 50 receitas e o Premium recebe tudo. Com 1 produto e 2 ofertas, os 2 compradores cairiam na mesma área de membros. **[CONFERIR NO PAINEL]** se a sua conta permite entrega diferente por oferta. Se permitir, pode ser 1 produto com 2 ofertas.

Caminho: **Produtos > Adicionar Produto** (3 etapas), uma vez para cada.

| Campo | PREMIUM | BÁSICO |
|---|---|---|
| Nome (checkout e fatura) | `Ceia que Vende PREMIUM: 50 receitas + as 3 contas + 6 bônus` | `Ceia que Vende BÁSICO: 50 receitas de Natal para vender` |
| Imagem (300×250) | `estrutura/pagina/img/capa.jpg` recortada | `estrutura/pagina/img/capa-basico.jpg` recortada (nunca a capa do Premium) |
| Descrição (mín. 100 caracteres) | 50 receitas de Natal para vender, com quantidade para 4, 6, 10 e 20 pessoas, custo, preço de venda e lucro em cada uma, e mais 6 bônus: Como Precificar, Almoço do Dia 25, Calendário Anti-Sufoco, Kits Prontos, Planilha de Pedidos e Sinal e Checklist da Ceia Segura. | 50 receitas de Natal para vender por encomenda: assados, acompanhamentos e sobremesas da ceia, em PDF para abrir no celular, no computador ou impresso. |
| Pagamento único | **R$ 29,90** | **R$ 17,90** |
| Métodos | Pix e cartão (sem boleto: a venda é até ~10/12 e o boleto leva até 3 dias para compensar) | idem |
| Parcelamento | **Desligado** (só à vista). A página diz "à vista no Pix ou no cartão". | idem |
| Confirmação de e-mail | **Ligada** | **Ligada** |
| Página de vendas | URL publicada da LP | idem |
| E-mail de suporte | o mesmo `[E-MAIL DE SUPORTE]` da página | idem |
| Canal de entrega | **Cakto Members** | **Cakto Members** |

**Área de membros (Produtos > (produto) > aba Área de Membros > + Adicionar Módulo)**
- **Premium:** `Comece aqui` (como usar as 3 contas em 5 minutos) · `As 50 receitas` (por categoria: Assados, Acompanhamentos, Sobremesas) · `Bônus` (os 6, um conteúdo para cada; a Planilha entra como link do Google Sheets com "Fazer uma cópia").
- **Básico:** `As 50 receitas`.
- Por que Members: o acesso sai no e-mail "Pagamento Confirmado" com login sem senha (a página promete "acesso imediato no e-mail"), e o acesso é revogado sozinho no reembolso.

**Aba Upsell/Downsell (nos 2 produtos):** ligar **"Esse produto vai enviar um e-mail de confirmação"** e **"Enviar imediatamente após o pagamento"**.

## 2. Checkout (um para cada produto)
Caminho: **Produtos > (produto) > aba Checkout > ⋯ no link > Personalizar** (versões desktop e mobile).

| Elemento | PREMIUM | BÁSICO |
|---|---|---|
| Banner (texto exato) | 🎄 **Ceia que Vende PREMIUM** · Você está a 1 passo de saber quanto cobrar pela sua ceia. Acesso imediato no e-mail. | 🎄 **Ceia que Vende** · Você está a 1 passo de ter as 50 receitas de Natal para vender. Acesso imediato no e-mail. |
| Imagem do topo | `estrutura/pagina/img/mockup-oferta.jpg` (capa + 6 bônus) | `estrutura/pagina/img/capa-basico.jpg` (sem selo Premium e sem "3 contas") |
| Selo | Título `Garantia de 7 dias` · subtítulo `Compra segura` | idem |
| Cores | verde `#0F3D2E`, botão vinho `#8C1C24` (se o construtor deixar) | idem |

- **Sem cronômetro, sem depoimento e sem "vagas".** Não há depoimentos reais, e cronômetro falso é risco no Meta e no CDC.
- **Campos:** nome, e-mail (com confirmação), celular e CPF. Celular opcional, se der. **[CONFERIR NO PAINEL]**
- **"Taxa de serviço" para o comprador:** abrir cada checkout em aba anônima e ver se o total é R$ 29,90 / R$ 17,90 ou se aparece taxa somada. Se aparecer, perguntar ao suporte se dá para absorver. Se não der, a página precisa avisar e a Copy ajusta. **[CONFERIR NO PAINEL]**

## 3. Order bumps (cadastrar agora, ativar só com o material pronto)
Caminho: **Produtos > Editar Produto > Configurações Avançadas > Order Bump > Adicionar**. Os 3 bumps vão **nos 2 checkouts** (Premium e Básico).
- Cada bump é **um produto cadastrado**, com preço e entrega própria (Members, 1 módulo cada).
- **"Pré-selecionar automaticamente os order bumps no checkout": DESLIGADO.** Sempre (CDC art. 39).
- Campos do bump: Call to Action, Título, Descrição e "Exibir imagem do produto".

| # | Produto a cadastrar | Preço | Call to Action (caixa) | Descrição (texto exato) |
|---|---|---|---|---|
| 1 | Como Conseguir Seus 10 Primeiros Clientes | **R$ 12,90** | ✅ **SIM, quero meus 10 primeiros clientes** | **Como Conseguir Seus 10 Primeiros Clientes.** Ter receita e preço não adianta se ninguém pedir. É o passo a passo para quem nunca vendeu comida: quem avisar primeiro, onde divulgar e o que postar para fechar os 10 primeiros pedidos ainda nesta semana. |
| 2 | Mensagens que Fecham Pedido | **R$ 7,90** | ✅ **SIM, quero as mensagens prontas** | **Mensagens que Fecham Pedido.** Cliente perguntou "tá caro?" e você travou? É copiar e colar no WhatsApp: abrir as encomendas, cobrar o sinal, responder o "tá caro", confirmar o pedido e avisar a entrega. Você nunca mais fica sem saber o que responder. |
| 3 | Ceias de R$ 400+ | **R$ 14,90** | ✅ **SIM, quero vender ceias de R$ 400+** | **Ceias de R$ 400+.** Os pratos premium e como vender para quem paga mais. Tem cliente pagando até R$ 579,90 numa ceia para 8 a 10 pessoas. Com 1 pedido desses você paga o kit inteiro várias vezes. |

- Ordem no checkout: **2 (R$ 7,90) primeiro**, depois 1 e 3. O mais barato e de decisão mais fácil abre a sequência.
- No Pix, o pedido inteiro (principal + bumps) é pago num único código. No reembolso, a Cakto devolve o pedido inteiro.
- Conteúdo mínimo de cada bump: `estrutura/entregavel/ESPECIFICACAO.md`, seção 4.

## 4. Upsell 1 clique · Ceia de Ano Novo (R$ 19,90)
- **Produto:** `Ceia de Ano Novo: venda de novo no dia 31`, **R$ 19,90**, entrega Members, ligado aos 2 produtos principais.
- **Caminho:** **Funeleiro** (menu lateral) > Novo Funil > página de Upsell e página de Obrigado. Ou: **Produtos > (produto) > Upsell/Downsell**, ativar "página de agradecimento personalizada ou upsell" e colar o link. Para página própria, usar o **Gerador de Upsell** (código HTML da Cakto) e montar com os textos abaixo.
- **1 clique:** automático no cartão. No Pix, o aceite gera um Pix novo na hora (por isso a copy diz "em 1 clique" e não "sem pagar de novo").
- **Textos (exatos, na ordem):**
  1. Faixa verde: ✅ Pedido aprovado! Seu acesso já está a caminho do seu e-mail. Antes de sair, leia isto.
  2. Headline: **Você vai vender a ceia do dia 24. Por que parar aí, se o dia 31 paga de novo?**
  3. Sub: Com a **Ceia de Ano Novo**, você aproveita os mesmos clientes e a mesma cozinha para vender **outra vez no dia 31**.
  4. Preço: **Só nesta página: R$ 19,90** · pagamento único. Botão: **SIM, QUERO VENDER NO ANO NOVO TAMBÉM**
  5. O cliente que gostou da sua ceia de Natal é o primeiro a pedir a de Ano Novo. Você já tem o contato dele e a cozinha pronta. Só falta o cardápio do dia 31.
  6. O que vem: ✔ **Cardápio de Ano Novo para vender** (pratos e kits do dia 31) · ✔ **As 3 contas em cada prato:** quantidade, custo, preço e lucro · ✔ **Calendário do dia 26 ao 31**, com o dia de abrir e de fechar os pedidos · ✔ **Mensagem para oferecer a ceia de Ano Novo** a quem comprou a de Natal
  7. **R$ 19,90** em 1 clique. Botão: **SIM, QUERO VENDER NO DIA 31**
  8. A mesma garantia de 7 dias vale para a Ceia de Ano Novo.
  9. Link discreto: Não, obrigada. Vou vender só no Natal. (→ página de obrigado)
- **"Só nesta página"** só é verdade se a Ceia de Ano Novo não for vendida em outro lugar por R$ 19,90 ou menos. Se for, trocar por "Este preço é desta página".
- **Até o material existir:** deixar a página de obrigado padrão da Cakto, sem upsell.

## 5. Pixel e rastreamento
- **Nos 2 produtos (e nos bumps/upsell, se a Cakto pedir por produto):** **Configurações > Pixel de conversão > Facebook:** ID do pixel + **token da API de Conversões**. Leva de 24 a 48 h para ativar: **configurar hoje**.
- **"Disparar Purchase ao gerar pedido": DESLIGADO.** Conta só o Pix pago.
- Um único emissor de CAPI por pixel (não ligar UTMify e Cakto CAPI juntas mandando Purchase).
- **Aba Links > Adicionar Link:** URL da LP publicada, nos 2 produtos.
- O mesmo ID vai no `CONFIG.pixel` da LP (PageView e ViewContent). InitiateCheckout e Purchase saem da Cakto.

## 6. Recuperação
- **Carrinho abandonado por WhatsApp (nativo):** **Produtos > (produto) > Configurações Avançadas > WhatsApp > Recuperação de carrinho**. Cerca de R$ 0,70 por mensagem, ~20 min depois do abandono. **Ligar nos 2.** Com 1 venda de Premium a cada 39 mensagens, já se paga.
- Pix não pago por e-mail: só por webhook com ferramenta de terceiros. Fica para depois.

## 7. Compra teste (antes de liberar os anúncios)
1. Abrir a LP publicada com `?utm_source=teste&utm_campaign=compra-teste` e clicar no botão **do Premium**.
2. No checkout: preço R$ 29,90 igual à página; bumps (os já ativos) **desmarcados**; banner e selo corretos.
3. Pagar um **Pix real** marcando 1 bump e conferir:
   - chegou o e-mail "Pagamento Confirmado";
   - o upsell de Ano Novo aparece (se ativo), e o "Não, obrigada" leva ao obrigado;
   - o login no Members abre os módulos do Premium e do bump, e os PDFs abrem no celular;
   - o **Purchase** aparece **uma vez** no Test Events do Meta, com o valor do pedido;
   - em **Minhas Vendas > detalhes**, a venda mostra `utm_source=teste`.
4. Repetir no botão do **Básico** com um Pix real de R$ 17,90: cai no checkout certo com as UTMs, e o Members abre **só** as 50 receitas (sem contas e sem bônus). Reembolsar também.
5. Reembolsar: **Minhas Vendas > ⋯ > Reembolsar venda**. Conferir se o acesso foi revogado.

## 8. Garantia e reembolso
- O comprador pode pedir sozinho em **reembolso.cakto.com.br**, em até 7 dias corridos. A página já diz "pelo e-mail de compra ou pela Cakto".
- **Atenção:** se o vendedor não agir em **24 h**, a Cakto reembolsa automaticamente. Em dezembro, olhar os pedidos todo dia.

## 9. CPA de empate (para o Tráfego usar nas travas)
Taxas por venda aprovada: **Pix R$ 2,49** e **cartão 4,99% + R$ 2,49**. A taxa fixa é cobrada uma vez por pedido, então o bump no Pix entra sem desconto. O upsell é um pedido novo e paga a taxa fixa de novo.

| Item | Líquido Pix | Líquido cartão |
|---|---|---|
| Premium R$ 29,90 | **R$ 27,41** | R$ 25,92 |
| Básico R$ 17,90 | **R$ 15,41** | R$ 14,52 |
| Upsell R$ 19,90 | R$ 17,41 | R$ 16,42 |

**Trava do Tráfego no lançamento (sem bumps e sem upsell ativos): R$ 22,61** por venda, com a hipótese de **60% Premium / 40% Básico**, no Pix. Pior caso (só Básico, cartão): **R$ 14,52**.

| Cenário (Pix, 60/40) | Bump 1 R$ 12,90 | Bump 2 R$ 7,90 | Bump 3 R$ 14,90 | Upsell | CPA de empate |
|---|---|---|---|---|---|
| Lançamento (nada ativo) | — | — | — | — | **R$ 22,61** |
| Pessimista | 10% | 5% | 5% | 5% | **R$ 25,91** |
| Esperado | 20% | 10% | 8% | 10% | **R$ 28,91** |
| Otimista | 30% | 15% | 12% | 15% | **R$ 32,06** |

- O mix Premium/Básico e os aceites são hipótese; o número real vem das primeiras 20 a 30 vendas. Se o Básico passar de 50% das vendas, a trava cai.
- **Fora da conta:** impostos (dependem do regime do dono), tarifa de saque (R$ 4,59), recuperação por WhatsApp e a reserva de segurança (10% do Pix por 35 dias, que atrasa o caixa mas não é custo).

## 10. Checklist do dono
- [ ] Produto Premium (R$ 29,90) e Básico (R$ 17,90) criados, parcelamento desligado, Members.
- [ ] Banner, imagem e selo nos 2 checkouts; taxa de serviço conferida.
- [ ] 3 bumps cadastrados nos 2 checkouts, **desmarcados**, ativos só com material.
- [ ] Upsell Ano Novo no Funeleiro, ativo só com material.
- [ ] Pixel + CAPI nos 2 produtos, "Purchase ao gerar pedido" desligado.
- [ ] Links de checkout e ID do pixel no `CONFIG` da LP (o ChatGPT troca para você).
- [ ] Compra teste feita e reembolsada.
