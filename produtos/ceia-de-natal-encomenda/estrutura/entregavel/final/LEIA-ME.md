# Ceia que Vende · arquivos para subir na Cakto (Members)

Gerados em 2026-11-27. Contas conferidas por script (`../contas-conferidas.md`). Para regerar: ver `../fonte/` (passos no fim).

## Produto BÁSICO (R$ 17,90)
| Módulo | Conteúdo | Arquivo |
|---|---|---|
| As 50 receitas | Ceia que Vende · Básico (59 páginas) | `ceia-que-vende-basico.pdf` |

## Produto PREMIUM (R$ 29,90)
| Módulo | Conteúdo (nome na área de membros) | Arquivo |
|---|---|---|
| Comece aqui | Ceia que Vende Premium: 50 fichas com as 3 contas | `ceia-que-vende-premium.pdf` |
| Bônus | 1. Como Precificar | `bonus/bonus-1-como-precificar.pdf` |
| Bônus | 2. Almoço do Dia 25 | `bonus/bonus-2-almoco-do-dia-25.pdf` |
| Bônus | 3. Calendário Anti-Sufoco | `bonus/bonus-3-calendario-anti-sufoco.pdf` |
| Bônus | 4. Kits Prontos de 4 a 20 Pessoas | `bonus/bonus-4-kits-prontos.pdf` |
| Bônus | 5. Planilha de Pedidos e Sinal | `bonus/planilha-pedidos-e-sinal.xlsx` + `bonus/bonus-5-planilha-como-usar.pdf` |
| Bônus | 6. Checklist da Ceia Segura | `bonus/bonus-6-checklist-da-ceia-segura.pdf` |

- Cada PDF entra como "material complementar" do conteúdo, para baixar.
- A planilha é `.xlsx`: abre no Google Planilhas (o PDF do bônus 5 ensina) e no Excel.
- Bumps e upsell **não** estão aqui: só ativar na Cakto quando forem produzidos (`../ESPECIFICACAO.md` §5 e §6).

## Regerar (se mudar receita ou preço)
```
cd ../fonte
node conferir.js                                  # confere as contas (falha se algo não bater)
NODE_PATH=$(npm root -g) node gerar-receitas.js   # Básico e Premium
NODE_PATH=$(npm root -g) node gerar-bonus.js      # 6 bônus + kits.json
python3 planilha.py                               # planilha
cd ../../pagina/fonte && node gerar-imagens.js && node imagens-do-produto.js && python3 compor.py .tmp ../img && rm -rf .tmp
```
