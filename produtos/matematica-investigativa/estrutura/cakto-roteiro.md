# Roteiro de configuração na Cakto — Matemática em Missão

> Para o dono (ou quem ele delegar) executar no painel. Nós não temos acesso à Cakto.
> Fonte de cada passo: central de ajuda oficial, conferida em 2026-10-28. Links no fim.
> Marcado **[CONFERIR NO PAINEL]**: a central não detalha, então é preciso olhar na tela.

## 0. Ordem e trava de compliance
1. Cadastrar o **produto principal** agora. O link do checkout vai para a página (`CONFIG.checkout` no `index.html`).
2. Os **order bumps entram só quando o material deles existir** (CDC arts. 30 e 35, dossiê §7). Hoje nem "Missões Relâmpago" nem "Revisão de Fim de Ano 5º ano" foram produzidos. Cadastrar os bumps sem material = vender o que não existe.
3. **Upsell e downsell** ficam para depois, quando estiverem produzidos.
4. Os anúncios só rodam depois do **lote 1 pronto** e da **compra teste** (passo 7) aprovada.

## 1. Produto principal
Caminho: **Produtos > Adicionar Produto** (3 etapas).

**Etapa 1 — Informações**
- **Imagem:** `estrutura/cakto/produto-600x500.jpg`. A Cakto recomenda 300×250; a imagem está no dobro do tamanho, com a mesma proporção.
- **Nome** (aparece no checkout e na fatura): `Matemática em Missão — 3º ao 5º ano`
- **Descrição** (mínimo de 100 caracteres):
  > 30 missões de mistério em PDF para imprimir em preto e branco, 10 para cada série (3º, 4º e 5º ano), em 3 níveis de dificuldade, com gabarito comentado, roteiro de aplicação de 2 minutos e o bônus Kit de Ambientação.
- **Moeda:** Real (BRL).

**Etapa 2 — Modelo de pagamento**
- **Pagamento único:** R$ 17,90. Precisa ser igual à página.
- **Métodos:** Pix e cartão. O boleto foi desativado na Cakto.
- **Parcelamento:** desligado ou só à vista. A R$ 17,90, parcela só gera confusão.
- **Taxa adicional de parcelamento:** deixar em branco.

**Etapa 3 — Configurações**
- **Confirmação de e-mail:** **ligada**. Com ela, a professora não erra o e-mail e não fica sem receber o acesso.
- **Página de vendas:** a URL publicada da landing.
- **E-mail de suporte:** o mesmo `[E-MAIL]` da página.
- **Canal de entrega:** **Cakto Members**, recomendado. Alternativa: "Acesso por e-mail" com o link do PDF.
  - Por que Members: o lote 2 (missões 31 a 60) entra como atualização e aparece sozinho para quem já comprou. Dá para separar em módulos por série. O acesso é revogado automaticamente no reembolso.
  - Montagem: **Produtos > (produto) > aba Área de Membros > + Adicionar Módulo**. Criar 5 módulos: `Comece aqui` (como aplicar + índice por série e habilidade), `3º ano`, `4º ano`, `5º ano` e `Bônus — Kit de Ambientação`. Cada missão entra como conteúdo, com o PDF em "materiais complementares".
  - A página diz "você recebe o acesso no e-mail": vale para as duas opções. O Members manda o e-mail "Pagamento Confirmado" com o link de entrada (login sem senha).

**Aba Upsell/Downsell** (mesmo com o upsell ainda desligado)
- Ligar **"Esse produto vai enviar um e-mail de confirmação"** e **"Enviar imediatamente após o pagamento"**. É o que a Cakto indica para o caso "comprador não recebeu o acesso".
- Página de obrigado: deixar a padrão da Cakto por enquanto.

## 2. Checkout
Caminho: **Produtos > (produto) > aba Checkout > ⋯ no link > Personalizar** (versões desktop e mobile).
- **Topo:** imagem `estrutura/cakto/topo-checkout-1200x500.jpg` (as 3 missões) e o nome do produto.
- **Selo** (bloco "selo"): título `Garantia de 7 dias`, subtítulo `Peça o reembolso em até 7 dias, por qualquer motivo.`
- **Sem cronômetro e sem depoimentos.** Não há depoimentos reais ainda, e cronômetro falso é risco no Meta e no CDC.
- **Campos:** nome, e-mail (com confirmação), celular e CPF são os padrões. Se der para deixar o celular opcional, deixar. **[CONFERIR NO PAINEL]**
- **Responsável e links jurídicos:** o checkout não tem bloco de rodapé. O rodapé padrão já diz "Ao prosseguir, você concorda com os Termos de uso do produtor". Se o construtor permitir, pôr um bloco de texto curto no fim: `Matemática em Missão · [RESPONSÁVEL] · [E-MAIL]`. **[CONFERIR NO PAINEL]**
- **"Taxa de serviço" para o comprador:** a demonstração da Cakto mostra "Taxa de serviço R$ 0,99" somada ao preço. No Decodifica, essa taxa aparecia só no checkout (achado da análise de 2026-10-19). Abrir o checkout em modo anônimo e ver se o total é R$ 17,90 ou R$ 18,89. Se aparecer taxa, perguntar ao suporte se dá para absorver. Se não der, a página precisa avisar ("+ taxa de serviço") e a Copy ajusta. **[CONFERIR NO PAINEL]**

## 3. Order bumps (só depois de produzidos)
Caminho: **Produtos > Editar Produto > Configurações Avançadas > Order Bump > Adicionar** (até 5 por produto).
- Cada bump precisa ser **um produto cadastrado**, com oferta de preço, e entrega própria.
- **"Pré-selecionar automaticamente os order bumps no checkout": DESLIGADO.** Sempre (CDC art. 39).

| Bump | Produto a cadastrar | Preço | Texto da chamada (proposta, a Copy aprova) |
|---|---|---|---|
| 1 | Missões Relâmpago — 30 desafios de 10 minutos | R$ 9,90 | Sim, quero 30 Missões Relâmpago de 10 minutos para começar ou fechar a aula, por R$ 9,90 |
| 2 | Revisão de Fim de Ano em Missões — 5º ano | R$ 14,90 | Sim, quero as missões de revisão do 5º ano, com o descritor de cada questão, por R$ 14,90 |

- No Pix, o pedido inteiro (principal + bumps) é pago num único código.
- No reembolso, a Cakto devolve o pedido inteiro. Não dá para devolver só um item.
- A imagem e a descrição do bump vêm do produto cadastrado. Confirmar se aceitam texto próprio. **[CONFERIR NO PAINEL]**

## 4. Upsell e downsell (fase 2)
- **Upsell:** "Língua Portuguesa em Missão — 3º ao 5º", R$ 27. Só quando estiver produzido.
- Caminho: **Funeleiro** (menu lateral) > Novo Funil > páginas de Upsell, Downsell e Obrigado. Ou: **Produtos > (produto) > Upsell/Downsell**, ativar "página de agradecimento personalizada ou upsell" e colar o link. Para página própria, usar o **Gerador de Upsell** (código HTML da Cakto).
- **1 clique:** automático no cartão. No Pix, o aceite gera um novo QR code.
- **Downsell "Só a minha série"** (10 missões, R$ 10): entra como downsell de quem recusa o upsell, ou como cupom na recuperação de carrinho.

## 5. Pixel e rastreamento
Conforme `.claude/skills/diretor-trafego/especialistas/rastreamento.md`, seção 2.
- **Produtos > (produto) > Configurações > Pixel de conversão > Facebook:** ID do pixel + **token da API de Conversões** (engrenagem). Leva de 24 a 48 h para ativar.
- **"Disparar Purchase ao gerar pedido": DESLIGADO.** Conta só o Pix pago.
- Um único emissor de CAPI por pixel: não ligar UTMify e Cakto CAPI juntas mandando Purchase.
- **Aba Links > Adicionar Link:** URL da landing publicada.
- O mesmo ID do pixel vai no `CONFIG.pixel` do `index.html` (PageView e ViewContent). O InitiateCheckout e o Purchase saem da Cakto.

## 6. Recuperação
- **Carrinho abandonado por WhatsApp (nativo):** **Produtos > (produto) > Configurações Avançadas > WhatsApp > Recuperação de carrinho**.
  - Custa cerca de R$ 0,70 por mensagem entregue.
  - Sai 1 mensagem cerca de 20 minutos depois do abandono.
  - A liberação está sendo feita aos poucos: ver se já está ativo na conta.
  - Recomendação: ligar. Com ticket de R$ 17,90, basta 1 venda recuperada a cada 22 mensagens para pagar o custo.
- **Pix não pago e e-mail:** não há recurso nativo. Só por webhook (`checkout_abandonment`) com ferramenta de terceiros. Fica para depois dos primeiros dados.

## 7. Compra teste (antes de liberar os anúncios)
1. Abrir a **página publicada** com `?utm_source=teste&utm_campaign=compra-teste` e clicar no botão.
2. No checkout:
   - preço R$ 17,90, igual à página (com ou sem taxa de serviço, conforme o passo 2);
   - bumps (quando existirem) aparecem desmarcados.
3. Pagar um Pix (ou usar cupom de 100%, que a Cakto recomenda para teste) e conferir:
   - chegou o e-mail "Pagamento Confirmado" com o acesso;
   - o login no Members funciona e os PDFs abrem e baixam;
   - o **Purchase** aparece **uma vez** no Test Events do Meta;
   - em **Minhas Vendas > detalhes**, a venda mostra `utm_source=teste`.
4. Reembolsar: **Minhas Vendas > ⋯ > Reembolsar venda**. Conferir se o acesso foi revogado.

## 8. Garantia e reembolso
- O comprador pode pedir sozinho em **reembolso.cakto.com.br**, em até 7 dias corridos.
- **Atenção:** se o vendedor não agir em **24 h**, a Cakto reembolsa automaticamente e desconta do saldo. Acompanhar os pedidos todo dia.
- A página e os termos dizem "escreva para [E-MAIL]". Pedido para a Copy: acrescentar "ou pela própria Cakto, no link do e-mail de compra".

## 9. CPA de empate (para o Tráfego usar nas travas)
Taxas oficiais por venda aprovada (artigo de 27/10/2026): **Pix 0% + R$ 2,49** e **cartão 4,99% + R$ 2,49**. A taxa fixa é cobrada uma vez por pedido, então o bump no Pix entra sem desconto.

Líquido do principal: Pix **R$ 15,41** · cartão **R$ 14,52**. Base: Pix, a maioria em low ticket.

| Cenário | Aceite bump 1 (R$ 9,90) | Aceite bump 2 (R$ 14,90) | Líquido por venda = CPA de empate |
|---|---|---|---|
| Sem bumps (lançamento) | — | — | **R$ 15,41** |
| Pessimista | 10% | 5% | **R$ 17,15** |
| Esperado | 20% | 10% | **R$ 18,88** |
| Otimista | 30% | 15% | **R$ 20,62** |

- Os percentuais de aceite são hipótese. O bump 2 vale só para quem tem 5º ano, por isso a taxa é menor. O número real vem das primeiras vendas.
- **Fora da conta:** impostos (dependem do regime do dono), tarifa de saque (R$ 4,59 por saque), custo da recuperação por WhatsApp e a reserva de segurança (10% do Pix por 35 dias, que atrasa o caixa mas não é custo).
- Se a "taxa de serviço" do passo 2 for cobrada do comprador, ela não entra no líquido do produtor, mas pode baixar a conversão.

## Fontes (central de ajuda da Cakto)
- Criar produto e entrega: https://ajuda.cakto.com.br/pt-br/articles/119-como-criar-um-produto-na-cakto · https://ajuda.cakto.com.br/pt-br/articles/86-como-cadastrar-o-meu-produto-na-cakto
- Conteúdo no Members: https://ajuda.cakto.com.br/pt-br/articles/42-como-adicionar-conteudos-na-cakto
- E-mail de acesso: https://ajuda.cakto.com.br/pt-br/articles/144-comprador-nao-recebeu-o-e-mail-de-acesso
- Order bump: https://ajuda.cakto.com.br/pt-br/articles/121-como-funcionam-os-order-bumps-na-cakto
- Upsell e funis: https://ajuda.cakto.com.br/pt-br/articles/123-como-configurar-upsell-e-diferentes-funis-na-cakto · 1 clique: https://ajuda.cakto.com.br/pt-br/articles/100-como-funcionam-as-vendas-de-1-clique-na-cakto
- Taxas: https://ajuda.cakto.com.br/pt-br/articles/72-quais-sao-as-taxas-da-plataforma-cakto · Prazos: https://ajuda.cakto.com.br/pt-br/articles/8-quanto-tempo-leva-para-liberar-as-vendas-na-cakto
- Boleto desativado: https://ajuda.cakto.com.br/pt-br/articles/21-como-alterar-a-validade-do-boleto
- Recuperação por WhatsApp: https://ajuda.cakto.com.br/pt-br/articles/154-como-funciona-a-recuperacao-de-carrinho-por-whatsapp
- Reembolso: https://ajuda.cakto.com.br/pt-br/articles/116-como-pedir-reembolso-de-uma-compra · https://ajuda.cakto.com.br/pt-br/articles/36-como-reembolsar-um-cliente-na-cakto · https://ajuda.cakto.com.br/pt-br/articles/99-em-quais-situacoes-a-cakto-pode-reembolsar-uma-venda
- Personalizar checkout: https://ajuda.cakto.com.br/pt-br/articles/75-como-realizar-a-personalizacao-do-checkout
- Página de obrigado: https://ajuda.cakto.com.br/pt-br/articles/114-como-configurar-a-pagina-de-obrigado · Aba Links: https://ajuda.cakto.com.br/pt-br/articles/46-como-adicionar-sua-pagina-de-vendas
- Pixel: https://ajuda.cakto.com.br/pt-br/articles/56-como-configurar-o-pixel-do-facebook-na-cakto
