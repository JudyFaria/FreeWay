//Lista

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 265, 318];
let velocidadeCarros = [4, 2.7, 3.2, 4, 3.5, 3];
let comprimentoCarros = 50;
let alturaCarros = 40;

//Mostra Carros

function mostraCarros(){
  for (let i = 0; i < imgCarros.length; i++ )
    image(imgCarros[i], xCarros[i],yCarros[i], 50, 40);
}


function movimentacaoCarros(){
  
  for (let i = 0; i < imgCarros.length; i++)
    xCarros[i] -= velocidadeCarros[i];
  
}

function voltarPosicaoInicial(){
  for (let i = 0; i < imgCarros.length; i++){
    if (passouDaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouDaTela(xCarros){
  return xCarros < -50;
}