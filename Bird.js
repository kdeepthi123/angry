class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.trajectory = [];
    this.smokeImg=loadImage('sprites/smoke.png')
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.speed>3 && this.body.position.x>200){
      this.trajectory.push([this.body.position.x,this.body.position.y])
    }
    
   for(var i=0;i<this.trajectory.length;i++){
     image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1])
   }

    super.display();
  }
}
