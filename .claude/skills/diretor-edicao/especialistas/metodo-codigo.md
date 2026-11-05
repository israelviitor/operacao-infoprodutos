# Especialista — Método de edição por código (FFmpeg + Whisper + Remotion)

> Método enviado pelo dono em 2026-11-05 (texto original de outra sessão). Vale acima do `descript.md`.

Olá, Claude. Vou te passar exatamente como outra sessão sua editou minha VSL e meus criativos, com um resultado profissional, sem marca d'água e sem gastar créditos de nenhuma plataforma. Siga este método à risca.

## 1. Regra principal: NÃO use Descript, Canva nem nenhuma plataforma de edição com créditos

- ❌ **Não edite pelo Descript** (nem pelo editor dele, o Agent Underlord). Ele cobra créditos e o plano gratuito coloca marca d'água grande no vídeo exportado.
- ❌ **Não use o Descript nem para exportar ou gerar link de download**, pelo mesmo motivo.
- ✅ **Edite com código, no próprio ambiente da sessão (Claude Code na nuvem)**, usando ferramentas gratuitas: **FFmpeg + Whisper (faster-whisper) + Remotion**. Não há créditos nem marca d'água.

**Pré-requisito:** isso só funciona numa sessão do **Claude Code** (claude.ai/code), que tem terminal e executa programas. Se esta conversa não tiver acesso a terminal e comandos, me avise logo, porque o chat comum não consegue fazer esse tipo de edição.

## 2. Ferramentas e para que serve cada uma

| Ferramenta | Uso |
|---|---|
| **FFmpeg** | Cortar, converter e padronizar todos os takes para 1080x1920 30fps, extrair quadros para conferência, normalizar o áudio em -14 LUFS e comprimir o arquivo final |
| **faster-whisper** (modelo `medium`, idioma `pt`, `word_timestamps=True`) | Transcrever a narração com o **tempo exato de cada palavra**. É a base das legendas sincronizadas e de onde cada corte e animação entra. |
| **Remotion 4** (React) | Montar o vídeo em código: takes com zoom, legendas animadas, cards, contadores, gráficos e tela de CTA. Renderiza o MP4 quadro a quadro. |
| **Python (numpy)** | Gerar os efeitos sonoros (pop, impact, ding, tick, boom, riser) e montar as grades de quadros para conferência |
| **gdown** | Baixar a pasta do Google Drive com takes e áudios |

### Ajustes de ambiente que foram necessários
- Liberar na rede do ambiente: `drive.google.com`, `drive.usercontent.google.com` e `huggingface.co`, este último para baixar o modelo do Whisper.
- Renderizar o Remotion com `--browser-executable` apontando para o Chromium headless já instalado na máquina, sem baixar outro.
- **Baixar as fontes (Montserrat e Inter) como arquivos .woff2 e carregar localmente** com `FontFace` + `delayRender`. O Chromium do ambiente não aceita o certificado do proxy pra baixar fontes do Google durante a renderização.
- Renderizar em segundo plano, porque leva cerca de 10 minutos por vídeo de 40s.

## 3. Processo de trabalho (siga nesta ordem)

1. **Baixar** a pasta do Drive e **analisar tudo antes de editar**: assistir os takes (por grade de quadros), ler a copy e ver a identidade visual.
2. **Transcrever** cada áudio com tempo por palavra.
3. **Padronizar os takes** para 1080x1920, 30fps, com crop central.
4. **Montar o roteiro de cenas a partir dos tempos da transcrição**: cada frase da narração ganha um take que ilustra literalmente o que é falado, mais o card ou animação do dado mencionado.
5. **Conferir antes de renderizar:** gerar de 6 a 8 quadros de amostra por vídeo (`remotion still`), montar numa grade e olhar se tem texto cortado, sobreposição ou legenda em cima de card. Corrigir o que aparecer.
6. **Fazer primeiro um teste de estilo** com os primeiros 15 a 20 segundos e mandar pra eu aprovar. Só depois produzir o resto.
7. **Renderizar**, normalizar o áudio em -14 LUFS e comprimir. Depois **conferir de novo** o MP4 final pela grade de quadros.
8. **Entregar** pelo método da seção 6.

## 4. Padrão de edição (o que deixou o resultado profissional)

### Legendas
- **Palavra por palavra**, sincronizadas pelos tempos do Whisper
- Blocos de **até 3 palavras**, quebrando na pontuação ou em pausas acima de 0,3s
- **Caixa alta**, fonte **Montserrat 900**, cerca de 92px (em vídeo 1080x1920), branca com **contorno escuro grosso** (cerca de 12px) e sombra
- A **palavra sendo falada fica na cor de destaque da marca** e cresce levemente (pop)
- As **palavras-chave** ganham **caixa colorida com texto escuro**, levemente inclinada
- Posição em cerca de 61% da altura da tela (fora da área da interface do Reels)
- **As legendas somem** quando um card ou gráfico já mostra a mesma informação
- Corrigir na legenda o que o Whisper separa ou erra ("980" + ",3" vira "980,3"; "R" + "$" vira "R$"; nomes próprios), **sem mexer no áudio**

### Cortes e takes
- Trocar de take a cada **2 a 4 segundos**, sempre acompanhando a frase
- **Zoom lento** (Ken Burns) em todo take, alternando aproximar e afastar
- **Entrada com "punch"** a cada corte: escala de 1,16 para 1 e desfoque de 10px para 0 em cerca de 6 quadros
- Correção de cor leve (contraste +7%, saturação +12%), vinheta escura nas bordas e gradiente escuro atrás das legendas
- **O take ilustra o que está sendo dito:** relógio para "tempo", prova para "enunciado", formatura para "aprovação", pais com filhos para "pai, mãe"

### Gráficos e animações (nas cores da marca)
- **Gancho (0 a 3s):** título gigante na tela com a frase de impacto, uma linha em caixa de destaque, entrando com escala e mola. Sem legenda nesse trecho.
- **Todo número citado vira animação:** contador que sobe até o valor, barra que enche, comparativo em barras, etiqueta de preço subindo e descendo
- **Listas viram itens que entram um a um** (checklist ✓ ou erros ✕)
- **Selos no topo da tela** (pílulas com borda) para frases curtas de destaque
- **Produto:** mockup de celular com a gravação de tela do produto, mais selos com os números da oferta
- **Oferta:** card com a lista do que vem no pacote e o preço grande aparecendo
- **CTA final:** tela na cor da marca com logo, frase curta, preço e **botão pulsando com brilho passando**, mais uma seta animada apontando pra baixo
- **Barra de progresso** fina no topo, apenas na VSL

### Som
- ❌ **NÃO colocar efeito sonoro nas transições entre takes.** Eu não gosto.
- ✅ **Efeitos só nos destaques:** impacto (gancho e preço), pop (selos e cards entrando), tique (contadores e cronômetros), ding (número final e CTA), boom grave (telas de virada e revelação da marca)
- Efeitos baixos (volume de 0,2 a 0,5), com a narração sempre na frente
- Áudio final normalizado em **-14 LUFS**

## 5. Formatos

- **Vídeos:** 1080x1920, 30fps, H.264 + AAC, até **14 MB** por arquivo (two-pass com bitrate calculado pela duração)
- **Imagens de feed:** 1080x1350 (4:5), PNG
- **VSL longa:** 1080x1920. Se passar do limite de envio, comprimir uma prévia em 720p.

## 6. Entrega sem marca d'água

- Não exportar por nenhuma plataforma de edição.
- O anexo do chat aceita no máximo **30 MB**. Para vários arquivos ou arquivos maiores, **publique uma página de download com a ferramenta de páginas (Artifact)**, com o recurso de **downloads** ativado:
  - Na página, mostre uma prévia de cada vídeo e imagem e um botão **"Baixar"**.
  - Cada arquivo precisa ter até ~15 MB. Por isso os vídeos são comprimidos em até 14 MB. Arquivos maiores podem ser divididos em partes e juntados no navegador antes do download.
  - Em publicações com mais de 64 MB, divida o envio em várias publicações na mesma página.
- Me mande o link da página.

## 7. Como me atender

- Antes de editar, analise o material e me dê um **diagnóstico curto** do que vai melhorar.
- Faça um **teste de estilo** e espere minha aprovação.
- Use **só dados e promessas que estão na minha copy.** Não invente depoimentos, números ou preços "de/por".
- Use **exatamente os áudios que eu mandar.** Se uma frase puder reprovar o anúncio, me avise, mas a decisão é minha.
- Antes de me entregar, **confira cada vídeo pela grade de quadros** e me diga o que conferiu.

---

**Se eu te mandar o arquivo `kit_decodifica.zip`:** ele tem todo o código Remotion que gerou meus criativos (componentes de legenda, cards, CTA, roteiros de cena) e scripts prontos (`prepare_media.sh`, `transcribe.py`, `render_criativos.sh`). Leia o `LEIA-ME_GUIA_COMPLETO.md` de dentro dele e **reutilize esse código**, em vez de recriar do zero. Para outra marca, troque as cores e fontes em `src/theme.ts`, o logo no componente `Logo` (`src/Graphics.tsx`) e os textos da oferta nos cards.
