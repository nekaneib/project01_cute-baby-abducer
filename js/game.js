class Game{
    constructor(ctx, player, prize, obstacles){
        this.ctx = ctx;
        this.player = player;
        this.prizes = prize;
        this.obstacles = obstacles;
        this.frameNumber = 0;
        this.score = 0;

    document.addEventListener('keydown', (e) => {
        switch (e.keyCode) {
            case 38: // up arrow
            this.player.speedY -= 8;
            break;
            case 40: // down arrow
            this.player.speedY += 8;
            break;
            case 37: // left arrow
            this.player.speedX -= 8;
            break;
            case 39: // right arrow
            this.player.speedX += 8;
            break;
        }
        })
        
    }

start(){
    this.move()
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.prizes.createRandomObjects(this.frameNumber)
    this.obstacles.createRandomObjects(this.frameNumber)
    this.draw()
    this.player.checkCollisionDead()
    //this.player.checkCollisionScoreUp()
    this.player.isOutOfCanvas()
    if (this.frameNumber !== null) {
        this.frameNumber = requestAnimationFrame(this.start.bind(this));
      }
   
}

draw(){
    this.player.draw()
    this.prizes.draw(this.frameNumber)
    this.obstacles.draw(this.frameNumber)
    this.prizes.removePrizes(this.frameNumber)
    this.obstacles.removeObjects(this.frameNumber)
}

move(){
    this.player.move()
   
}

stop(){
    cancelAnimationFrame(this.frameNumber) 
    this.frameNumber = null
}

/*
gameOver(){
    if(this.player.checkCollisionDead()) this.stop
}
*/

//checkCollisionScoreUp()

}


