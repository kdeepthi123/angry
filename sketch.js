var box;
function preload(){
  backgroundImg = loadImage("images/snowBackground.png"); 
  penguinImg = loadAnimation("images/penguin1.png","images/penguin2.png","images/penguin3.png","images/penguin4.png","images/penguin5.png","images/penguin6.png","images/penguin7.png","images/penguin8.png"); 
  glacierImg = loadImage("images/glacier.jpg"); 
  polarBearImg = loadImage("images/polarBear.png"); 
  snowBallImg = loadImage("images/snowBall.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  penguin = createSprite(150,windowHeight-40,30,30);
  penguin.addAnimation("player",penguinImg)

}

function draw() 
{
   background(backgroundImg);

 
  drawSprites();
}




