// Textos fixos das páginas de missão (página do adulto, missão e gabarito), por idioma.
// PT é o original aprovado; o en-US vem da Tradução (traducao/en-US/imagens-criativos-final.md).
// {nd} = número da etapa "desenhe o problema".
const pt = {
  lang: 'pt-BR',
  adultoTopo: 'Para o adulto · leia antes (2 minutos)',
  tempo: 'Tempo:', pratica: 'Pratica:', material: 'Material:',
  materialTxt: 'lápis, borracha e esta folha impressa (opcional: relógio de ponteiros, feijões ou tampinhas).',
  metodoTit: 'O método nesta missão: desenhe antes de calcular',
  metodoTxt: 'A etapa {nd} é a etapa <b>“desenhe o problema”</b>. Nela, a criança passa pelos 3 passos do método de Singapura (detalhes no Guia para Pais):',
  metodoTxtFech: 'Esta é a <b>Missão de Fechamento</b> do nível: as 4 etapas são de desenho, e cada uma usa um dos desenhos que a criança já domina. Em cada etapa, ela passa pelos 3 passos do método de Singapura (detalhes no Guia para Pais):',
  conduzir1Fech: '<b>Leia a abertura em voz alta, com clima de mistério.</b> Aqui as 4 etapas são de desenho: reserve mais tempo e, se precisar, divida a missão em 2 dias.',
  conduzirFech: '<b>Feche pedindo:</b> “Me explica os seus 4 desenhos.” Para passar de nível, a palavra-código precisa fechar e a criança precisa explicar sozinha pelo menos 3 dos 4 desenhos.',
  passo1: '1. Concreto', passo2: '2. Desenho', passo3: '3. Conta',
  passo2Txt: 'A criança desenha a barra e põe <b>?</b> no que quer descobrir. Só depois faz a conta.',
  passo3Txt: 'Com o desenho pronto, ela escreve a conta e confere a resposta olhando o desenho.',
  conduzirTit: 'Como conduzir',
  conduzir: [
    '<b>Leia a abertura em voz alta, com clima de mistério.</b> A 1ª etapa é curtinha, de propósito: é para a criança entrar no jogo rápido.',
    '<b>Não diga qual conta fazer.</b> O enunciado não diz se é de mais, de menos ou de vezes. Descobrir isso é o exercício, e o desenho é o que mostra a resposta.',
    '<b>Se a criança travar, peça o desenho antes de qualquer ajuda:</b> “Me mostra isso numa barra.” Depois use a pergunta de apoio do gabarito (última página). Ela ajuda sem entregar a resposta.',
    '<b>Cada resposta vira uma letra.</b> Se a palavra-código não fizer sentido, alguma conta está errada: voltem ao desenho e procurem juntos.',
    '<b>Feche pedindo:</b> “Me explica o seu desenho da etapa {nd}.”',
  ],
  antesAvancar: 'Antes de avançar:',
  irmaosTit: 'Com irmãos',
  irmaosTxt: 'Imprima as páginas da missão uma vez e resolvam juntos, trocando de papel a cada etapa: <b>leitor</b> (lê em voz alta), <b>desenhista</b> (faz a barra) e <b>calculista</b> (faz a conta e confere no desenho). Com 2 crianças, o leitor também desenha. Se estiverem em níveis diferentes, cada um faz a missão do seu nível e, no fim, os dois contam um ao outro como desenharam.',
  rodapeAmostra: 'missão de amostra',
  tagCurta: 'rapidinha', tagDesenho: 'desenhe o problema',
  desenheLbl: '1º DESENHE',
  calculeLbl: '2º CALCULE: a conta que o desenho mostrou',
  espacoLbl: 'Espaço para pensar e fazer a conta',
  minhaResposta: 'Minha resposta:',
  dica: '<b>DICA:</b> nenhuma pista diz qual conta fazer. Leia com calma, descubra o que está sendo pedido e escolha a conta. Na dúvida, desenhe.',
  missaoTopo: 'Missão', missaoCont: 'Missão (continuação)',
  codigoTit: 'Abra o código', codigoTxt: '· procure cada resposta na tabela e escreva a letra na caixa da etapa',
  oQueAconteceu: 'O que aconteceu?',
  etapa: 'Etapa', letra: 'letra',
  comoPensar: 'Como pensar:', conta: 'Conta:',
  desenhoEsperado: '<b>O desenho esperado</b> (vale qualquer desenho com as mesmas partes):',
  seTravar: 'Se travar, pergunte:',
  erroComum: 'Erro mais comum:', erroResponder: 'responder', erroQuando: 'quando a criança',
  erroFim: 'Essa resposta leva a outra letra, e a palavra não fecha.',
  gabTopo: 'Gabarito explicado · para o adulto', gabTit: 'Gabarito:', gabRodape: 'gabarito',
  palavraCodigo: 'Palavra-código:',
};

module.exports = { pt };
try { module.exports.en = require('./textos-fixos.en'); } catch (e) { /* en-US ainda não existe */ }
