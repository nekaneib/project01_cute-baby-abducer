const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

canvas.width = 800;
canvas.height = 600;

const background = new Background(ctx)
const prizes = new Prizes(ctx)
const obstacles = new Obstacles(ctx)
const player = new Player(ctx, prizes)

const game = new Game(ctx, player, prizes, obstacles, background)

const canvasX = canvas.getBoundingClientRect().left;
const canvasY = canvas.getBoundingClientRect().top;

const startButton =  document.getElementById("start-button")
const startPage =  document.getElementById("startPage");
const gameBoard =  document.getElementById("game");



  startButton.onclick = ()=> {
    startButton.textContent = "Play Again";
    canvas.focus();
    startPage.classList.toggle("hidden")
    gameBoard.classList.toggle("hidden")
    game.start();
  };
  
  
  this.canvas.addEventListener(
      "mousemove",
      (event)=>{
              player.x = event.clientX - canvasX - (player.width/2);
              player.y = event.clientY - canvasY - (player.height/2);
              }
          )