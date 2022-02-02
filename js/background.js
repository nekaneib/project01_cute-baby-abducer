class Background{
    constructor(ctx){
        this.ctx = ctx
        
    this.background = {
        img: new Image(),
        x: 0,
        y: 0,
        width: this.ctx.canvas.width,
        height: this.ctx.canvas.height
    }

    this.background.img.src = "images/background2.jpg";
    }

draw(){
    this.ctx.drawImage(
        this.background.img,
        this.background.x,
        this.background.y,
        this.background.width,
        this.background.height
        )
    }
}
