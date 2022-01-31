

class Prizes{
    constructor(ctx){
        this.ctx = ctx
        this.prizesArray = []
        this.x = 800
        this.y = 200
    }


draw(){
    this.prizesArray.forEach((prize)=>
    {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(prize[0], prize[1], 40, 60)}
    )
}

createRandomObjects(frameNumber){
    if (frameNumber % 100 === 0){
    let randomPositionX = Math.floor(Math.random() * this.ctx.canvas.width)
    let randomPositionY = Math.floor(Math.random() * this.ctx.canvas.height)
    let object = [randomPositionX, randomPositionY]
        this.prizesArray.push(object)
        
    }
}

removePrizes(frameNumber){
    if (frameNumber % 180 === 0){
    this.prizesArray.shift()
}}

}





