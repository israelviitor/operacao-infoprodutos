# Publicar a página — Matemática em Missão

A página é **estática**: `index.html` + `termos.html` + `privacidade.html` + a pasta `img/`. Não tem build, framework nem dependências. Publicar é copiar esses arquivos para a hospedagem.

## Antes de publicar (obrigatório)
1. No fim do `index.html`, preencher o `CONFIG`:
   - `checkout`: link do checkout da Cakto do produto principal;
   - `pixel`: ID do Pixel do Meta (só números).
2. Trocar os campos entre colchetes em `index.html`, `termos.html` e `privacidade.html`:
   - `[E-MAIL]` (suporte e reembolso);
   - `[RESPONSÁVEL e CNPJ/CPF]` (no rodapé) e `[RESPONSÁVEL]` e `[CNPJ/CPF]` (termos e privacidade);
   - `[DATA]` (data de hoje, nos termos e na privacidade).
   Conferência: `grep -n "\[E-MAIL\]\|\[RESPONS\|\[CNPJ\|\[DATA\]" produtos/matematica-investigativa/estrutura/pagina/*.html` não pode achar nada.
3. Lista "Confirmar antes de montar" de `copy/pagina-vendas.md` toda marcada.

## Caminho A — publicar daqui (recomendado)
Precisa de um token da Vercel no ambiente desta sessão, na variável `VERCEL_TOKEN`. O dono adiciona o token nas configurações do ambiente, nunca colando no chat. Depois:
```
cd produtos/matematica-investigativa/estrutura/pagina
npx vercel deploy --prod --yes --token "$VERCEL_TOKEN" --name matematica-em-missao
```
Em seguida, ligar o domínio na Vercel (Project > Settings > Domains). Se o domínio já está na conta da Vercel usada pelo v0, basta adicionar o subdomínio, por exemplo `missao.seudominio.com.br`.

## Caminho B — ponte pelo ChatGPT/v0 (uma vez)
Mande os 4 itens (`index.html`, `termos.html`, `privacidade.html` e a pasta `img/`) com esta instrução:

> Publique estes arquivos **exatamente como estão**, como site estático. Não converta para React/Next.js, não reescreva textos, não troque cores, não remova o `<script>` do fim do index.html (ele repassa as UTMs para o checkout e carrega o Pixel). Mantenha os caminhos relativos `img/...`, `termos.html` e `privacidade.html`.

Depois de publicar, rodar a conferência abaixo na URL publicada. Se algo mudou, a página volta a ser publicada a partir destes arquivos.

## Conferência depois de publicar
1. `node ferramentas/auditar-pagina.js "<URL>?utm_source=teste&utm_campaign=x" produtos/matematica-investigativa/estrutura/pagina/auditoria-publicada`
   - o botão leva ao checkout da Cakto com `utm_source=teste&utm_campaign=x`;
   - o preço é R$ 17,90 na página e no checkout;
   - a página carrega em menos de 3 s e pesa menos de 1,5 MB.
2. Cadastrar a URL final na aba **Links** do produto na Cakto.
3. Pixel: abrir a página com o Meta Pixel Helper (ou Test Events) e ver PageView. ViewContent dispara ao rolar até a oferta.
