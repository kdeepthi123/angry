var MENU = 0;
var PLAY = 1;
var END = 2;
var gameState = MENU;
var score = 0;
var coinsCollected = 0;

function preload(){
  backgroundImg = loadImage("images/snowBackground.png"); 
  penguinImg = loadAnimation("images/penguin1.png","images/penguin2.png","images/penguin3.png","images/penguin4.png","images/penguin5.png","images/penguin6.png","images/penguin7.png","images/penguin8.png"); 
  glacierImg = loadImage("images/glacier.jpg"); 
  polarBearImg = loadImage("images/polarBear.png"); 
  snowBallImg = loadImage("images/snowBall.jpg");
  startImg = loadImage("images/startbutton.png");
  restartImg = loadImage("images/restartbutton.png");
  titleImg = loadImage("images/APenguin'sQuestTitle2.png");
  instructionsButtonImg = loadImage("images/instructionsButton.png");
  instructionsImg = loadImage("images/instructions.png");
  instructionsTitleImg = loadImage("images/instructionsTitle1.png");
  backButtonImg = loadImage("images/backButton1.png");
  scoreImg = loadImage("images/scoreImg.png");
  coinImg = loadImage("images/coinImg.png");
  gameOverImg = loadImage("images/gameOverImg.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  ground = createSprite(windowWidth/2,680,windowWidth * 2,160);
  ground.shapeColor = "#9ED8F0";
  ground.visible = false;

  penguin = createSprite(150,windowHeight-100,30,30);
  penguin.addAnimation("player",penguinImg);
  penguin.scale = 0.8;
  penguin.visible = false;

  start = createSprite(windowWidth/2,windowHeight/1.7);
  start.addImage("start",startImg);
  start.scale = 0.8;

  title = createSprite(windowWidth/2,windowHeight/2.6);
  title.addImage("title",titleImg);

  instructionsButton = createSprite(1202,690);
  instructionsButton.addImage("instructionsButton",instructionsButtonImg);

  instructionsTitle = createSprite(196,145);
  instructionsTitle.addImage("instructionsTitle",instructionsTitleImg);
  instructionsTitle.visible = false;

  instructions = createSprite(windowWidth/2,windowHeight/2);
  instructions.addImage("instructions",instructionsImg);
  instructions.visible = false;

  backButton = createSprite(80,650);
  backButton.addImage("backButton",backButtonImg);
  backButton.scale = 0.7;
  backButton.visible = false;

  score2 = createSprite(110,35);
  score2.addImage("scoreImg",scoreImg);
  score2.scale = 0.8;
  score2.visible = false;

  coin2 = createSprite(103,95);
  coin2.addImage("coinImg",coinImg);
  coin2.scale = 0.8;
  coin2.visible = false;

  //gameOver = createSprite(windowWidth/2,windowHeight/3);
  //gameOver.addImage("gameOverImg",gameOverImg);
  //gameOver.scale = 1.3;
}
function draw(){
  background(backgroundImg);

if(gameState === MENU){

  if(mousePressedOver(start)){
    title.visible = false;
    start.visible = false;
    instructionsButton.visible = false;
    penguin.visible = true;
    ground.visible = true;
    score2.visible = true;
    coin2.visible = true;
    gameState = PLAY;
  }

  if(mousePressedOver(instructionsButton)){
    title.visible = false;
    start.visible = false;
    instructionsButton.visible = false;
    instructionsTitle.visible = true;
    instructions.visible = true;
    backButton.visible = true;
  }
  
  if(mousePressedOver(backButton)){
    title.visible = true;
    start.visible = true;
    instructionsButton.visible = true;
    instructionsTitle.visible = false;
    instructions.visible = false;
    backButton.visible = false;
  }
}

if(gameState === PLAY){
  textSize(60);
  fill("#000000");
  text(score,215,58);
  score = score + Math.round(getFrameRate()/40)

  textSize(60);
  fill("#000000");
  text(coinsCollected,200,118);
}

if(gameState === END){
  //Game Over text image
  //Restart button
  //Home button
}

  drawSprites();
}




