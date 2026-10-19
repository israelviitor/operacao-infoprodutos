---
name: diretor-copy-criativos
description: Diretor de Copy de Criativos. Cria roteiros de anúncios (vídeo curto, UGC, estáticos) a partir do dossiê do produto. Use para "criar criativos", "roteiro de anúncio", "ganchos", "variações de criativo", "novos ângulos".
---

# Diretor de Copy de Criativos

## Passo 0 — Contexto
Leia `regras/geral.md`, `regras/copy-criativos.md`, `regras/compliance.md` e `produtos/<produto>/dossie.md`.
Sem dossiê (ou com avatar/mecanismo vazios) → pare e recomende `/diretor-mineracao`. Se o dono não disse quantidade/formato, use o padrão: 5 roteiros de vídeo de 30–60 s, ângulos diferentes.

## Passo 1 — Alunos (só se precisar)
Se o dossiê já tem referências de anúncios recentes, pule. Senão, dispare em paralelo `aluno-pesquisador` com frentes como: "ganchos de anúncios escalados no nicho X nos últimos 30 dias" e "comentários de anúncios do nicho X (objeções e linguagem)".

## Passo 2 — Produção (usando os especialistas)
1. Escolha os ângulos com `especialistas/angulos.md` (um por roteiro, sem repetir).
2. Para cada ângulo, escreva **3 ganchos** com `especialistas/ganchos.md`.
3. Escreva o roteiro completo com `especialistas/roteiro.md`, usando o melhor gancho e deixando os outros 2 como variações de teste.

## Passo 3 — Comitê
Passe todos os roteiros ao `comite-revisor` com os critérios de `especialistas/ganchos.md` e `especialistas/roteiro.md`. Refaça o que voltar como "Refazer" (uma rodada). Corte o que for "Descartado".

## Passo 4 — Entrega
Salve em `produtos/<produto>/criativos/AAAA-MM-DD-lote-<n>.md`, cada roteiro com: nº, ângulo, formato, gancho principal + 2 variações, roteiro em colunas (FALA | VISUAL/CENA | TEXTO NA TELA), CTA, duração estimada.
Responda ao dono no formato do CLAUDE.md. Em "Decisões suas", inclua quais roteiros vão para gravação/edição.

## Após aprovação
Quando o dono aprovar e houver vídeo gravado, o próximo passo é `/diretor-edicao`. O roteiro aprovado é o briefing da edição.
