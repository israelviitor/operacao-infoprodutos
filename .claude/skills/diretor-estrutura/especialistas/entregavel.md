# Especialista — Entregável (o produto em si)

O entregável é o que a pessoa recebe depois de pagar. Em low ticket, ele decide reembolso, reclamação e recompra. Ele precisa **cumprir exatamente o que a página promete**: mesma quantidade, mesmos itens, mesmo formato.

## Antes de produzir
1. **Lista de conteúdo (índice):** cada item com título, objetivo e onde entra (série, módulo, nível). Se o dossiê promete alinhamento (ex.: BNCC), o índice mostra o código de cada item.
2. **Modelo de página:** uma página-modelo aprovada **antes** de produzir em volume. Mande ao dono 1 amostra pronta e só então produza o resto.
3. **Estimativa de volume:** nº de itens × páginas. Se passar de cerca de 150 páginas, proponha ao dono produzir em lotes (lote 1 já vende; os lotes seguintes entram como atualização).

## Produção
- **Conteúdo:** escreva em Markdown ou HTML em `estrutura/entregavel/fonte/`. Um arquivo por item facilita revisar e corrigir.
- **Diagramação:** HTML + CSS de impressão (A4, margens de 15 mm, fontes legíveis, P&B quando o dossiê pedir) convertido em PDF com `node ferramentas/gerar-pdf.js <arquivo.html> <saida.pdf>`.
- **Canva:** use quando o dono pedir um visual mais elaborado (capas, mockups) e o conector estiver disponível na sessão.
- **Mockups para a página e os criativos:** capa e 3 a 6 páginas internas exportadas como PNG (`gerar-pdf.js --png`).

## Conferência obrigatória
- **Respostas e gabaritos:** confira 100% por cálculo ou script, nunca de cabeça. Um gabarito errado num material de professora derruba a confiança e gera reembolso.
- **Ortografia e consistência:** nomes, numeração e referências cruzadas.
- **Promessa:** a quantidade e os itens batem com a página e o checkout.
- **Impressão:** teste uma página em P&B (escala de cinza) e veja se continua legível.
- **Direitos:** sem imagens, personagens ou textos de terceiros sem licença. Use ícones e ilustrações livres ou gerados.

## Entrega ao comprador
- Um PDF principal com sumário clicável, mais os bônus separados.
- Hospedagem: área de membros ou entrega de arquivo da Cakto [A CONFIRMAR no painel], ou um link do Drive só leitura. A forma de entrega precisa estar descrita na página ("como recebo?").

## Critérios do comitê
Cumpre a promessa · gabarito 100% conferido · legível em P&B · fácil de aplicar (roteiro claro) · sem violação de direitos ou compliance.
