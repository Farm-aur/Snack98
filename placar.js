const placar = {
    qtdPontos:0,
    recorde:0,
    largura:800,
    altura:70,
    nomeJogador:"Clique na tela para iniciar...",
nomeJogo:"Snack98",
corFundo:"grey",
corTexto:"white",
desenhar(){
    canvasCtx.fillStyle = this.corFundo;
    canvasCtx.fillRect(0,0,this.largura,this.altura);
}
}
placar.desenhar();