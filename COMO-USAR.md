# Como usar a operação

## Comandos do dia a dia
| Você quer… | Digite |
|---|---|
| Pesquisar um nicho / achar produto / montar dossiê | `/diretor-mineracao <produto ou nicho>` |
| Comparar ofertas e escolher o que modelar | `/diretor-mineracao avaliar e modelar as ofertas 8, 11 e 12 de 26/10` |
| Promessa, copy da página de vendas, roteiro de VSL | `/diretor-copy-oferta <produto>` (sessão Copy) |
| Criar roteiros de criativos | `/diretor-copy-criativos <produto>, <quantidade/formato>` |
| Criar o produto (PDF), montar a página, configurar a Cakto | `/diretor-estrutura <produto>` (sessão Estrutura) |
| Editar um vídeo no Descript | `/diretor-edicao <produto>, <vídeo>, <roteiro>` |
| Analisar uma LP/oferta que não dá lucro | `/diretor-analise <url da LP>` + números do Gerenciador e da Cakto |
| Subir/ler/otimizar campanhas no Meta, anúncio reprovado, pixel | `/diretor-trafego <produto>` + números do Gerenciador |
| Gravar uma regra manualmente | `/registrar-regra <a regra>` |

Você também pode só falar normalmente ("faz 5 criativos pro produto X") — o diretor certo é acionado.

## Fluxo de um produto
1. **Mineração** `/diretor-mineracao` → `dossie.md` + `QUADRO.md` do produto
2. Você valida o dossiê (itens [VALIDAR]) e decide nome/preço/quantidade
3. **Copy** `/diretor-copy-oferta` → `copy/PROMESSA.md` + `copy/pagina-vendas.md` (+ VSL)
4. **Estrutura** `/diretor-estrutura` → mockups, página montada, roteiro da Cakto
5. **Copy** `/diretor-copy-criativos` → roteiros de anúncio na mesma promessa
6. **Edição** `/diretor-edicao` → vídeos no Descript
7. **Tráfego** `/diretor-trafego` → anúncios agendados (ex.: meia-noite)
8. **Estrutura** `/diretor-estrutura` → entregável completo, pronto e testado antes do horário de início

## Como os diretores sabem do que estamos falando
- `PRODUTOS-ATIVOS.md`: qual produto está em foco. Se você não disser o produto, o diretor usa esse.
- `produtos/<produto>/QUADRO.md`: fase, suas decisões, o que cada área entregou e os pedidos de uma área para outra. Todo diretor lê antes e atualiza depois.
- Você pode chegar em qualquer sessão e dizer só "continua" ou "monta a estrutura": o quadro diz o resto.

## Memória
- Corrigiu algo? Só diga. A correção vira regra em `regras/` e aparece a confirmação.
- Quer ver o que o time já aprendeu? Abra a pasta `regras/`.
- Uma regra ficou errada? Peça: "apague/mude a regra X".

## Sessões (uma por área)
Central · Mineração · Copy (oferta + criativos) · Estrutura (produto, página, Cakto) · Edição · Tráfego · Análise.

## Áreas ainda a montar (mesmo padrão)
Compliance dedicado.

## Ferramentas de mineração (sessão nova)
A dependência das ferramentas é instalada automaticamente no início de cada sessão (hook em `.claude/settings.json`). Se precisar instalar na mão:
`cd ferramentas && PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install`

Ferramentas da Estrutura: `node ferramentas/gerar-pdf.js <arquivo.html> <saida.pdf>` (PDF A4) ou `... <pasta> --png` (páginas em PNG para mockup); `node ferramentas/auditar-pagina.js <url ou index.html>` (confere a página antes de publicar).
