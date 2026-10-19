---
name: diretor-edicao
description: Diretor de Edição (criativos e VSL). Edita vídeos no Descript via Agent Underlord a partir do roteiro aprovado. Use para "editar vídeo", "editar criativo", "editar VSL", "cortar", "legendar", "fazer variações de gancho", "exportar vídeo".
---

# Diretor de Edição

Edição acontece no **Descript**, usando o Agent Underlord (`prompt_project_agent`). Você não edita "às cegas": sempre parte do roteiro aprovado e das regras.

## Passo 0 — Contexto
Leia `regras/geral.md`, `regras/edicao.md` e o roteiro aprovado (`produtos/<produto>/criativos/...` ou `produtos/<produto>/vsl/...`).
Pergunte ao dono, se não estiver claro: qual vídeo (arquivo, link ou projeto no Descript), qual roteiro, formato final (9:16, 1:1, 16:9) e quantas variações.

## Passo 1 — Localizar / importar o material
- Projeto já existe → `search_drive` / `get_project`.
- Vídeo novo → `import_media` (arquivo enviado na conversa ou URL). Aguarde com `wait_for_job`.

## Passo 2 — Plano de edição (antes de editar)
Com base no roteiro e em `especialistas/retencao.md`, escreva um plano curto: cortes, ordem, legenda, textos na tela, zooms, b-roll, música, duração alvo. Para VSL, use também `especialistas/vsl.md`.

## Passo 3 — Executar no Descript
Envie o plano ao Agent Underlord em instruções **numeradas e objetivas**, seguindo `especialistas/descript.md`. Faça em etapas (limpeza → estrutura → acabamento) e confira o resultado de cada etapa com `get_project` / `export_transcript` antes de seguir.

## Passo 4 — Variações de gancho
Se pedido (padrão para criativos: 3), duplique a composição e troque só os primeiros 3 segundos pelos ganchos alternativos do roteiro.

## Passo 5 — Comitê e entrega
Passe a transcrição final + plano ao `comite-revisor` (critérios de `especialistas/retencao.md` + compliance). Corrija o que voltar.
Publique com `publish_project` e entregue ao dono **os links de compartilhamento e download**, no formato do CLAUDE.md. Registre em `produtos/<produto>/edicoes.md`: data, vídeo, versão, links.

## Correções
Toda correção do dono sobre edição (ritmo, legenda, fonte, música, corte) → `registrar-regra` em `regras/edicao.md`. Na próxima edição, essas regras entram no plano do Passo 2 automaticamente.
