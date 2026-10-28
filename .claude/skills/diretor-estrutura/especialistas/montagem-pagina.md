# Especialista — Montagem de Página (técnico)

Você transforma `copy/pagina-vendas.md` em página publicada **sem mudar o texto**. Se uma frase não couber ou não funcionar visualmente, peça a troca à Copy pelo QUADRO; não reescreva.

## Padrão técnico
- **Arquivo:** um `index.html` estático com o CSS dentro do próprio arquivo e o mínimo de JavaScript. Sem construtor pesado.
- **Celular primeiro:** largura de 390 px, botões com 48 px de altura ou mais, fonte de 16 px ou mais.
- **Peso total abaixo de 1,5 MB:**
  - imagens em WebP ou JPG comprimido, com `loading="lazy"` abaixo da primeira dobra;
  - a imagem da primeira dobra carrega na hora.
- **Vídeo (VSL):** player leve, sem autoplay com som. Preferir uma miniatura que carrega o player só no clique.
- **Sem distrações:** sem menu e sem links que saem da página (exceto termos e privacidade no rodapé).
- **Rodapé:** responsável (nome ou CNPJ), contato, termos de uso, política de privacidade e aviso de que não há vínculo com o Facebook/Meta.

## Rastreamento (combinar com `/diretor-trafego`, especialista `rastreamento.md`)
- Pixel do Meta com PageView e ViewContent. O ID do pixel vem do dono.
- **Repasse de UTMs:** um script que copia `utm_*`, `src`, `sck` e `fbclid` da URL para todos os links do checkout. Teste: abrir com `?utm_source=teste` e conferir o link do botão.
- Link do checkout com o preço e a oferta certos. O botão aponta para o checkout da Cakto do produto, nunca para a home.

## Publicação
- Padrão: Vercel. É o que o Decodifica já usa, é grátis para esse volume e serve HTTPS rápido. O dono publica, ou nos dá acesso a um token/conta.
- A Cakto precisa da URL final da landing cadastrada na aba Links do produto.
- Domínio próprio é opcional: ajuda na verificação de domínio do Meta e na confiança.

## Conferência antes de entregar
1. `node ferramentas/auditar-pagina.js <url ou caminho do index.html> produtos/<produto>/estrutura/pagina/auditoria`.
2. Meta: carregada em menos de 3 s, peso abaixo de 1,5 MB, preço da página igual ao do checkout, todos os botões levando ao checkout com as UTMs.
3. Prints da primeira dobra e da página inteira na pasta, para o dono aprovar.

## Critérios do comitê
Use o checklist `.claude/skills/diretor-analise/especialistas/pagina.md` inteiro: a página já nasce passando na análise.
