const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

const prizes = new Prizes(ctx)
const obstacles = new Obstacles(ctx)
const player = new Player(ctx, 40, 40, prizes)

const game = new Game(ctx, player, prizes, obstacles)

const canvasX = canvas.getBoundingClientRect().left;
const canvasY = canvas.getBoundingClientRect().top;

this.canvas.addEventListener(
    "mousemove",
    (event)=>{
            player.x = event.clientX - canvasX - (player.width/2);
            player.y = event.clientY - canvasY - (player.height/2);
            }
        )

const startButton =  document.getElementById("start-button")
  startButton.onclick = ()=> {
    startButton.textContent = "Play Again"
   //startButton.blur();
    game.start();
  };
