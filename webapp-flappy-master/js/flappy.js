// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score = 0;
var labelScore;
var player;
var pipes = [];
var pipeInterval = 1.75

var gameGravity = 200





/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
/*game.load.image("froggie", "../assets/flappy_frog.png");
game.load.audio("wack", "../assets/point.ogg");*/

game.load.image("playerImg", "../assets/flappy.png");
game.load.image("pipe", "../assets/pipe.png");
game.load.image("score", "../assets/point.ogg");
//game.load.image("pipeEnd", "../assets/pipe-end.png");
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
  game.stage.setBackgroundColor("#00ffee");
  /*game.add.text(350, 200, "Hello!", {font: "40px ComicSansMS"});
  game.add.sprite(730, 20, "froggie");
  game.add.sprite(20, 360, "froggie");
  game.add.sprite(730, 360, "froggie");
  game.add.sprite(20, 20, "froggie");*/
  //game.input.onDown.add(clickevent);
  game.add.text(20, 20, "Hello!");
  labelScore = game.add.text( 60, 60, "0");
  player = game.add.sprite(100, 200, "playerImg");
  player.anchor.setTo(0.5, 0.5);
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.enable(player);
  player.body.gravity.y = gameGravity;
  game.input.keyboard
  .addKey(Phaser.Keyboard.SPACEBAR)
  .onDown.add(playerJump);
  //game.time.events
  //.loop(pipeInterval * Phaser.Timer.SECOND, generate);
  /*game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
                   .onDown.add(moveDown);
  game.input.keyboard.addKey(Phaser.Keyboard.UP)
                   .onDown.add(moveUp);
  game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
                   .onDown.add(moveRight);
  game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
                   .onDown.add(moveLeft);*/
  generatePipe();
}


function update() {
  game.physics.arcade.overlap(player, pipes, gameOver);


  if(player.body.y < 0){
    gameOver();
  }
  if(player.body.y > 400){
    gameOver();
  }
}


function addPipeBlock(x, y) {
  var block = game.add.sprite(x,y,"pipe");
  pipes.push(block);
  game.physics.arcade.enable(block);
  block.body.velocity.x = -200;
}

function generatePipe() {
  var gapStart = game.rnd.integerInRange(1, 5);
  for (var count = 0; count < 8; count++) {
    if(count != gapStart && count != gapStart+1){
      addPipeBlock(750, count * 50);
    }
  }
  changeScore();
}


/*function clickevent(event){
  game.add.text(event.x + 75, event.y + 75, "I wish this was undertale");
  changescore();
}*/


/*function spacevent(event){
  game.sound.play("wack")
}*/

function playerJump() {
  player.body.velocity.y = - 200;
}

function changescore(){
  score = score + 1;
  labelScore.setText(score.toString());
}


/*function moveRight() {
player.x = player.x + 10;
}

function moveLeft() {
player.x = player.x - 10;
}

function moveUp() {
player.y = player.y - 10;
}

function moveDown() {
player.y = player.y + 10;
}*/


/*function addPipeBlock(x, y) {
  var block = game.add.sprite(x, y, "pipe");
  pipes.push(block);
}

function generatePipe() {
  var gapStart = game.rnd.integerInRange(1, 5);
  for (var count = 0; count < 8; count = count + 1) {
    if(count != gapStart && count != gapStart + 1){
      addPipeBlock(750, count * 50);
    }
  }
}*/


function gameOver() {
  game.destroy();
}
