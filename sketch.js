const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var states = 'onSling';
var bg,mybg;
var MSG;
function preload() {
    
    getData();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(bg){
        background(mybg);
    }
    

    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); 
    
    text(MSG,displayWidth/2,20)
}

function mouseDragged(){
    if(states==='onSling'){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    states = 'released';
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(bird.body,{x:200,y:50});
        bird.trajectory = []
        slingshot.attach(bird.body);
        states = 'onSling';
        
       
    }
}

async function getData(){
    data = await fetch('http://worldtimeapi.org/api/timezone/America/Bahia')
    var mydate = await data.json()
    var mytime = mydate.datetime
    hours = mytime.slice(11,13)
    console.log(hours)
    bg='sprites/bg.png'
   if(hours>6 && hours<18){
    bg='sprites/bg.png'
   }
   else {
    bg='sprites/bg2.jpg'
   }
   mybg=loadImage(bg)

   if(hours>6 && hours<12){
       MSG = ("Good Morning")
}else if(hours>12 && hours<19)
{
MSG = ("Good afternoon");
}    else{
    MSG = ("Good Night")
}
}