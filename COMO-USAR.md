# Como usar a operação

## Comandos do dia a dia
| Você quer… | Digite |
|---|---|
| Pesquisar um nicho / achar produto / montar dossiê | `/diretor-mineracao <produto ou nicho>` |
| Criar roteiros de criativos | `/diretor-copy-criativos <produto>, <quantidade/formato>` |
| Editar um vídeo no Descript | `/diretor-edicao <produto>, <vídeo>, <roteiro>` |
| Analisar uma LP/oferta que não dá lucro | `/diretor-analise <url da LP>` + números do Gerenciador e da Cakto |
| Subir/ler/otimizar campanhas no Meta, anúncio reprovado, pixel | `/diretor-trafego <produto>` + números do Gerenciador |
| Gravar uma regra manualmente | `/registrar-regra <a regra>` |

Você também pode só falar normalmente ("faz 5 criativos pro produto X") — o diretor certo é acionado.

## Fluxo de um produto
1. `/diretor-mineracao` → cria `produtos/<produto>/dossie.md`
2. Você valida o dossiê (itens [VALIDAR])
3. `/diretor-copy-criativos` → roteiros em `produtos/<produto>/criativos/`
4. Você aprova, grava os vídeos
5. `/diretor-edicao` → vídeos editados no Descript + links

## Memória
- Corrigiu algo? Só diga. A correção vira regra em `regras/` e aparece a confirmação.
- Quer ver o que o time já aprendeu? Abra a pasta `regras/`.
- Uma regra ficou errada? Peça: "apague/mude a regra X".

## Áreas ainda a montar (mesmo padrão)
Copy de VSL · Páginas · Entregáveis · Estruturação na Cakto · Compliance dedicado.

## Ferramentas de mineração (sessão nova)
A dependência das ferramentas é instalada automaticamente no início de cada sessão (hook em `.claude/settings.json`). Se precisar instalar na mão:
`cd ferramentas && PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install`
