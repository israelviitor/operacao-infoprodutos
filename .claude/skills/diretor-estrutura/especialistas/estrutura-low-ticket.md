# Especialista — Estrutura de página de low ticket (padrão do dono)

Fonte: aula "Como Criar Páginas de Vendas de Alta Conversão para Produtos Low Ticket" (Fernando Oliveira PRO, 50 min) — https://www.youtube.com/watch?v=oTAHd7jU89k. O dono definiu essa estrutura como padrão em 2026-10-28 (`regras/paginas.md`). Aprendida pela transcrição; os slides não foram vistos.

## Princípios
- **A página é o vendedor da loja.** O criativo desperta o interesse e traz a pessoa. A página mostra o produto, quebra objeções, aumenta o valor percebido e leva ao caixa (checkout).
- **Low ticket vende com clareza e produto real, não com exagero.**
- **A pessoa escaneia, não lê.** Ela vê títulos, bullets e imagens. Por isso:
  - textos curtos;
  - hierarquia visual clara;
  - texto alinhado à esquerda;
  - nada de blocos de texto corrido.
- **O visual não é decoração: é o produto ficando concreto.** Mostre o produto de forma ilustrada e tangível.
- **A primeira dobra é "90/10":** quase toda a decisão acontece ali. Se a conversão está baixa, mexa primeiro na dobra (principalmente na headline), não na página inteira.

## Os 17 blocos (E = essencial · C = condicional)
| # | Bloco | O que entra | Função |
|---|---|---|---|
| 0 | Barra de urgência (C) | Faixa no topo | Ver "Conflitos" abaixo |
| 1 | **Primeira dobra (E)** | headline de resultado final + subheadline com o caminho ("com X, você faz Y e chega a Z") + **mockup com páginas reais** + **3 a 5 bullets** de microbenefício + botão | Prender e convencer em poucos segundos |
| 2 | Dor e agitação (E) | Lista curta das dores que o público reconhece | "Quando a dor é reconhecida, a solução ganha contexto" |
| 3 | **Prova do produto (E)** | Páginas reais e legíveis em **carrossel horizontal** (ou mini vídeo) | Destino do botão da dobra. Transforma o produto em prova visual |
| 4 | Mecanismo único (E) | Como funciona, em bullets, imagem ou vídeo | Explicar o "porquê funciona" |
| 5 | Antes e depois (C) | Lado a lado: o caminho comum × o nosso | A pessoa conclui sozinha que o nosso é melhor |
| 6 | Demonstração de amplitude (E) | Números e cobertura ("150 mapas, 9 áreas, cobre tudo") | Dimensão da solução |
| 7 | Demonstração de uso (C) | Cenas do público usando o material no dia a dia (imagens geradas por IA) | "Como isso entra na minha rotina?" |
| 8 | Para quem é (E) | Bullets com todos os perfis que podem comprar | "Isso foi feito para mim" |
| 9 | Benefícios (E) | Cada recurso vira ganho ("150 mapas" → "revisão organizada") | Recurso não é benefício |
| 10 | Bônus (E) | 4 a 6 bônus **que completam** o produto principal (não "encher linguiça"); poderiam ser vendidos separados | Valor percebido. Às vezes a pessoa compra pelo bônus |
| 11 | **Oferta / "pit" (E)** | Recapitulação visual de tudo o que a pessoa recebe + mockup grande (produto + bônus juntos) + preço claro + **o único botão que vai ao checkout** + selos (compra protegida, acesso imediato, Pix ou cartão) | Organizar valor, preço e ação no mesmo campo visual, sem rolar |
| 12 | Prova social (C) | Depois do preço, nunca antes. Sem depoimento falso: a demonstração de uso pode cumprir esse papel | Credibilidade |
| 13 | Garantia (E) | Selo e texto | Tira o risco da decisão |
| 14 | Passos pós-compra (C, mas usar sempre) | Bloco próprio, fora do FAQ: "como você recebe" | Mata a objeção "como vou receber?" |
| 15 | FAQ (E) | 5 a 10 perguntas reais do público, nada genérico | Quebra de objeções finais |
| 16 | Fecho emocional (C) | Frase que volta ao resultado da headline | Lembrar o destino |
| 17 | Rodapé (E) | Termos, privacidade, contato (só e-mail), direitos autorais. Sem botão, sem promessa nova, sem WhatsApp | Segurança e transparência |

## Regras de botão
- Pode ter botão na primeira dobra (converte melhor), mas ele **não vai ao checkout**: leva à prova do produto (bloco 3).
- **Só o botão da oferta (bloco 11) leva ao checkout.** Assim, o InitiateCheckout conta só quem viu a oferta inteira.
  - Na prática do autor, isso dá mais de 40% de conversão no checkout.
  - Na nossa página, o script de UTMs se aplica só a esse botão.

## Regras de layout
- **Primeira dobra e bloco da oferta aparecem inteiros sem rolar**, no celular (390 × 844) e no desktop. Conferir com `auditar-pagina.js` (print da primeira dobra) e um print do bloco da oferta.
- Carrossel horizontal para as páginas do produto, porque no celular a rolagem vertical fica longa demais.
- Imagens em WebP. A página deve abrir em menos de 1 s.

## Headline (é da Copy; a Estrutura só monta)
Gerar de 10 a 15 headlines e escolher. Os 3 frameworks que mais se usam:
- **Inventário:** começa pela quantidade pronta ("150 mapas visuais prontos para…").
- **Domínio:** começa pelo resultado final ("Domine X e conquiste Y").
- **Descoberta:** começa pelo mecanismo e tira uma objeção ("Descubra como X com Y, sem Z").

"O ângulo muda a entrada; o produto, o público e a prova não mudam."

## Métricas da página (para a Análise)
| Métrica | O que é | Saudável |
|---|---|---|
| Taxa de carregamento | quem clicou no anúncio e viu a página (visualização da página ÷ clique no link) | > 75–80% |
| Chegada à oferta | quem rolou até o bloco da oferta | > 20% |
| Persuasão da oferta | quem chegou à oferta e clicou para o checkout (IC) | > 15% |
| Conversão da página | vendas ÷ visitas | 4 a 8% (raro: 10%) |

Para medir a "chegada à oferta" é preciso um evento de rolagem: o ViewContent ao ver o bloco da oferta (já existe na nossa página) ou o Microsoft Clarity.

## Conflitos com as nossas regras (o dono decide; até lá, NÃO usar)
1. **Barra de urgência com data que se atualiza sozinha todo dia** ("oferta especial só hoje"). É urgência falsa: risco no CDC (art. 37, publicidade enganosa) e na política de anúncios do Meta, e o dossiê do Matemática em Missão proíbe cronômetro e urgência que não sejam reais.
2. **Ancoragem "ia ser R$ 555, hoje sai por R$ 47"** sem preço anterior real. O dossiê permite "de/por" só com preço real (lição do Decodifica).
3. **Fotos de "pessoas usando o material" na primeira dobra, como prova de autoridade.** Imagem gerada que parece cliente real funciona como depoimento falso.
   - A **demonstração de uso** (bloco 7) é aceitável com ilustração que não pareça cliente real.
   - Para público infantil, nunca rosto de criança que pareça real (ECA/LGPD, dossiê §7).
4. **Hospedar na Netlify** (o autor usa). Para nós é indiferente: a página é estática e roda em qualquer lugar (Vercel/v0, Netlify).
