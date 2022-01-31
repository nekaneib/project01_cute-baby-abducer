class Obstacles{
    constructor(ctx){
        this.ctx = ctx
        this.obstaclesArray = []
        this.x = 800
        this.y = 200
    }

draw(){
    this.obstaclesArray.forEach((obstacle)=>
    {
        this.ctx.fillStyle = "blue"
        this.ctx.fillRect(obstacle[0], obstacle[1], 30, 30)}
    )
}

createRandomObjects(frameNumber){
    if (frameNumber % 120 === 0){
    let randomPositionX = Math.floor(Math.random() * this.ctx.canvas.width)
    let randomPositionY = Math.floor(Math.random() * this.ctx.canvas.height)
    let object = [randomPositionX, randomPositionY]
        this.obstaclesArray.push(object)
    }
}
removeObjects(frameNumber){
    if (frameNumber % 160 === 0){
    this.obstaclesArray.shift()
    }
}
}