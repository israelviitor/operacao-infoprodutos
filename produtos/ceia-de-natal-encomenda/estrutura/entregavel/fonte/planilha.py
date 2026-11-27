"""Gera a Planilha de Pedidos e Sinal (.xlsx editável, abre no Google Planilhas e no Excel).
Uso: python3 planilha.py   (depois de node gerar-bonus.js, que grava kits.json)
Abas: Pedidos · Lista de compras · Resumo · Preços
"""
import json, os
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.formatting.rule import FormulaRule
from openpyxl.utils import get_column_letter as L

AQUI = os.path.dirname(os.path.abspath(__file__))
kits = json.load(open(os.path.join(AQUI, 'kits.json')))
SAIDA = os.path.join(AQUI, '..', 'final', 'bonus', 'planilha-pedidos-e-sinal.xlsx')

VERDE, VINHO, CREME, OURO = '0F3D2E', '8C1C24', 'FBF6EC', 'FFF4D6'
cab = dict(font=Font(bold=True, color='FFFFFF'), fill=PatternFill('solid', fgColor=VERDE), alignment=Alignment(horizontal='center', vertical='center', wrap_text=True))
fino = Side(style='thin', color='E0D6C2')
borda = Border(left=fino, right=fino, top=fino, bottom=fino)
BRL = '"R$" #,##0.00'

def titulo(ws, txt, sub, ncols):
    ws['A1'] = txt
    ws['A1'].font = Font(bold=True, size=16, color=VERDE)
    ws['A2'] = sub
    ws['A2'].font = Font(italic=True, size=10, color='7D6B5E')
    ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=ncols)
    ws.merge_cells(start_row=2, start_column=1, end_row=2, end_column=ncols)

def cabecalho(ws, linha, nomes, larguras):
    for i, (n, w) in enumerate(zip(nomes, larguras), 1):
        c = ws.cell(row=linha, column=i, value=n)
        for k, v in cab.items(): setattr(c, k, v)
        ws.column_dimensions[L(i)].width = w
    ws.row_dimensions[linha].height = 32

wb = Workbook()

# ---------- Preços
pr = wb.active
pr.title = 'Preços'
titulo(pr, 'Preços dos kits', 'Troque o preço aqui e a planilha inteira se atualiza. "Avulso" = digite o valor do pedido na aba Pedidos.', 3)
cabecalho(pr, 4, ['Pedido', 'Preço', 'Pessoas'], [26, 14, 12])
linhas_preco = [(k['nome'], k['preco'], k['nome'].replace('Kit ', '').replace(' pessoas', '')) for k in kits] + [('Avulso', None, '')]
for i, (n, p, ps) in enumerate(linhas_preco, 5):
    pr.cell(row=i, column=1, value=n).border = borda
    c = pr.cell(row=i, column=2, value=p); c.number_format = BRL; c.border = borda
    pr.cell(row=i, column=3, value=ps).border = borda
ULT_PRECO = 4 + len(linhas_preco)

# ---------- Pedidos
pe = wb.create_sheet('Pedidos', 0)
N = 200  # linhas de pedido
titulo(pe, 'Ceia que Vende · Pedidos e Sinal', 'Um pedido por linha. Escolha o pedido na lista; valor, sinal e saldo aparecem sozinhos. Marque "Sim" quando o sinal cair no Pix.', 13)
nomes = ['Nº', 'Cliente', 'Telefone', 'Pedido', 'Valor', 'Sinal 50%', 'Sinal pago?', 'Recebido', 'Saldo a receber', 'Dia da entrega', 'Horário', 'Endereço ou retirada', 'Observações (alergias, adicionais)']
cabecalho(pe, 4, nomes, [5, 20, 15, 20, 12, 12, 11, 12, 14, 12, 9, 28, 30])
pe.freeze_panes = 'C5'
for r in range(5, 5 + N):
    pe.cell(row=r, column=1, value=f'=IF(B{r}="","",ROW()-4)')
    # valor: busca o preço do pedido; se "Avulso" (ou vazio), deixa digitar
    pe.cell(row=r, column=5, value=f'=IF(OR(D{r}="",D{r}="Avulso"),"",IFERROR(VLOOKUP(D{r},Preços!$A$5:$B${ULT_PRECO},2,FALSE),""))')
    pe.cell(row=r, column=6, value=f'=IF(E{r}="","",E{r}/2)')
    pe.cell(row=r, column=8, value=f'=IF(E{r}="","",IF(G{r}="Sim",F{r},0)+IF(G{r}="Quitado",E{r},0))')
    pe.cell(row=r, column=9, value=f'=IF(E{r}="","",E{r}-H{r})')
    for c in range(1, 14):
        pe.cell(row=r, column=c).border = borda
    for c in (5, 6, 8, 9):
        pe.cell(row=r, column=c).number_format = BRL
    pe.cell(row=r, column=10).number_format = '@'  # texto: 23/12, 24/12 ou 25/12
dv_ped = DataValidation(type='list', formula1=f'=Preços!$A$5:$A${ULT_PRECO}', allow_blank=True)
dv_sin = DataValidation(type='list', formula1='"Sim,Não,Quitado"', allow_blank=True)
pe.add_data_validation(dv_ped); pe.add_data_validation(dv_sin)
dv_ped.add(f'D5:D{4 + N}'); dv_sin.add(f'G5:G{4 + N}')
pe.conditional_formatting.add(f'G5:G{4 + N}', FormulaRule(formula=['G5="Não"'], fill=PatternFill('solid', fgColor='FBE3E3'), font=Font(color='B3261E', bold=True)))
pe.conditional_formatting.add(f'G5:G{4 + N}', FormulaRule(formula=['OR(G5="Sim",G5="Quitado")'], fill=PatternFill('solid', fgColor='E3F2E6'), font=Font(color='188038', bold=True)))
# exemplo (o cliente apaga)
ex = [('Exemplo: Ana P.', '(81) 9 0000-0000', 'Kit 6 a 8 pessoas', 'Sim', '24/12', '18h', 'Rua das Flores, 10'), ('Exemplo: Juliana T.', '(81) 9 0000-0001', 'Kit 10 pessoas', 'Não', '24/12', '19h', 'Retirada')]
for i, (cl, tel, kit, s, d, h, end) in enumerate(ex, 5):
    pe.cell(row=i, column=2, value=cl); pe.cell(row=i, column=3, value=tel); pe.cell(row=i, column=4, value=kit)
    pe.cell(row=i, column=7, value=s); pe.cell(row=i, column=10, value=d); pe.cell(row=i, column=11, value=h); pe.cell(row=i, column=12, value=end)
    pe.cell(row=i, column=13, value='Linha de exemplo: apague antes de usar')

# ---------- Lista de compras (soma por ingrediente a partir dos pedidos de kit)
# Ingredientes de cada receita-base (ficha) usada nos kits: (item, unidade, quantidade na receita-base)
BASE = {
    7: [('Pernil suíno com osso', 'kg', None), ('Vinho branco seco', 'xícara', 1.5), ('Limão', 'un', 3), ('Alho', 'cabeça', 1), ('Cebola', 'un', 2), ('Azeite', 'cs', 3)],
    15: [('Arroz', 'kg', 0.8), ('Cebola', 'un', 1), ('Cenoura', 'un', 1), ('Pimentão vermelho', 'un', 1), ('Ervilha congelada', 'xícara', 1), ('Milho verde', 'xícara', 1), ('Uva-passa', 'xícara', 0.5)],
    21: [('Banana-da-terra', 'un', 6), ('Manteiga', 'g', 150), ('Cebola', 'un', 1), ('Farinha de mandioca', 'kg', 0.5)],
    18: [('Batata', 'kg', 1.5), ('Cenoura', 'un', 3), ('Ervilha congelada', 'xícara', 1), ('Ovo', 'un', 4), ('Maionese industrializada', 'xícara', 1.5), ('Cebola roxa', 'un', 0.5)],
    17: [('Peito de frango', 'kg', 1), ('Cenoura', 'un', 2), ('Milho verde', 'xícara', 1), ('Ervilha congelada', 'xícara', 1), ('Uva-passa', 'xícara', 0.5), ('Azeitona verde', 'xícara', 0.5), ('Maçã verde', 'un', 1), ('Maionese industrializada', 'xícara', 1.5), ('Creme de leite', 'caixinha', 0.6), ('Batata palha', 'g', 200)],
    37: [('Pão francês amanhecido', 'un', 4), ('Leite condensado', 'lata', 1), ('Leite', 'litro', 0.5), ('Ovo', 'un', 4), ('Açúcar', 'g', 200), ('Óleo para fritar', 'litro', 0.5)],
    39: [('Leite condensado', 'lata', 2), ('Leite', 'litro', 0.8), ('Ovo', 'un', 6), ('Açúcar', 'g', 200)],
}
itens = {}  # (item, unidade) -> {kit: qtd}
for k in kits:
    for l in k['linhas']:
        for nome, un, q in BASE[l['n']]:
            qtd = l['principalKg'] if q is None else q * l['mult']
            itens.setdefault((nome, un), {}).setdefault(k['nome'], 0)
            itens[(nome, un)][k['nome']] += qtd

lc = wb.create_sheet('Lista de compras', 1)
nk = len(kits)
titulo(lc, 'Lista de compras dos kits', 'Soma sozinha a partir dos pedidos de kit da aba Pedidos. Pedido avulso: some à parte com a ficha de cada prato. Sal, pimenta e ervas: confira o estoque.', 4 + nk)
cabecalho(lc, 4, ['Ingrediente', 'Unidade'] + [f'Por pedido:\n{k["nome"]}' for k in kits] + ['TOTAL A COMPRAR', 'Comprei?'], [30, 10] + [13] * nk + [16, 11])
lc.freeze_panes = 'C5'
cnt = [f'COUNTIF(Pedidos!$D$5:$D${4 + N},"{k["nome"]}")' for k in kits]
r = 5
for (nome, un), porKit in sorted(itens.items(), key=lambda x: x[0][0]):
    lc.cell(row=r, column=1, value=nome); lc.cell(row=r, column=2, value=un)
    for j, k in enumerate(kits):
        c = lc.cell(row=r, column=3 + j, value=round(porKit.get(k['nome'], 0), 2)); c.number_format = '0.0#'
    tot = '+'.join(f'{L(3 + j)}{r}*{cnt[j]}' for j in range(nk))
    inteiro = un in ('un', 'lata', 'cabeça', 'caixinha')
    c = lc.cell(row=r, column=3 + nk, value=f'=ROUNDUP({tot},{0 if inteiro else 1})'); c.font = Font(bold=True, color=VINHO); c.number_format = '0' if inteiro else '0.0'
    for cc in range(1, 5 + nk): lc.cell(row=r, column=cc).border = borda
    r += 1
lc.cell(row=r + 1, column=1, value='Embalagens: 1 marmita de alumínio por assado, 1 pote por acompanhamento, 1 travessa por sobremesa, etiqueta e sacola por pedido.').font = Font(italic=True, color='7D6B5E')
dv_c = DataValidation(type='list', formula1='"Sim,Não"', allow_blank=True); lc.add_data_validation(dv_c); dv_c.add(f'{L(4 + nk)}5:{L(4 + nk)}{r - 1}')

# ---------- Resumo
rs = wb.create_sheet('Resumo', 2)
titulo(rs, 'Resumo do seu Natal', 'Tudo calculado a partir da aba Pedidos.', 3)
P = f'Pedidos!$E$5:$E${4 + N}'
dados = [
    ('Pedidos anotados', f'=COUNTIF(Pedidos!$B$5:$B${4 + N},"?*")', None),
    ('Total vendido', f'=SUM({P})', BRL),
    ('Sinal recebido + quitados', f'=SUM(Pedidos!$H$5:$H${4 + N})', BRL),
    ('Saldo a receber', f'=SUM(Pedidos!$I$5:$I${4 + N})', BRL),
    ('Pedidos sem sinal pago', f'=COUNTIF(Pedidos!$G$5:$G${4 + N},"Não")', None),
]
cabecalho(rs, 4, ['Item', 'Valor', ''], [30, 18, 4])
for i, (n, f, fmt) in enumerate(dados, 5):
    rs.cell(row=i, column=1, value=n).border = borda
    c = rs.cell(row=i, column=2, value=f); c.border = borda; c.font = Font(bold=True)
    if fmt: c.number_format = fmt
r = 5 + len(dados) + 1
rs.cell(row=r, column=1, value='Pedidos por dia de entrega').font = Font(bold=True, size=13, color=VERDE)
cabecalho(rs, r + 1, ['Dia', 'Pedidos', 'Meu limite'], [30, 18, 14])
for i, dia in enumerate(['23/12', '24/12', '25/12'], r + 2):
    rs.cell(row=i, column=1, value=dia).border = borda
    c = rs.cell(row=i, column=2, value=f'=COUNTIF(Pedidos!$J$5:$J${4 + N},A{i})'); c.border = borda
    lim = rs.cell(row=i, column=3); lim.border = borda; lim.fill = PatternFill('solid', fgColor=OURO)
    rs.conditional_formatting.add(f'B{i}', FormulaRule(formula=[f'AND(C{i}<>"",B{i}>C{i})'], fill=PatternFill('solid', fgColor='FBE3E3'), font=Font(color='B3261E', bold=True)))
rs.cell(row=r + 6, column=1, value='Digite o seu limite (Calendário Anti-Sufoco). Passou do limite, o número fica vermelho. Na aba Pedidos, escreva o dia como 23/12, 24/12 ou 25/12.').font = Font(italic=True, color='7D6B5E')

for ws in wb.worksheets:
    ws.sheet_view.showGridLines = True
    ws.sheet_properties.tabColor = {'Pedidos': VERDE, 'Lista de compras': 'C9A24A', 'Resumo': VINHO, 'Preços': '7D6B5E'}[ws.title]
wb.save(SAIDA)
print('ok', SAIDA, len(itens), 'ingredientes')
