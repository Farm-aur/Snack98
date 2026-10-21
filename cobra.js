const cobra = 
{
    x:400,
    y:250,
    tamanho:13,
    cor:"red",
    direcao:"direita",
    vida:3,
    desenhar()
    {
        canvasCtx.fillStyle=this.cor;
        canvasCtx.fillRect(this.x,this.y,this.tamanho,this.tamanho);
    },
    mover()
    {
     if(this.direcao =='direita')this.x++;
     if(this.direcao =='esquerda')this.x--;
     if(this.direcao =='baixo')this.y++;
     if(this.direcao =='cima')this.y--;
    }
 }
