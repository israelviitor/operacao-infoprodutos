# Mineração low ticket — 2026-10-19

## Escopo e limitações
- 9 de 40 buscas concluídas na Biblioteca de Anúncios (Brasil, ativos). O Meta bloqueia consultas sem login, cerca de uma busca a cada 15–20 minutos. 158 ofertas vistas.
- O nº de anúncios é um piso (só o que apareceu nas buscas). A recontagem por página não concluiu por bloqueio.
- Pesquisa de demanda e concorrência feita na web aberta (Hotmart, páginas de venda, notícias). Kiwify e Cakto não são indexados.
- Detalhes: `pesquisa/*.md`, dados brutos: `bruto/`, ofertas agrupadas: `ofertas.json`.

## Oferta de origem que passou nos filtros
**Ricardo Artesanato — curso de eletricista R$ 15 (WhatsApp)**
- ≥14 anúncios ativos, 38 dias, sem expert.
- Clonar direto: descartado (saturado: Resolve Elétrica, HydroVolt, R$ 10 Hotmart, Marido de Aluguel R$ 9,90).

## Modelagens recomendadas pelo comitê
| # | Ideia | Tipo | Demanda | Concorrência low ticket | Nota |
|---|---|---|---|---|---|
| 1 | Curso/apostila de refrigeração R$ 15–27 | Horizontal | Hotmart 417 e 342 avaliações | nenhuma achada (mercado em R$ 99+) | 4 |
| 2 | Mecânica de moto R$ 15–27 | Horizontal | Hotmart 227 avaliações | nenhuma achada | 3,5 |
| 3 | Elétrica residencial para mulheres | Vertical | indireta (cursos institucionais só para mulheres) | 2 produtos sem avaliação | 3 |
| 4 | +1000 atividades de estimulação cognitiva "mente ativa" (comprador: filhos/cuidadores) | Horizontal (origem: atividades autismo) | concorrentes anunciando há 113–259 dias | só packs de 31–100 atividades | 3 (condicional) |

## Descartados
- Moldes EVA e todas as variações (8+ páginas idênticas)
- Atividades autismo / TDAH (saturado)
- Matemática Lição Kids e leitura/interpretação (saturado)
- ENEM "Profª Juliana Gamon" (persona falsa, demanda fraca)
- Encanador e pintura (sem prova de venda)
- Ar-condicionado e solar (fora do low ticket)

## Riscos
- Promessa de renda ("fature R$ X") em elétrica, refrigeração e moto.
- Não prometer certificado que habilite para a profissão.
- Estimulação cognitiva: não citar doença nem idade de quem lê o anúncio; não prometer prevenção ou tratamento.
- Venda deve ir pela Cakto com entrega automática (os de origem vendem por WhatsApp).

## URLs (Biblioteca de Anúncios + gateway)
| Oferta | Biblioteca — anúncio | Biblioteca — página | Gateway / venda |
|---|---|---|---|
| Ricardo Artesanato — eletricista R$15 (PASSOU) | https://www.facebook.com/ads/library/?id=2256108151789408 | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&view_all_page_id=913699531818972 | sem gateway (WhatsApp) |
| Edgar Projetos — comandos elétricos | https://www.facebook.com/ads/library/?id=1086089007510716 | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&view_all_page_id=888334494352521 | sem gateway (WhatsApp) |
| Dona Fatima — +5000 moldes EVA | https://www.facebook.com/ads/library/?id=1058964213292222 | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&view_all_page_id=105072185474191 | sem gateway (WhatsApp) |
| Carla Mendes — +1200 atividades autismo | https://www.facebook.com/ads/library/?id=1105581145458690 | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&view_all_page_id=1068782359661106 | sem gateway (WhatsApp) |
| Lição Kids — matemática 4 operações | https://www.facebook.com/ads/library/?id=29027952710145031 | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&view_all_page_id=715156778343037 | https://checkout.alfacademi.com.br/checkout/oferta-FijM1BC-oLTydIyz (página: https://matematica4operacoes.pages.dev/) |
| Profª Juliana Gamon — ENEM | https://www.facebook.com/ads/library/?id=4483928121869358 | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&view_all_page_id=1107727462432369 | https://pay.wiapy.com/bMvmZPMTfTej (página: https://mathenem.profjulianagamon.online/) |

### Referências das modelagens
| Referência | Biblioteca | Gateway / venda |
|---|---|---|
| Refrigeração (busca de concorrentes) | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&q=curso%20de%20refrigera%C3%A7%C3%A3o&search_type=keyword_unordered | Hotmart: https://www.hotmart.com/s?q=refrigeracao |
| Mecânica de moto | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&q=curso%20mec%C3%A2nica%20de%20moto&search_type=keyword_unordered | Hotmart: https://www.hotmart.com/s?q=mecanica%20de%20moto |
| Elétrica para mulheres | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&q=el%C3%A9trica%20para%20mulheres&search_type=keyword_unordered | Hotmart: https://www.hotmart.com/s?q=eletrica%20para%20mulheres |
| Bem Pensar 50+ (mente ativa) | https://www.facebook.com/ads/library/?id=1670341130798741 · https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&view_all_page_id=107721468960891 | loja própria, sem gateway externa: https://bempensar50.com.br/ (produtos de R$111–348, NÃO é low ticket) |
| Resolve Elétrica (concorrente) | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&q=resolveeletrica.com&search_type=keyword_unordered | https://pay.hotmart.com/T105065000P?off=tz74zlcx |
| HydroVolt (concorrente) | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&q=hydrovolt&search_type=keyword_unordered | https://hotmart.com/pt-br/marketplace/produtos/apostila-de-instalacoes-eletricas-hydrovolt-aprenda-do-zero-ao-nivel-profissional-por-apenas-r-19-90-vaga-na-proxima-turma-com-certificado-para-os-primeiros-compradores/A102230084X |

## Recontagem — Ricardo Artesanato (page_id 913699531818972)
- 150 anúncios ativos na página, com duas ofertas, ambas vendidas pelo WhatsApp:
  - **Curso de eletricista R$ 15:** 35 ou mais anúncios, o mais antigo com 45 dias e o mais novo com 3. PASSA (no limite de 45 dias).
  - **+2.000 projetos de marcenaria:** o mais antigo com 67 dias. NÃO PASSA na idade.
