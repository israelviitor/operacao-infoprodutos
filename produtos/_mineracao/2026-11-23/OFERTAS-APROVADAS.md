# Mineração Portugal — 2026-11-23

Pedido: ofertas no mesmo padrão da rodada BR (infoproduto low ticket, sem expert, dá para modelar) **rodando só em Portugal**.
Critérios: regra internacional 2026-11-06 para Portugal (€ 7–45 · ≥6 anúncios ativos · 7–90 dias; 91–180 = perene, nota menor) + checagem de que a página **não anuncia no Brasil** (consulta `pagina` com PAIS=BR).
Fonte: 40 termos em português europeu na Biblioteca (PAIS=PT, sem login; 34 voltaram com resultado). Brutos em `bruto/`, páginas em `paginas/` (PT e BR).

## Aprovadas — só Portugal

| # | Oferta | Anunciante | Preço | Anúncios ativos PT / BR | Dias no ar | Página na Biblioteca | Anúncio | Landing | Checkout |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Air Fryer 365 — 365 receitas em 10 categorias, numa "aplicação" (web app) no telemóvel | Chef Camila Tavares | € 17 (US$ 20 no checkout) · garantia 30 dias | 25 / 0 | 17 | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=PT&view_all_page_id=996070110262529 | https://www.facebook.com/ads/library/?id=1791551185446158 | https://www.airfryer365.online/App2 | https://pay.hotmart.com/G106605283X?off=h1o5da42&checkoutMode=10 |
| 2 | "+300 refeições" baixas em calorias (pequenos-almoços, almoços, lanches, jantares) + 4 bónus (plano alimentar 20 dias, 60 pães sem glúten, 200 sobremesas sem açúcar, 60 sumos detox — cada um "€ 19,90 grátis hoje"). Anúncios e URL ainda usam o nome antigo "200 Pequenos-Almoços" | Carolina Vasconcelos (apresentada como nutricionista; parece persona) | € 14,90 ("de € 29,90"), pagamento único | 37 / 0 | 133 (perene) | https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=PT&view_all_page_id=600316239829491 | https://www.facebook.com/ads/library/?id=2021356735437573 | https://app.nutrivasconcelos.online/200pequenos-almocos | https://pay.hotmart.com/M101941548S?checkoutMode=10 |

## A observar (começou agora, ainda <6 anúncios)
- "Copo Leve — 500 receitas keto para a Bimby" (Cristine Alvares, 19 €, 3 anúncios, 3 dias) — https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=PT&view_all_page_id=1275551848975167 · https://www.facebook.com/ads/library/?id=2351967672218736 · https://copo-leve.vercel.app/ · https://pay.hotmart.com/D108574177N?off=pdoyb253&checkoutMode=10 . Outro anunciante (Bright Page Studio, "297 Receitas Keto para Bimby", US$ 19) entrou no mesmo dia: sinal de teste no nicho Bimby.

## Cortadas
- A Pitada do Pai (241 anúncios) — livro físico autografado de autor real (Rui Marques).
- Manual de massagem TopCorpus (92 PT) e Jejum Reset (25 PT) — anunciam mais no Brasil (273 e 43).
- Laura Martins (aplicação para vender bolos, 27 €) — 31 anúncios espalhados por vários produtos, só 2 da oferta; marca pessoal.
- Begin Early Activities (+500 atividades pré-escolar, 2 planos 5 / 9,90, 56 anúncios em PT) — roda sobretudo em espanhol/italiano, versão PT com só 2 anúncios (19/11), entrada abaixo de € 7.
- Instituto Ninho do Saber (fichas, € 15,90) e Silvia Ramos (tortas geladas) — 3 e 2 anúncios.

Sugestões de modelagem (comentário, não decisão):
- 1: "receitas para o aparelho que a pessoa já tem" funciona em PT (Air Fryer, Bimby). Modelar como pack para Bimby ("para Bimby®" só como compatibilidade; nunca no nome, logo ou como oficial — marca da Vorwerk) ou Air Fryer com pratos portugueses, € 14–19, página + checkout em €.
- 2: receitas fit por refeição, perene; dá para cortar em packs de € 9,90 (só pequenos-almoços) com upsell do resto. Persona sem título de "nutricionista" (em PT exige inscrição na Ordem).
