# Radar de Ofertas — rodada diária (Mineração)

Planilha: "Radar de Ofertas" no Google Drive do dono
https://docs.google.com/spreadsheets/d/1CuEgnwOo1ED8R4flVIm-fGKf2uMtBujkpaNTm7UmVrs/edit
- Aba **PALAVRAS-CHAVE**: A = termo · B = bloco · C = ativa (sim/não) · D = última busca (o Radar preenche).
- Aba **OFERTAS** (linha 1 = cabeçalho): Data · Lista · Palavra-chave · Anunciante · Domínio · Anúncios ativos · Dias no ar · Nicho · Preço · Plataforma do checkout · Order bump / pós-compra · Página na Biblioteca · Link do anúncio · Landing · Checkout · Ângulo · Nota · Justificativa · Veredito · Status.

Sem o conector Google Sheets na sessão: termos de `ferramentas/termos-radar.txt` (girar 12 por dia pela data) e ofertas gravadas em `produtos/_mineracao/radar/AAAA-MM-DD/OFERTAS.md`.

Regras que valem: `regras/geral.md` e `regras/mineracao.md` (critérios 2026-11-24, nota 0–10, duas listas, nunca comprar para reembolsar). Brasil (PAIS=BR) salvo outro país escrito no termo.

## Passo a passo
1. `git pull origin main`. Pasta do dia: `produtos/_mineracao/radar/AAAA-MM-DD/`.
2. Ler as duas abas (Sheets `get_values`). Escolher **12 termos** ativos, começando pelos com coluna D vazia ou mais antiga.
3. Coletar: termos de **âncora de preço** com frase exata (`EXATA=1 ./ferramentas/minerar-lote-rapido.sh BR <termos.txt> <pasta>/bruto 40 2400`), os demais sem `EXATA`. Rodar em lotes de até ~9 min em primeiro plano (o contêiner pode reiniciar; o script retoma de onde parou). Busca vazia = limite da Biblioteca; não insistir mais que 1 vez.
4. `python3 ferramentas/agrupar-ofertas.py <pasta>/bruto <pasta>/grupo.json`. Descartar loja física, restaurante, serviço local, e-commerce de produto físico, app, banco, marca grande e expert real (na dúvida, manter).
5. Para cada candidata de infoproduto: `node ferramentas/biblioteca-anuncios.js pagina <page_id do anúncio>` (total e idade) e `node ferramentas/checar-preco.js <landing>` (preço, checkout, bump). Respeitar o mínimo de 14 dias; 3–13 dias vai com Lista = "a observar" só se tiver ≥6 anúncios.
6. Pontuar (0–10) com a rubrica de `regras/mineracao.md`; justificativa no formato "3+2+1+2+1 = 9 · 94 anúncios, 41 dias, 5 concorrentes, original R$ 97, PDF". Veredito: Diamante (≥9) · Ouro (8) · Média (6–7). **Nota < 6 não entra.**
7. Lista: "A — reposicionar" (original R$ 47–197) · "B — low ticket" (até R$ 60) · "a observar".
8. **Não repetir domínio** já presente na coluna E da aba OFERTAS nem ofertas já entregues em `produtos/_mineracao/*/OFERTAS-APROVADAS.md`. Dado que não aparece = "não visível".
9. Gravar até **15 linhas novas** na aba OFERTAS (`append_values` em `OFERTAS!A1`), Status = "novo", Data = hoje. Ângulo descrito com palavras próprias (nunca copiar texto do anúncio).
10. Atualizar a coluna D da aba PALAVRAS-CHAVE com a data de hoje nos termos buscados.
11. Commit e push dos brutos e de `<pasta>/RESUMO.md` (quantos termos, quantas candidatas, quantas entraram, termos vazios).

Nunca: copiar texto/imagem de concorrente, comprar oferta para pedir reembolso, usar login do Facebook, inventar número.
