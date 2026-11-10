# Publicar a página pelo ChatGPT + v0 · Math Missions (pais) · versão em PT

> Regra de 2026-11-09 (`regras/paginas.md`): quem monta e publica é o ChatGPT, na sua conta. Esta é a versão **em português**, para você ver no ar antes da tradução (decisão de 10/11). A tradução depois troca só os textos, pela chave de cada um (`TEXTOS-PT.md`).

## O que você faz
1. Baixe `pacote-chatgpt-math-missions-pt.zip`. Ele traz `index.html`, `termos.html`, `privacidade.html` e a pasta `img/` (11 imagens).
2. Tenha em mãos os dados que o GPT vai pedir:
   - **link do checkout em dólar (US$ 17)**;
   - **ID do Pixel do Meta**;
   - nome da empresa ou do responsável, endereço da empresa e e-mail de suporte;
   - subdomínio onde a página vai ficar.

   Sem o checkout ou o pixel, dá para publicar assim mesmo e preencher depois. Nesse caso o botão de compra só leva à própria oferta e o pixel fica desligado.
3. Abra uma conversa nova no ChatGPT, anexe o `.zip` e cole a mensagem abaixo, inteira.
4. Quando ele terminar, mande o link para a sessão de Estrutura, que faz a auditoria (botão, UTMs, preço, velocidade).

---

## Mensagem para colar no ChatGPT

> Preciso publicar uma landing page **pronta** usando o v0/Vercel que você já tem conectado à minha conta. Anexei um `.zip` com `index.html`, `termos.html`, `privacidade.html` e a pasta `img/`. Esta é a versão em português. Depois vou te mandar a versão em inglês, que troca só os textos.
>
> **Regras (importantes):**
> 1. **Não reescreva, não redesenhe e não converta a página para componentes React.** O texto foi aprovado palavra por palavra e o layout já está pronto para celular. Publique os arquivos como estão.
> 2. **Não remova nem altere os atributos `data-bloco` e `data-t`** dos elementos. Eles são as chaves dos textos: na tradução, eu te mando cada chave com o texto novo e você troca só o conteúdo daquele elemento.
> 3. **Não remova o `<script>` do fim do `index.html`.** Ele passa as UTMs (`utm_*`, `src`, `sck`, `fbclid`) para o link do checkout e carrega o Pixel do Meta (PageView, ViewContent e InitiateCheckout).
> 4. **Só o botão vermelho da oferta ("Quero o método e as missões", classe `checkout`) vai para o checkout.** Os outros botões continuam levando a `#prova` e `#oferta`, dentro da própria página. Não mude isso.
> 5. Mantenha os caminhos relativos (`img/...`, `termos.html`, `privacidade.html`).
>
> **Como montar no v0 (projeto Next.js):**
> 1. Crie um projeto novo chamado `math-missions`.
> 2. Coloque os arquivos dentro de `public/`, mantendo a estrutura:
>    - `public/index.html`
>    - `public/termos.html`
>    - `public/privacidade.html`
>    - `public/img/` (as 11 imagens `.jpg`)
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
>      - `checkout: ''` → o link do checkout em dólar que eu passar, entre as aspas;
>      - `pixel: ''` → o ID do pixel, entre as aspas, só números;
>    - em `index.html`, `termos.html` e `privacidade.html`:
>      - `[EMPRESA/RESPONSÁVEL]` → nome da empresa ou do responsável;
>      - `[ENDEREÇO DA EMPRESA]` → endereço;
>      - `[E-MAIL]` → e-mail de suporte;
>      - `[DATA]` → data de hoje.
>    - Se eu ainda não tiver o checkout ou o pixel, deixe as aspas vazias.
> 5. Faça o deploy de produção e ligue o subdomínio que eu indicar.
>
> **Conferência (me mostre o resultado de cada item):**
> - `/` abre a página com o título "O método do país nº 1 em matemática para seu filho parar de chutar a conta." e todas as imagens carregam, inclusive as do carrossel "Veja o desenho que muda tudo".
> - No celular, a primeira dobra (até o botão "Veja como funciona") aparece inteira, sem rolar.
> - `/termos.html` e `/privacidade.html` abrem, e não sobrou nenhum `[EMPRESA/RESPONSÁVEL]`, `[ENDEREÇO DA EMPRESA]`, `[E-MAIL]` ou `[DATA]` nos 3 arquivos. Atenção: `es[0]`, `details[open]` e `[data-theme]` são código e ficam como estão.
> - Abrindo `/?utm_source=teste&utm_campaign=x`, o link do botão vermelho é o checkout com `utm_source=teste&utm_campaign=x` no fim (se o checkout já estiver preenchido).
> - O preço na página é **US$ 17**, igual ao do checkout.
> - O texto da página é idêntico ao do `index.html` enviado: nenhuma frase mudou, e os atributos `data-t` continuam lá.
>
> No fim, me passe a URL publicada.

---

## Se o v0 insistir em converter para React
Peça: "Não converta. Use exatamente o HTML estático dentro de `public/` com o rewrite do `/` para `/index.html`." Se mesmo assim ele mudar a página, pare e avise a sessão de Estrutura. O plano B é publicar os mesmos arquivos direto na Vercel (arrastar a pasta em vercel.com/new), sem o v0.

## Depois: a troca para o inglês
A Tradução entrega `TEXTOS-EN.md` (as mesmas chaves de `TEXTOS-PT.md`), o comando para o ChatGPT trocar os textos e as imagens com texto em inglês. O layout não muda.
