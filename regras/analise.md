# Regras — Análise de Resultados

Formato: `- [AAAA-MM-DD] Regra clara e acionável. (Origem: o que aconteceu)`

## Regras
- [2026-10-21] Ao auditar checkout (Cakto e outros), preencher os dados pessoais com dados de teste (sem pagar) antes de concluir se há order bump: na Cakto os bumps só aparecem depois do preenchimento. Nunca afirmar "sem bump" sem esse teste. (Origem: análise do Decodifica apontou bumps ausentes; dono avisou que aparecem após os dados pessoais)
