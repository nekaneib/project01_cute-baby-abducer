class Player{
    constructor(ctx){
        this.ctx = ctx
      
        this.width = 80
        this.height = 80

        this.x = 100
        this.y = 100

        this.speedX = 200;
        this.speedY = 400
    }

draw(){
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y, 40, 40);
}

move(){
    this.x = this.speedX
    this.y = this.speedY
    this.isOutOfCanvas()
}


isOutOfCanvas(){
    if(this.x > this.ctx.canvas.width){
        this.x = 0;
        this.speedX = 0
    } else if(this.x < 0){
        this.x = this.ctx.canvas.width - this.width;
        this.speedX = this.ctx.canvas.width - this.width
    } else if (this.y > this.ctx.canvas.height){
         this.y = 0;
         this.speedY = 0
    } else if (this.y < 0){
        this.y = this.ctx.canvas.height - this.height;
        this.speedY = this.ctx.canvas.height - this.height
    }
}

}




