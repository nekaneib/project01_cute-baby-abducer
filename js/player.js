class Player{
    constructor(ctx, width, height){
        this.ctx = ctx
      
        this.width = width
        this.height = height

        this.x = 100
        this.y = 100

        this.speedX = 200;
        this.speedY = 400
    }

draw(){
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y,  this.width, this.height);
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

checkCollisionDead(){
    let playerCheck = this.ctx.getImageData(this.x, this.y,  this.width, this.height)

    for(let i = 0; i < playerCheck.data.length; i ++){
      if(playerCheck.data[i] === 254) game.gameOver()
    }
    
}

checkCollisionScoreUp(){
    let playerCheck = this.ctx.getImageData(this.x, this.y,  this.width, this.height)

    for(let i = 0; i < playerCheck.data.length; i ++){
      if(playerCheck.data[i] === 251) game.score +=1
          //for(let j = 0; j < prizes.prizesArray.length; j++){
          //}
          //{ game.score +=1
    }
}

}




