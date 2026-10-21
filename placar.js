const placar = {
    largura:800,
    altura:70,
corFundo:"black",
corTexto:"white",
pontuacao:0,
desenhar(){
    canvasCtx.fillStyle=this.corFundo;
    canvasCtx.fillRect(0,0,this.largura,this.altura);
    canvasCtx.fillStyle = this.corTexto;
    canvasCtx.font = '18px Fantasy';
    canvasCtx.textAling = 'center';
    canvasCtx.textBaseline = 'middle';
    canvasCtx.fillText("Snake98",375,35);
    canvasCtx.font = '12px Fantasy';
    canvasCtx.textAling = 'left';
    canvasCtx.textBaseline = 'top';
    canvasCtx.fillText(this.pontuacao +' pontos',10,40);
}
}