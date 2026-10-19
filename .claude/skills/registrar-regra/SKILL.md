---
name: registrar-regra
description: Grava uma correção do dono como regra permanente em regras/. Use SEMPRE que o dono corrigir, reprovar ou ajustar um trabalho, ou disser "sempre faça", "nunca faça", "não quero", "errado", "prefiro", "da próxima vez".
---

# Registrar regra (memória da operação)

1. **Classifique a correção:**
   - Vale para todas as áreas → `regras/geral.md`
   - Vale para uma área → `regras/<area>.md` (mineracao, copy-criativos, copy-vsl, edicao, paginas, entregaveis, cakto, compliance)
   - Vale só para um produto → seção "Restrições" de `produtos/<produto>/dossie.md`
   - Foi pontual (só este trabalho) → NÃO registre. Na dúvida, pergunte: "Isso vale sempre ou só aqui?"

2. **Escreva a regra** de forma acionável e verificável:
   - Ruim: "Melhorar os ganchos."
   - Bom: "Ganchos de criativo têm no máximo 8 palavras e começam com a dor, nunca com o nome do produto."

3. **Verifique duplicatas e conflitos:** leia o arquivo antes. Se já existe regra parecida, atualize-a em vez de duplicar. Se uma regra nova contradiz uma antiga, substitua a antiga e anote "(substitui regra de AAAA-MM-DD)".

4. **Grave** no formato:
   `- [AAAA-MM-DD] <Regra>. (Origem: <o que o dono corrigiu, em uma linha>)`
   Remova o placeholder "_(nenhuma ainda…)_" se ainda estiver lá.

5. **Confirme ao dono** em uma linha: `Regra registrada em regras/<arquivo>.md: <regra>`
