const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

const player = new Player(ctx)
const prizes = new Prizes(ctx)
const obstacles = new Obstacles(ctx)

const game = new Game(ctx, player, prizes, obstacles)


//
const startButton =  document.getElementById("start-button")
  startButton.onclick = ()=> {
    startButton.textContent = "Play Again"
   //startButton.blur();
    game.start();
  };