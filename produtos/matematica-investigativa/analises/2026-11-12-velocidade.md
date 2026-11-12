# Velocidade da página — Matemática em Missão (2026-11-12)

Página: https://matematica-em-missao-rf.vercel.app/ · Medido com celular de 390 px, sem cache, em 3 redes simuladas.

| Rede | 1º conteúdo (FCP) | Maior elemento (LCP) | Página carregada | Dados até carregar |
|---|---|---|---|---|
| Wi-Fi / rápida | 0,82 s | **0,88 s** | 1,3 s | 2,5 MB |
| 4G bom (9 Mbps) | 0,56 s | **2,3 s** | 3,1 s | 2,5 MB |
| 4G fraco / 3G (1,6 Mbps) | 0,84 s | **10,8 s** | 14,0 s | 2,5 MB |

Referência do Google: LCP ≤ 2,5 s = bom.

**Dado real que confirma:** de 06 a 10/11, **75% a 84% dos cliques viraram visualização da página**, dentro do normal. A velocidade não é o gargalo hoje.

**Onde dá para ganhar (para redes fracas):**
1. A página baixa **~2,5 MB antes de terminar de carregar**. As 8 vitrines do carrossel (~150 KB cada, e o carrossel duplica o conjunto) e os 3 depoimentos novos (~130 KB cada) entram já no carregamento inicial. Carregar as vitrines só quando o carrossel aparecer na tela (e só as 2 primeiras de início) tira ~1,2 MB.
2. O maior elemento da primeira tela (foto do topo `hero-missao-80`, 135 KB, + mockup, 142 KB) define o LCP. Marcar a foto do topo com `fetchpriority="high"` + `<link rel="preload">` e reduzir o mockup para ~60–80 KB.
3. O pixel (`fbevents.js`, 112 KB) já carrega sem travar o texto (FCP < 1 s). Manter assim.
