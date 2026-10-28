# Publicar a página pelo ChatGPT + v0 — Matemática em Missão

## O que você (dono) faz
1. Baixe o pacote `pagina-matematica-em-missao.zip`. Ele traz `index.html`, `termos.html`, `privacidade.html` e a pasta `img/` com 5 imagens.
2. Tenha em mãos os 5 dados que faltam (o GPT vai pedir):
   - link do checkout da Cakto do produto (R$ 17,90);
   - ID do Pixel do Meta;
   - nome do responsável + CNPJ ou CPF;
   - e-mail de suporte;
   - subdomínio onde a página vai ficar (ex.: `missao.seudominio.com.br`).
   Se ainda não tiver o checkout ou o pixel, dá para publicar assim mesmo e preencher depois. Sem esses dois, os botões só rolam até a oferta e o pixel fica desligado.
3. Abra uma conversa nova no ChatGPT, anexe o `.zip` e cole a mensagem abaixo, inteira.
4. Quando ele terminar, mande o link publicado para a sessão de Estrutura. Ela faz a auditoria (botões, UTMs, preço, velocidade) antes de seguir.

---

## Mensagem para colar no ChatGPT

> Preciso publicar uma landing page **pronta** usando o v0/Vercel que você já tem conectado ao meu domínio. Anexei um `.zip` com `index.html`, `termos.html`, `privacidade.html` e a pasta `img/`.
>
> **Regras (importantes):**
> 1. **Não reescreva, não redesenhe e não converta a página para componentes React.** O texto foi aprovado palavra por palavra e o layout já está pronto para celular. Publique os arquivos como estão.
> 2. **Não remova o `<script>` do fim do `index.html`.** Ele passa as UTMs (`utm_*`, `src`, `sck`, `fbclid`) para o link do checkout e carrega o Pixel do Meta.
> 3. Mantenha os caminhos relativos: `img/kit.webp`, `termos.html`, `privacidade.html`.
>
> **Como montar no v0 (projeto Next.js):**
> 1. Crie um projeto novo chamado `matematica-em-missao`.
> 2. Coloque os arquivos dentro de `public/`, mantendo a estrutura:
>    - `public/index.html`
>    - `public/termos.html`
>    - `public/privacidade.html`
>    - `public/img/` (as 5 imagens `.webp`)
> 3. Apague a página padrão (`app/page.tsx`) para ela não competir com a raiz. Crie ou ajuste o `next.config` para a raiz servir o HTML estático:
> ```js
> /** @type {import('next').NextConfig} */
> const nextConfig = {
>   async rewrites() {
>     return [{ source: '/', destination: '/index.html' }];
>   },
> };
> module.exports = nextConfig;
> ```
> 4. Antes de publicar, me peça e substitua **só** estes trechos:
>    - no fim do `index.html`, dentro de `var CONFIG = {...}`:
>      - `checkout: ''` → o link do checkout da Cakto que eu passar, entre aspas;
>      - `pixel: ''` → o ID do pixel, entre aspas, só números;
>    - em `index.html`, `termos.html` e `privacidade.html`:
>      - `[E-MAIL]` → meu e-mail de suporte;
>      - `[RESPONSÁVEL e CNPJ/CPF]` → nome + CNPJ/CPF;
>      - `[RESPONSÁVEL]` → nome;
>      - `[CNPJ/CPF]` → número;
>      - `[DATA]` → data de hoje.
>    - Se eu ainda não tiver o checkout ou o pixel, deixe as aspas vazias.
> 5. Faça o deploy de produção e ligue o subdomínio que eu indicar.
>
> **Conferência (me mostre o resultado de cada item):**
> - `/` abre a página com o título "Seu aluno sabe fazer a conta, mas trava quando o problema não diz qual é?" e as imagens carregam.
> - `/termos.html` e `/privacidade.html` abrem, e não sobrou nenhum dos campos do passo 4 (`[E-MAIL]`, `[RESPONSÁVEL…]`, `[CNPJ/CPF]`, `[DATA]`) nos 3 arquivos. Atenção: `es[0]` e `details[open]` são código e ficam como estão.
> - Abrindo `/?utm_source=teste&utm_campaign=x`, o link dos botões verdes é o checkout da Cakto com `utm_source=teste&utm_campaign=x` no fim (se o checkout já estiver preenchido).
> - O texto da página é idêntico ao do `index.html` enviado: nenhuma frase mudou.
>
> No fim, me passe a URL publicada.

---

## Se o v0 insistir em converter para React
Peça: "Não converta. Use exatamente o HTML estático dentro de `public/` com o rewrite do `/` para `/index.html`." Se ainda assim ele mudar a página, pare e avise a sessão de Estrutura. O plano B é publicar os mesmos arquivos direto na Vercel (arrastar a pasta em vercel.com/new), sem o v0.
