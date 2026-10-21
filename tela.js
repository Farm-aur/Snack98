const tela ={
    largura:800,
    altura:400,
    cor:"green",
    desenhar: function(){
        canvasCtx.fillStyle= this.cor;
        canvasCtx.fillRect(0,70,this.largura,this.altura);
    }
    }