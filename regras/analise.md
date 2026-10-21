# Regras — Análise de Resultados

Formato: `- [AAAA-MM-DD] Regra clara e acionável. (Origem: o que aconteceu)`

## Regras
- [2026-10-21] Ao auditar checkout (Cakto e outros), preencher os dados pessoais com dados de teste (sem pagar) antes de concluir se há order bump: na Cakto os bumps só aparecem depois do preenchimento. Nunca afirmar "sem bump" sem esse teste. (Origem: análise do Decodifica apontou bumps ausentes; dono avisou que aparecem após os dados pessoais)
- [2026-10-21] Nunca recomendar pausar criativo só por "não vendeu" sem olhar quanto ele gastou. Criativo com pouco gasto (abaixo de ~1 CPA máximo) e com IC (initiate checkout) é sub-testado e promissor, não perdedor. Em CBO o Facebook distribui a verba de forma desigual, então "não vendeu/não gastou" em CBO não é resultado de teste. (Origem: plano mandou pausar os vídeos 1 e 4, que tiveram IC gastando só R$ 4,41 e R$ 5,13 em CBO 1-1-10)
