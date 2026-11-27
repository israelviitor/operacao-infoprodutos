// Gera os 6 bônus do Premium em PDF (+ kits.json para a planilha).
// Uso: NODE_PATH=$(npm root -g) node gerar-bonus.js
const fs = require('fs');
const path = require('path');
const { tudo, fracao, kg, P, precoDe } = require('./contas');
const { md, doc, topo, capa, brl } = require('./estilo');
const { pdf, fechar } = require('./pdf');

const FINAL = path.join(__dirname, '..', 'final', 'bonus');
const HTML = path.join(__dirname, 'html');
fs.mkdirSync(FINAL, { recursive: true });
fs.mkdirSync(HTML, { recursive: true });
const t = tudo();
const R = (n) => t.receitas[n - 1];
const C = (n, p) => R(n).contas.find((c) => c.pessoas === p);
const pag = (dir, corpo) => `<section class="pag">${topo('CEIA QUE VENDE · BÔNUS', dir)}${corpo}</section>`;
const capaB = (n, titulo, sub) => capa({ titulo, sub, tag: `BÔNUS ${n} · PREMIUM`, marca: 'CEIA QUE VENDE' });
const etapa = (n, h, p) => `<div class="etapa"><div class="num">${n}</div><div><h3>${h}</h3>${p}</div></div>`;
const tabela = (cab, linhas, dest = -1, num = []) => `<table><tr>${cab.map((c, i) => `<th class="${num.includes(i) ? 'num' : ''}">${c}</th>`).join('')}</tr>${linhas.map((l, j) => `<tr class="${j === dest ? 'dest' : ''}">${l.map((c, i) => `<td class="${num.includes(i) ? 'num' : ''}">${c}</td>`).join('')}</tr>`).join('')}</table>`;
const itemKit = (l) => (l.principal ? `${l.nome} · ${kg(l.principalKg)}` : `${l.nome} (para ${l.tamanho})`);

// ============ BÔNUS 1 · COMO PRECIFICAR
function precificar() {
  const p = R(7), c = C(7, 10);
  const carne = c.principalKg * P.pernil, demais = c.custo - carne;
  const botijao = 110, kgHora = 0.15, gasHora = (botijao / 13) * kgHora;
  const gasPernil = (gasHora * 3.5) / 2; // 2 pernis por fornada
  const emb = 4.5;
  const total = c.custo + gasPernil + emb;
  const preco = Math.round((total * 2.7) / 5) * 5;
  const horas = 1.5, valorHora = 25;
  const sobra = preco - total;
  const exemplos = [20, 50, 100, 200, 300];
  return doc('Bônus 1 · Como Precificar', capaB(1, 'Como<br><em>Precificar</em>', 'A conta do preço passo a passo, com gás, embalagem e a sua hora, e como cobrar mais sem perder cliente.')
  + pag('COMO PRECIFICAR', `<h1>Por que o "preço da vizinha" dá prejuízo</h1>
  <p class="sub">Cobrar o que a outra cobra parece seguro. Só que a vizinha pode pagar o pernil mais barato, não contar o gás ou estar trabalhando de graça sem saber.</p>
  <p style="margin-top:5mm">O preço certo sai de <b>uma conta sua</b>, com 4 partes:</p>
  <div class="etapas">${etapa(1, 'Ingredientes', '<p>Tudo o que vai no prato, pelo preço que <b>você</b> pagou.</p>')}${etapa(2, 'Gás', '<p>Assado de Natal fica horas no forno. Isso tem custo.</p>')}${etapa(3, 'Embalagem', '<p>Marmita de alumínio, pote, tampa, etiqueta, sacola.</p>')}${etapa(4, 'A sua hora', '<p>Comprar, preparar, embalar e entregar. Se não entra na conta, você trabalha de graça.</p>')}</div>
  <div class="box vinho"><b>A regra que protege o seu lucro:</b> preço = custo × 2,5 no mínimo (o ideal é × 2,7; até × 3 para pratos que dão mais trabalho). Abaixo de × 2,5, gás, embalagem, perdas e a sua hora comem o lucro.</div>`)
  + pag('PASSO 1 · INGREDIENTES', `<h1>Passo 1: o custo dos ingredientes</h1>
  <p class="sub">Use a regra de três: quanto você pagou pelo pacote e quanto usou dele.</p>
  <div class="box verde"><b>Custo de um ingrediente = preço do pacote ÷ tamanho do pacote × quanto você usou.</b><br>Ex.: farinha de mandioca a R$ 4,50 o pacote de 500 g. A farofa usa 500 g → R$ 4,50. Se usasse 250 g → R$ 2,25.</div>
  <h2>Exemplo: pernil para 10 pessoas (ficha 07)</h2>
  ${tabela(['Item', 'Quanto', 'Custo'], [['Pernil com osso (R$ 25/kg)', kg(c.principalKg), brl(carne)], ['Vinho, limões, alho, cebolas, temperos e azeite', fracao(c.mult) + ' do tempero', brl(Math.round(demais))], ['<b>Total de ingredientes</b>', '', `<b>${brl(c.custo)}</b>`]], 2, [2])}
  <p class="nota">Valores de referência (dez/2025). Nas fichas do Premium, essa conta já está feita para 4, 6, 10 e 20 pessoas.</p>
  <h2>Dicas para o custo não fugir</h2>
  <ul class="check"><li>Anote o preço de cada compra num caderno ou na Planilha de Pedidos. Preço de dezembro sobe toda semana.</li><li>Pesquise em 2 lugares antes da compra grande: atacarejo costuma sair mais barato para carne, arroz, farinha e leite condensado.</li><li>Arredonde o custo <b>para cima</b>. Sobra de centavos vira o seu colchão para imprevistos.</li><li>Conte a perda: o pernil perde peso no forno e sempre sobra um resto de pote. As fichas já arredondam para cima por isso.</li></ul>`)
  + pag('PASSOS 2 E 3 · GÁS E EMBALAGEM', `<h1>Passo 2: o gás</h1>
  <p>Um forno doméstico a gás gasta, em média, cerca de <b>${String(kgHora).replace('.', ',')} kg de gás por hora</b> aceso (varia com o fogão e a temperatura).</p>
  <div class="box verde"><b>Custo do gás por hora = preço do botijão ÷ 13 × ${String(kgHora).replace('.', ',')}</b><br>Com o botijão a ${brl(botijao)}: ${brl(botijao)} ÷ 13 × ${String(kgHora).replace('.', ',')} = <b>${brl(gasHora, true)} por hora</b>.</div>
  <p style="margin-top:4mm">O pernil fica 3 h 30 no forno, e cabem 2 por fornada. O gás de cada pernil: ${brl(gasHora, true)} × 3,5 ÷ 2 = <b>${brl(gasPernil, true)}</b>.</p>
  <p>Parece pouco, e é: o gás pesa menos que você imagina. O que pesa é esquecer os outros custos todos juntos.</p>
  <h1 style="margin-top:9mm">Passo 3: a embalagem</h1>
  ${tabela(['Embalagem', 'Preço médio (un.)'], [['Marmita de alumínio 2,2 L com tampa (assado)', 'R$ 3,00'], ['Pote plástico de 1 L com tampa (salada, farofa)', 'R$ 1,50'], ['Travessa descartável de alumínio (sobremesa)', 'R$ 2,50'], ['Etiqueta + sacola', 'R$ 1,00']], -1, [1])}
  <p class="nota">Compre em loja de embalagem, em pacote fechado: sai até 40% mais barato que na unidade.</p>
  <p>No exemplo do pernil sozinho: marmita + etiqueta + sacola = <b>${brl(emb, true)}</b>. Num kit com 4 pratos, a embalagem fica entre R$ 8 e R$ 12.</p>`)
  + pag('PASSO 4 · A SUA HORA', `<h1>Passo 4: a sua hora</h1>
  <p class="sub">Escolha quanto você quer ganhar por hora de trabalho. Depois confira se o lucro paga essas horas.</p>
  <div class="box verde"><b>Quanto vale a sua hora?</b> Se você quer ganhar R$ 2.000 trabalhando 80 horas em dezembro, a sua hora vale R$ 2.000 ÷ 80 = <b>R$ 25</b>.<br>Minha hora vale: R$ <span class="campo"></span></div>
  <h2>A conta completa do pernil para 10</h2>
  ${tabela(['Parte', 'Valor'], [['Ingredientes', brl(c.custo)], ['Gás', brl(gasPernil, true)], ['Embalagem', brl(emb, true)], ['<b>Custo total</b>', `<b>${brl(total, true)}</b>`], ['Preço (custo total × 2,7, arredondado)', `<b>${brl(preco)}</b>`], ['O que sobra para você', `<b class="lucro">${brl(sobra, true)}</b>`], [`Sua hora: ${String(horas).replace('.', ',')} h de trabalho ativo × R$ ${valorHora}`, brl(horas * valorHora, true)]], 4, [1])}
  <p style="margin-top:3mm">O que sobra (${brl(sobra, true)}) paga com folga a sua hora (${brl(horas * valorHora, true)}). <b>Se não pagasse, o preço estaria baixo.</b></p>
  `)
  + pag('A CONTA RÁPIDA', `<h1>A conta rápida para qualquer prato</h1>
  <div class="box"><b>A conta rápida para qualquer prato:</b><br>1. Some ingredientes + gás + embalagem = custo total.<br>2. Custo total × 2,7 = preço (nunca menos que × 2,5).<br>3. Preço − custo total = sobra. A sobra tem de pagar as suas horas. Se não pagar, suba o preço ou escolha outro prato.</div>
  <h2>Tabela rápida: do custo ao preço</h2>
  ${tabela(['Custo total', 'Mínimo (× 2,5)', 'Ideal (× 2,7)', 'Máximo (× 3)'], exemplos.map((v) => [brl(v), brl(Math.ceil(v * 2.5)), brl(Math.round(v * 2.7)), brl(v * 3)]), -1, [0, 1, 2, 3])}`)
  + pag('COBRAR MAIS SEM PERDER CLIENTE', `<h1>Como cobrar mais sem perder cliente</h1>
  <p class="sub">O cliente de Natal não compara centavos: compara tranquilidade. Estes 8 jeitos aumentam o valor de cada pedido.</p>
  <div class="etapas miuda">
  ${etapa(1, 'Venda o kit, não o prato', `<p>Quem pede só o pernil para 10 leva ${brl(c.preco)}. Quem pede o kit leva arroz, farofa e sobremesa junto. Os Kits Prontos (bônus 4) já vêm com o preço do combo.</p>`)}
  ${etapa(2, 'Ofereça 3 tamanhos', '<p>Mostre o kit de 4, o de 6 a 8 e o de 10. Com 3 opções, a maioria escolhe o do meio, e quem ia pedir o pequeno muitas vezes sobe um tamanho.</p>')}
  ${etapa(3, 'Tenha adicionais prontos', '<p>"Quer acrescentar uma travessa de pavê por R$ 70?" Sobremesa, molho extra e pão de alho são vendas que quase todo mundo aceita.</p>')}
  ${etapa(4, 'Cobre a entrega à parte', '<p>Defina uma taxa por bairro (ex.: R$ 10 perto, R$ 20 longe). Retirada é grátis. Assim o preço do kit não sobe.</p>')}
  ${etapa(5, 'Capriche na apresentação', '<p>Etiqueta bonita, fita vermelha, um cartão de "Feliz Natal" com o seu nome. Custa R$ 1 e faz o cliente achar justo pagar mais (e indicar você).</p>')}
  ${etapa(6, 'Não dê desconto: dê um mimo', '<p>Pediu desconto? "Desconto não consigo, mas mando um molho de ameixa de cortesia." O molho custa poucos reais; o desconto sairia do seu lucro.</p>')}
  ${etapa(7, 'Sinal de 50% sempre', '<p>Quem paga o sinal não desiste. E o sinal paga as compras, então você não tira dinheiro do bolso.</p>')}
  ${etapa(8, 'Feche as encomendas numa data', '<p>"Encomendas até 15/12" faz o cliente decidir agora. Depois dessa data, só aceite se couber no seu limite (Calendário Anti-Sufoco).</p>')}
  </div>`)
  + pag('QUANDO PERGUNTAM "TÁ CARO?"', `<h1>Quando perguntam "tá caro?"</h1>
  <p class="sub">Não baixe o preço. Mostre o que está incluído. Copie e adapte:</p>
  <div class="msg">Entendo! Esse valor já inclui tudo pronto: o pernil de 4 kg assado, o arroz, a farofa e a sobremesa, embalados e prontos para servir 10 pessoas. Dá menos de R$ 60 por pessoa, sem você passar o dia 24 na cozinha. 😊
  Se preferir, tenho o kit menor, para 6 a 8 pessoas.</div>
  <h2>3 respostas que não baixam o preço</h2>
  <ul class="lista"><li><b>Divida por pessoa:</b> "Fica R$ X por pessoa, com tudo pronto."</li><li><b>Ofereça o tamanho menor</b>, não um desconto.</li><li><b>Compare com o trabalho:</b> "Comprar, temperar, assar e lavar a louça no dia 24... aqui chega pronto."</li></ul>
  <div class="box vinho"><b>Quando dizer não:</b> se o cliente só fecha com um preço abaixo do seu mínimo (custo × 2,5), agradeça e deixe a vaga para outro. No Natal sobra cliente; o que falta é forno.</div>
  <h2>Minha tabela de preços</h2>
  ${tabela(['Prato ou kit', 'Custo', 'Mínimo (× 2,5)', 'Meu preço'], Array.from({ length: 7 }, () => ['&nbsp;', '', '', '']))}`));
}

// ============ BÔNUS 2 · ALMOÇO DO DIA 25
const ALMOCO = [13, 20, 29, 26, 21, 27, 46, 47];
function almoco() {
  const linhas = ALMOCO.map((n) => { const c = C(n, 10); return [String(n).padStart(2, '0'), R(n).nome, brl(c.custo), brl(c.preco), `<span class="lucro">${brl(c.lucro)}</span>`]; });
  const kitA = [13, 20, 26, 46].map((n) => C(n, 10));
  const kitB = [29, 21, 27, 47].map((n) => C(n, 10));
  const soma = (a) => a.reduce((s, c) => s + c.custo, 0);
  const pr = precoDe;
  const kA = soma(kitA), kB = soma(kitB);
  return doc('Bônus 2 · Almoço do Dia 25', capaB(2, 'Almoço<br>do <em>Dia 25</em>', 'Um cardápio próprio para vender de novo no dia 25, com produção e limite separados da ceia.')
  + pag('ALMOÇO DO DIA 25', `<h1>O Natal tem 2 refeições. Venda as 2.</h1>
  <p class="sub">No dia 25, muita família acorda sem vontade de cozinhar de novo. É um segundo pedido no mesmo Natal, para clientes que você já tem.</p>
  <div class="etapas">${etapa(1, 'Cardápio diferente da ceia', '<p>Pratos que <b>não disputam o forno do dia 24</b>: os de forno são montados no dia 23 e só vão ao forno na manhã do dia 25.</p>')}${etapa(2, 'Produção separada', '<p>O almoço tem a própria lista de compras, o próprio dia de montagem e o próprio horário de entrega (10h30 às 13h30).</p>')}${etapa(3, 'Limite separado', '<p>O almoço tem o seu limite de pedidos, contado à parte do limite da ceia. Começou o almoço sem ter terminado as entregas do dia 24? Então o limite está alto demais.</p>')}</div>
  <div class="box vinho"><b>Nunca venda sobra da ceia no almoço.</b> O almoço é feito com ingredientes comprados para ele. Comida que voltou de entrega ou ficou exposta não se revende.</div>`)
  + pag('O CARDÁPIO', `<h1>O cardápio do dia 25</h1><p class="sub">8 pratos das suas fichas. Os de forno são montados no dia 23 e assados no dia 25; saladas, farofa e salada de frutas são feitas na manhã do dia 25.</p>
  ${tabela(['Ficha', 'Prato', 'Custo (10 p.)', 'Preço (10 p.)', 'Lucro'], linhas, -1, [2, 3, 4])}
  <p class="nota">Contas das fichas do Premium (preços de referência de dez/2025). Para 4, 6 ou 20 pessoas, veja a ficha de cada prato.</p>
  <h2>2 combos prontos para 10 pessoas</h2>
  <div class="grade2">
  <div class="kit dest"><h3>Almoço Clássico</h3><ul class="lista">${[13, 20, 26, 46].map((n) => `<li>${R(n).nome}</li>`).join('')}</ul><div class="preco">${brl(pr(kA))}</div><div class="linha-p"><span>Custo ${brl(kA)}</span><span class="lucro">Lucro ${brl(pr(kA) - kA)}</span></div></div>
  <div class="kit"><h3>Almoço de Forno</h3><ul class="lista">${[29, 21, 27, 47].map((n) => `<li>${R(n).nome}</li>`).join('')}</ul><div class="preco">${brl(pr(kB))}</div><div class="linha-p"><span>Custo ${brl(kB)}</span><span class="lucro">Lucro ${brl(pr(kB) - kB)}</span></div></div>
  </div><p class="nota">Preço do combo = soma dos custos das fichas × 2,7, arredondado como nas fichas.</p>`)
  + pag('A PRODUÇÃO', `<h1>A produção do almoço</h1><p class="sub">Assim o almoço não atrapalha a ceia.</p>
  ${tabela(['Quando', 'O que fazer'], [
    ['21/12', 'Compras do almoço junto com as da ceia, mas em <b>lista separada</b> (aba "Lista de compras" da planilha).'],
    ['23/12 · manhã', 'Cozinhe o pernil desfiado e guarde na geladeira. Faça o pudim de pão (precisa de 4 h de geladeira).'],
    ['23/12 · tarde', 'Monte a lasanha e o arroz de forno nos refratários, tampe e leve à geladeira. Etiqueta: "almoço 25".'],
    ['24/12', '<b>Dia da ceia: não mexa no almoço.</b> Só confirme os pedidos e horários do dia 25 por mensagem.'],
    ['25/12 · 7h', 'Legumes assados (1 receita = 2 assadeiras, 40 min). Esfriou, vai para a geladeira: são entregues gelados. Depois: farofa de banana, saladas e salada de frutas, que também vão para a geladeira assim que prontas.'],
    ['25/12 · 9h', 'Leva 1 no forno: 2 refratários (lasanha ou arroz de forno). Sai às 10h → <b>entregas das 10h30 às 12h</b>.'],
    ['25/12 · 11h', 'Leva 2 no forno. Sai às 12h → <b>entregas das 12h às 13h30</b>. Pernil desfiado: reaqueça até ferver na saída de cada leva.'],
    ['Na entrega', 'Bolsa térmica, quente separado do frio. Cada prato quente chega em <b>até 2 h depois de sair do forno</b>. Receba o saldo na entrega.'],
  ])}
  <div class="box"><b>Por que em levas:</b> comida pronta fica no máximo 2 horas fora da geladeira, do forno até a mesa do cliente. Cada leva tem o seu horário de entrega. Não dá para entregar tudo no horário? Entregue o refratário <b>montado e gelado</b>, com o cartão "asse a 200 °C por 50 min, coberto, e mais 10 min descoberto".</div>
  <div class="box verde"><b>Quanto forno cada leva pede:</b> 1 h com 2 refratários juntos (a lasanha leva 50 min coberta + 10 min descoberta; o arroz de forno sai em 30 min). Os legumes assados vão gelados, com o cartão "aqueça 10 min no forno a 200 °C ou sirva em temperatura ambiente".</div>`)
  + pag('O LIMITE DO DIA 25', `<h1>A Conta do Limite do almoço</h1>
  <p class="sub">Faça esta conta antes de oferecer o almoço. Ela é separada da conta da ceia.</p>
  ${tabela(['Pergunta', 'Exemplo (1 forno)'], [['Levas de forno (9h e 11h)', '2 levas'], ['Refratários por leva', '2 → <b>4 refratários</b> no total'], ['Almoço Clássico', '1 refratário (arroz de forno) por pedido'], ['Almoço de Forno', '1 refratário (lasanha) + 1 receita de legumes, que ocupa sozinha a fornada das 7h → <b>no máximo 1 por dia</b>'], ['<b>Limite do almoço</b>', '<b>4 Clássicos, ou 3 Clássicos + 1 de Forno</b>']], 4)}
  <p class="nota">Exemplo com 1 forno doméstico. Combos só com pernil desfiado e saladas não usam forno: o limite deles é a geladeira e o tempo de entrega.</p>
  <div class="box verde">Minhas horas de forno livres no dia 25: <span class="campo"></span> · Levas: <span class="campo"></span> · <b>Meu limite de almoços:</b> <span class="campo"></span> pedidos</div>
  <h2>Mensagem para oferecer o almoço</h2>
  <div class="msg">Oi, [nome]! Sua ceia do dia 24 está confirmada 🎄
  E no dia 25? Estou fazendo o Almoço do Dia 25 para quem não quer cozinhar de novo: lasanha, arroz de forno, saladas e sobremesa para 10 pessoas, entregue entre 10h30 e 13h30.
  São poucas vagas, porque faço tudo em casa. Quer que eu reserve a sua?</div>
  <div class="box">Ofereça primeiro a quem já pediu a ceia: é o cliente mais fácil de fechar.</div>`));
}

// ============ BÔNUS 3 · CALENDÁRIO ANTI-SUFOCO
const SEM = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const DIAS = [
  ['26/11', 'Escolha o seu cardápio: 1 ou 2 assados, 3 acompanhamentos e 1 sobremesa. Use as fichas.'],
  ['27/11', 'Faça em casa o prato que você menos domina. Fotografe o prato pronto, com luz natural.'],
  ['28/11', 'Pesquise os preços em 2 mercados e refaça as contas das fichas com o seu custo.'],
  ['29/11', 'Monte os seus kits (bônus 4) e a sua tabela de preços. Defina a taxa de entrega por bairro.'],
  ['30/11', 'Faça a Conta do Limite (última página) e defina quantos pedidos aceita em cada dia de entrega.'],
  ['1º/12', '<b>Abra as encomendas</b> (se ainda não abriu): cardápio, preços, data de fechamento e sinal de 50%.', 'ouro'],
  ['2/12', 'Mande o cardápio para a família, os vizinhos e os grupos do bairro e do condomínio.'],
  ['3/12', 'Poste a foto do prato nos status. Anote cada pedido na planilha no mesmo minuto.'],
  ['4/12', 'Cobre o sinal de quem pediu e ainda não pagou. Pedido sem sinal não entra no limite.'],
  ['5/12', 'Peça indicação a quem já pagou: "conhece alguém que também quer a ceia pronta?"'],
  ['6/12', 'Confira o limite: quantas vagas ainda restam em cada dia de entrega?'],
  ['7/12', 'Novo post nos status com as vagas restantes.'],
  ['8/12', 'Encomende as embalagens (marmitas, potes, etiquetas) para chegarem até o dia 18.'],
  ['9/12', 'Status: "Faltam 6 dias para fechar as encomendas." Responda todo mundo no mesmo dia.'],
  ['10/12', 'Cobre os sinais pendentes. Quem não pagou em 48 h sai da lista.'],
  ['11/12', 'Encomende a carne no açougue (pernil, lombo, aves) para retirar no dia 21.'],
  ['12/12', 'Ofereça o Almoço do Dia 25 a quem já pediu a ceia.'],
  ['13/12', 'Confira a planilha: total vendido, sinal recebido e saldo a receber.'],
  ['14/12', 'Último aviso: "As encomendas fecham amanhã."'],
  ['15/12', '<b>Feche as encomendas.</b> Pedido depois disso só se couber no seu limite.', 'alerta'],
  ['16/12', 'Monte o roteiro de entregas: horário e bairro de cada pedido.'],
  ['17/12', 'Gere a lista de compras pela planilha (aba "Lista de compras").'],
  ['18/12', 'Compre o que não estraga: arroz, farinhas, latas, chocolate, embalagens. Trufas já podem ser feitas (desde o dia 15).'],
  ['19/12', 'Limpeza geral da geladeira e do freezer. Separe o espaço de cada pedido.'],
  ['20/12', 'Confirme cada pedido por mensagem: prato, horário, endereço e saldo. Panetone e brownie podem ser feitos a partir de hoje.'],
  ['21/12', 'Compras de carne, frios e hortifrúti. Carne congelada começa a descongelar <b>na geladeira</b> hoje.'],
  ['22/12', 'Pré-preparo: temperos, farofas, molhos, pudins e pavês. Pernil entra na marinada.'],
  ['23/12', 'Saladas que aguentam, sobremesas de geladeira e montagem do almoço do dia 25. Primeiras entregas.'],
  ['24/12', '<b>Assados e entregas</b> no horário marcado. Receba o saldo na entrega.', 'ouro'],
  ['25/12', 'Almoço do Dia 25 (bônus 2): cardápio e limite separados da ceia.'],
];
function calendario() {
  const D = new Date(2026, 11, 24);
  const dataDe = (s) => { const [d, m] = s.replace('º', '').split('/').map(Number); return new Date(2026, m - 1, d); };
  const dia = ([s, txt, cls = '', rotulo]) => {
    const dt = dataDe(s), dif = Math.round((D - dt) / 864e5);
    const rot = dif > 0 ? `D-${dif}` : dif === 0 ? 'DIA D' : 'D+1';
    return `<div class="dia ${cls}"><div class="d">${rotulo || s} <small>${SEM[dt.getDay()]} · ${rot}</small></div><div>${txt}</div></div>`;
  };
  const antes = DIAS.filter(([s]) => (D - dataDe(s)) / 864e5 > 15);
  const contagem = DIAS.filter(([s]) => { const x = (D - dataDe(s)) / 864e5; return x >= 1 && x <= 15; });
  const fim = DIAS.filter(([s]) => (D - dataDe(s)) / 864e5 < 1);
  const k = t.kits.find((x) => x.pessoas === '6 a 8');
  return doc('Bônus 3 · Calendário Anti-Sufoco', capaB(3, 'Calendário<br><em>Anti-Sufoco</em>', 'O dia de abrir e de fechar as encomendas, comprar, produzir e entregar, com o limite de pedidos por dia.')
  + pag('CALENDÁRIO · AS FASES', `<h1>As fases do seu Natal</h1><p class="sub">O dia D é 24/12. Cada fase tem uma tarefa; o dia a dia está nas próximas páginas.</p>
  <div class="box verde" style="margin:0 0 3mm"><b>Comprou depois de 1º/12?</b> Faça hoje as tarefas de 26/11 a 1º/12 (cardápio, preços, kits e limite) e abra as encomendas amanhã. Depois, siga o calendário a partir da data de hoje.</div>
  ${dia(['26/11', 'Escolha os pratos e os kits, confira os preços e monte o cardápio.', '', '26 a 30/11'])}
  ${dia(['1º/12', '<b>Abra as encomendas no dia em que comprou este material</b> (até 1º/12, no máximo).', 'ouro'])}
  ${dia(['1º/12', 'Cada pedido só entra com <b>50% de sinal no Pix</b>. Anote na planilha.', '', '1º a 15/12'])}
  ${dia(['15/12', '<b>Feche as encomendas.</b>', 'alerta'])}
  ${dia(['16/12', 'Confirme cada pedido, horário e saldo. Compre o que não estraga.', '', '16 a 20/12'])}
  ${dia(['21/12', 'Compras de carne e hortifrúti.'])}
  ${dia(['22/12', 'Temperos, pré-preparo e sobremesas. Primeiras entregas no dia 23.', '', '22 e 23/12'])}
  ${dia(['24/12', 'Assados e entregas.', 'ouro'])}
  ${dia(['25/12', 'Almoço do Dia 25.'])}
  <div class="box limite" style="margin-top:4mm"><b>Meu limite de pedidos por dia de entrega:</b> dia 23: <span class="campo"></span> · dia 24: <span class="campo"></span> · dia 25: <span class="campo"></span></div>`)
  + pag('DIA A DIA · PREPARAÇÃO E VENDAS', `<h1>Preparação e vendas</h1><p class="sub">26/11 a 8/12: uma tarefa por dia. Marque quando fizer.</p>${antes.map(dia).join('')}`)
  + pag('DIA A DIA · D-15 A D-1', `<h1>Contagem regressiva: D-15 a D-1</h1><p class="sub">9/12 a 23/12: a reta final, do último empurrão de vendas à véspera.</p>${contagem.map(dia).join('')}`)
  + pag('DIA D E A CONTA DO LIMITE', `<h1>Dia D</h1>${fim.map(dia).join('')}
  <h1 style="margin-top:8mm">A Conta do Limite do seu dia 24</h1>
  <p class="sub">O limite é o menor destes 3 números: forno, geladeira e entregas.</p>
  ${tabela(['Conta', 'Exemplo (kit 6 a 8, pernil de 2,4 kg, 1 forno)', 'A sua'], [
    ['Horas de forno livres no dia 24', '6h às 17h = 11 h', '&nbsp;'],
    ['÷ horas por fornada (forno + troca)', '11 ÷ 2 h 45 = 4 fornadas', '&nbsp;'],
    ['× peças por fornada (até 8 kg no forno)', '4 × 3 = <b>12 pernis</b>', '&nbsp;'],
    ['Travessas na geladeira ÷ travessas por kit', '24 ÷ 3 (arroz, farofa, sobremesa) = <b>8 kits</b>', '&nbsp;'],
    ['Entregas por hora × horas de entrega', '3 × 5 h = <b>15 entregas</b>', '&nbsp;'],
    ['<b>Meu limite no dia 24 = o menor dos 3</b>', '<b>8 kits</b> (a geladeira manda)', '&nbsp;'],
  ], 5)}
  <div class="box verde"><b>Quer vender mais que o limite?</b> Abra entregas no dia 23 (o cliente guarda na geladeira e reaquece). Exemplo: 8 kits de 6 a 8 pessoas no dia 24 + 2 no dia 23 = 10 kits = ${brl(10 * k.preco)} de faturamento.</div></div>`));
}

// ============ BÔNUS 4 · KITS PRONTOS
function kitsProntos() {
  const msgs = {
    '4': 'Ceia de Natal para 4 pessoas 🎄\n{itens}\nTudo pronto, é só aquecer e servir: {preco}.\nEncomendas até 15/12 com 50% de sinal no Pix.',
    '6 a 8': 'Ceia completa para 6 pessoas, ou 8 com porção menor 🎄\n{itens}\nPor {preco}, entregue no dia 24 no horário combinado.\nReserve com 50% de sinal no Pix. Encomendas até 15/12.',
    '10': 'Ceia para a família toda: 10 pessoas 🎄\n{itens}\n{preco}, pronta para servir. Poucas vagas: reserve com 50% de sinal no Pix.',
    '20': 'Ceia para 20 pessoas 🎄 (festas, firmas e famílias grandes)\n{itens}\n{preco}. Reserve com 50% de sinal no Pix; vagas limitadas até 15/12.',
  };
  const card = (k) => `<div class="kit${k.destaque ? ' dest' : ''}"><h3>${k.nome}</h3><ul class="lista">${k.linhas.map((l) => `<li>${itemKit(l)}</li>`).join('')}</ul><div class="preco">${brl(k.preco)}</div><div class="linha-p"><span>Custo ${brl(k.custo)}</span><span>Sinal ${brl(k.sinal, true)}</span><span class="lucro">Lucro ${brl(k.lucro)}</span></div></div>`;
  return doc('Bônus 4 · Kits Prontos', capaB(4, 'Kits<br><em>Prontos</em>', 'Combos de 4 a 20 pessoas com o preço fechado. É só mandar no WhatsApp.')
  + pag('KITS PRONTOS', `<h1>Kits Prontos de 4 a 20 Pessoas</h1><p class="sub">O cliente escolhe em 10 segundos, e você vende o combo, não um prato. Custo = soma das fichas do Premium no tamanho do kit.</p>
  <div class="grade2" style="margin-top:5mm">${t.kits.map(card).join('')}</div>
  <p class="nota">Preço ≈ custo × 2,7 (o kit de 6 a 8 sai a R$ 299, preço praticado no mercado, = custo × ${(t.kits[1].preco / t.kits[1].custo).toFixed(2).replace('.', ',')}). Lucro antes de gás, embalagem e entrega. Preços de referência de dez/2025: refaça com o seu custo.</p>
`)
  + t.kits.map((k) => pag(k.nome.toUpperCase(), `<h1>${k.nome}</h1><p class="sub">${k.pessoas === '6 a 8' ? 'Feito com as quantidades para 6 pessoas (400 g de pernil por pessoa). Para 8, a porção fica menor (300 g de pernil por pessoa): diga isso ao cliente.' : `Quantidades para ${k.pessoas} pessoas.`}</p>
  ${tabela(['Ficha', 'Prato', 'Quanto fazer', 'Custo'], k.linhas.map((l) => [String(l.n).padStart(2, '0'), l.nome, l.principal ? `${kg(l.principalKg)} + ${fracao(l.mult)} do tempero` : fracao(l.mult), brl(l.custo)]).concat([['', '<b>Total</b>', '', `<b>${brl(k.custo)}</b>`]]), k.linhas.length, [3])}
  ${tabela(['Preço do kit', 'Sinal (50%)', 'Saldo na entrega', 'Seu lucro'], [[`<b>${brl(k.preco)}</b>`, brl(k.sinal, true), brl(k.preco - k.sinal, true), `<span class="lucro">${brl(k.lucro)}</span>`]], -1, [0, 1, 2, 3])}
  ${k.pessoas === '6 a 8' ? `<div class="box"><b>Faça a conta:</b> 10 kits de 6 a 8 pessoas = ${brl(10 * t.kits[1].preco)} de faturamento, com custo de ${brl(10 * t.kits[1].custo)}: sobram ${brl(10 * t.kits[1].lucro)} antes de gás, embalagem e entrega. E o sinal de 50% (${brl(10 * t.kits[1].sinal, true)}) paga as compras.</div>` : ''}
  <h2>Mensagem para o WhatsApp</h2><div class="msg">${msgs[k.pessoas].replace('{itens}', k.linhas.map((l) => '✔ ' + l.nome + (l.principal ? ` (${kg(l.principalKg)})` : '')).join('\n')).replace('{preco}', brl(k.preco))}</div>
  <h2>Adicionais para oferecer</h2><ul class="lista"><li>Molho de ameixa (ficha 30): ${brl(C(30, 10).preco)} para 10 pessoas</li><li>Pão de alho para assar (ficha 34): ${brl(C(34, 10).preco)} (20 unidades)</li><li>Pavê de chocolate (ficha 38): ${brl(C(38, 10).preco)} para 10 pessoas</li></ul>`)).join(''));
}

// ============ BÔNUS 5 · PLANILHA (PDF de como usar)
function planilhaPdf() {
  const ex = [['Ana P.', 'Kit 6 a 8 pessoas', 'Sim', '24/12', '18h'], ['Cláudia R.', 'Kit 10 pessoas', 'Sim', '24/12', '17h'], ['Márcia S.', 'Kit 4 pessoas', 'Sim', '23/12', '19h'], ['Juliana T.', 'Kit 6 a 8 pessoas', 'Não', '24/12', '19h']];
  const preco = Object.fromEntries(t.kits.map((k) => [k.nome, k.preco]));
  const linhas = ex.map(([c, k, s, d, h]) => { const v = preco[k]; const pago = s === 'Sim' ? v / 2 : 0; return [c, k, brl(v), brl(v / 2, true), s, brl(v - pago, true), `${d} · ${h}`]; });
  return doc('Bônus 5 · Planilha de Pedidos e Sinal', capaB(5, 'Planilha de<br><em>Pedidos e Sinal</em>', 'Quem pediu, quanto pagou, quanto falta receber e a lista de compras do Natal.')
  + pag('PLANILHA · COMO USAR', `<h1>Como usar a planilha</h1>
  <p class="sub">O arquivo <b>planilha-pedidos-e-sinal.xlsx</b> está na área de membros, junto deste PDF. Abra no Google Planilhas (celular ou computador) ou no Excel.</p>
  <div class="etapas">
  ${etapa(1, 'Abra no Google Planilhas', '<p>No celular: baixe o arquivo, abra com o app Planilhas Google e toque em "Salvar como Planilhas Google". No computador: drive.google.com → Novo → Upload de arquivo → abra o arquivo.</p>')}
  ${etapa(2, 'Aba "Pedidos": um pedido por linha', '<p>Escolha o kit na lista. O valor, o sinal de 50% e o saldo aparecem sozinhos. Na coluna "Sinal pago?", marque <b>Sim</b> quando o sinal cair no Pix e <b>Quitado</b> quando o cliente pagar o saldo. O dia da entrega também se escolhe na lista (23/12, 24/12 ou 25/12).</p>')}
  ${etapa(3, 'Aba "Lista de compras": soma sozinha', '<p>Conforme você anota os pedidos de kit, a planilha soma quantos quilos, xícaras e unidades de cada ingrediente comprar.</p>')}
  ${etapa(4, 'Aba "Resumo": o seu Natal em números', '<p>Total vendido, sinal recebido, saldo a receber e pedidos <b>com sinal pago</b> por dia de entrega. Digite o seu limite: passou dele, o número fica vermelho.</p>')}
  ${etapa(5, 'Aba "Preços": os seus preços', '<p>Mudou o preço de um kit? Troque nesta aba e a planilha toda se atualiza.</p>')}
  </div>`)
  + pag('PLANILHA · COMO FICA', `<h1>Como fica a aba "Pedidos"</h1>
  ${tabela(['Cliente', 'Pedido', 'Valor', 'Sinal 50%', 'Sinal pago?', 'Saldo a receber', 'Entrega'], linhas, -1, [2, 3, 5])}
  <div class="box"><b>Regra de ouro:</b> pedido só conta no seu limite quando o sinal está pago. Sinal "Não" por mais de 48 h? Mande a mensagem abaixo e, sem resposta, libere a vaga.</div>
  <div class="msg">Oi, [nome]! Sua ceia para o dia [data] está separada, mas ainda não recebi o sinal de [valor]. Consegue mandar o Pix até amanhã? Depois disso preciso liberar a vaga, porque as encomendas estão quase fechando. 🎄</div>
  <h2>Pedido avulso (fora dos kits)</h2>
  <p>Escolha "Avulso" na coluna Pedido e digite o valor à mão. Na lista de compras, some os ingredientes avulsos usando a ficha de cada prato.</p>`));
}

// ============ BÔNUS 6 · CHECKLIST DA CEIA SEGURA
function checklist() {
  const lista = (itens) => `<ul class="check">${itens.map((i) => `<li>${md(i)}</li>`).join('')}</ul>`;
  return doc('Bônus 6 · Checklist da Ceia Segura', capaB(6, 'Checklist da<br><em>Ceia Segura</em>', 'Como guardar, transportar e entregar sem risco, e o que perguntar na prefeitura da sua cidade.')
  + pag('CEIA SEGURA · COMPRAS E COZINHA', `<h1>Checklist da Ceia Segura</h1><p class="sub">Comida vendida tem de chegar boa na mesa do cliente. Marque cada item.</p>
  <h2>Na compra</h2>${lista(['Carne, frango e frios: compre por último no mercado e vá direto para casa.', 'Confira a validade e a embalagem (sem estufar, sem amassar, sem vazamento).', 'Carne congelada: descongele **na geladeira** (1 dia para cada 2 a 2,5 kg), nunca na pia.'])}
  <h2>Na cozinha</h2>${lista(['Cabelo preso e coberto, unhas curtas, sem anel e sem pulseira.', 'Lave as mãos antes de começar, ao trocar de tarefa e sempre depois de mexer em carne crua.', 'Tábua e faca de carne crua separadas das de alimento pronto.', 'Ave crua **não se lava**: só seque com papel-toalha.', 'Pia, bancada e panos limpos; pano de prato trocado todo dia.', 'Animais fora da cozinha durante a produção.'])}
  <h2>No cozimento</h2>${lista(['Aves: **74 °C** no centro (caldo da coxa transparente).', 'Carne suína: **71 °C** no centro.', 'Maionese sempre **industrializada**, nunca caseira com ovo cru.', 'Sobremesas com ovo (pudim, pavê, cremes): o creme tem de ferver e engrossar no fogo.'])}`)
  + pag('CEIA SEGURA · GUARDAR, ETIQUETAR, ENTREGAR', `<h2 style="margin-top:0">Para guardar</h2>${lista(['Comida pronta fica no máximo **2 horas** fora da geladeira, contando do forno até a mesa do cliente.', 'Para esfriar rápido: divida em travessas rasas e leve à geladeira ainda morno.', 'Geladeira a **5 °C ou menos**; não lote: o ar frio precisa circular.', 'Cru embaixo, pronto em cima, tudo tampado.'])}
  <h2>A etiqueta de cada pote</h2>
  <div class="box verde"><b>Nome do prato</b> · <b>data de preparo</b> · <b>validade</b> · "manter na geladeira" · <b>como reaquecer</b> · <b>contém:</b> glúten, leite, ovos, castanhas (o que tiver).<br>Validade: <b>até 24 h</b> para saladas com maionese, salpicão e salada de frutas; <b>até 3 dias</b> na geladeira para assados, arroz, farofas, molhos e sobremesas. Exceções: panetone e brownie, até 5 dias bem embalados, em local fresco (na etiqueta, troque "manter na geladeira" por "manter em local fresco"); trufas, até 10 dias na geladeira.</div>
  <h2>Na entrega</h2>${lista(['Bolsa térmica com gelo reutilizável para os pratos frios; quente separado do frio.', 'Roteiro por bairro, para nenhum pedido ficar mais de 2 horas fora da geladeira.', 'Mande junto o cartão: "Guarde na geladeira até servir. Reaqueça até ficar bem quente no centro (75 °C)."', 'Prato que voltou de entrega ou ficou exposto **não se revende**.'])}
  <h2>Alergias</h2>${lista(['Pergunte no pedido: "alguém tem alergia ou restrição?" Anote na planilha.', 'Castanhas, nozes, leite, ovos e trigo aparecem em várias fichas: avise no cardápio e na etiqueta.'])}`)
  + pag('CEIA SEGURA · A SUA PREFEITURA', `<h1>Vender comida e a prefeitura</h1>
  <div class="box vinho"><b>As regras da vigilância sanitária mudam de município para município.</b> O que vale na cidade da sua amiga pode não valer na sua. Este checklist traz os cuidados com o alimento, mas não substitui a consulta à prefeitura.</div>
  <h2>O que perguntar à vigilância sanitária da sua cidade</h2>
  ${lista(['Preciso de licença ou alvará sanitário para vender comida feita em casa por encomenda?', 'Existe cadastro simplificado para quem produz em casa?', 'Preciso fazer curso de boas práticas de manipulação de alimentos? Onde tem de graça?', 'A minha cozinha precisa de alguma adequação?', 'Quais informações são obrigatórias na etiqueta?', 'Para emitir nota e formalizar o negócio (por exemplo, como MEI), qual atividade e quais documentos a prefeitura exige?'])}
  <h2>Onde procurar</h2>
  ${lista(['Site da prefeitura: busque por "vigilância sanitária" + o nome da sua cidade.', 'Telefone ou atendimento presencial da vigilância sanitária municipal.', 'Sala do Empreendedor ou Sebrae da sua cidade: orientam de graça sobre formalização e cursos de boas práticas.'])}
  <div class="box">Anote aqui o que a prefeitura respondeu:<br><span class="campo" style="width:100%;min-width:170mm"></span><br><span class="campo" style="width:100%;min-width:170mm"></span><br><span class="campo" style="width:100%;min-width:170mm"></span></div>`));
}

(async () => {
  const docs = [
    ['bonus-1-como-precificar', precificar()],
    ['bonus-2-almoco-do-dia-25', almoco()],
    ['bonus-3-calendario-anti-sufoco', calendario()],
    ['bonus-4-kits-prontos', kitsProntos()],
    ['bonus-5-planilha-como-usar', planilhaPdf()],
    ['bonus-6-checklist-da-ceia-segura', checklist()],
  ];
  for (const [nome, html] of docs) console.log(nome, await pdf(html, path.join(FINAL, nome + '.pdf'), path.join(HTML, nome + '.html')), 'KB');
  await fechar();
  // dados dos kits para a planilha
  fs.writeFileSync(path.join(__dirname, 'kits.json'), JSON.stringify(t.kits.map((k) => ({ nome: k.nome, preco: k.preco, linhas: k.linhas.map((l) => ({ n: l.n, tamanho: l.tamanho, mult: l.mult, principalKg: l.principalKg })) })), null, 1));
})();
