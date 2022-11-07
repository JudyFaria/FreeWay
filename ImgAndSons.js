//Imagens e Sons do Jogo

let imgEstrada;
let imgVaquinha;
let imgCarroVerde;
let imgCarroPreto;
let imgCarroAmarelo;

let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imgEstrada = loadImage("Imagens/estrada.png")
  imgVaquinha = loadImage("Imagens/vaquinha.png")
  imgCarroVerde = loadImage("Imagens/carro-1.png")
  imgCarroPreto = loadImage("Imagens/carro-2.png")
  imgCarroAmarelo = loadImage("Imagens/carro-3.png")
  
  somTrilha = loadSound("Sons/trilha.mp3");
  somColisao = loadSound("Sons/colidiu.mp3");
  somPonto = loadSound("Sons/pontos.wav");
  
  

  imgCarros = [imgCarroVerde, imgCarroPreto, imgCarroAmarelo, imgCarroVerde, imgCarroPreto, imgCarroAmarelo]
}