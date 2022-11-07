function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraVaquinha();
  movimentacaoVaquinha();
  mostraCarros();
  movimentacaoCarros();
  voltarPosicaoInicial();
  verificaColisao();
  inseriPontos();
  marcaPonto();
}

