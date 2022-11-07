//Variáveis da Vaquinha
let yVaquinha = 370;
let xVaquinha = 100;
let meusPontos = 0;

function mostraVaquinha(){
  image(imgVaquinha, xVaquinha, yVaquinha, 30, 30);
}

function movimentacaoVaquinha(){
  if (keyIsDown(UP_ARROW)){
    yVaquinha -= 3;
  }
   if (keyIsDown(DOWN_ARROW)){
     
     if (yVaquinha < 370){
       yVaquinha += 3;
     }
  }
}

function verificaColisao(){
  
  for ( i = 0; i < imgCarros.length; i++){
    
     //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    
    colisao = collideRectCircle( xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xVaquinha, yVaquinha, 15)
    
    if (colisao){      
      voltaParaPosicaoInicial();
      somColisao.play();
      
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function voltaParaPosicaoInicial(){
  yVaquinha = 370;
}

function inseriPontos(){
  textAlign(CENTER)
  text(meusPontos, width / 5 , 27)
  textSize(25)
  fill(231, 76, 60)
  
}
  
function marcaPonto(){
  
    if (yVaquinha < 15){
    meusPontos += 1;
    somPonto.play();
    voltaParaPosicaoInicial();
    
  }
  
}




