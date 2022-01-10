var sea,seaIMG;
var ship,shipanimation;

function preload(){
  shipanimation=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaIMG=loadImage("sea.png");
  
}

function setup(){
  createCanvas(400,300);
  sea=createSprite(450,150,400,150);
  sea.addImage(seaIMG);
  sea.scale=0.20;
  sea.velocityX=-3;
  

  ship=createSprite(200,180,10,10);
  ship.addAnimation("ship_animation",shipanimation);
  ship.scale=0.23;
  
}

function draw() {
  background("white");
  
 if (sea.x <-0){
  sea.x=width/2;
  }
  move();
  drawSprites(); 
}



function move(){
  if (keyDown("up_arrow")){
    ship.y=ship.y -2;
  }
  if(keyDown("down_arrow")){
    ship.y=ship.y +2;
  }
  if(keyDown("left_arrow")){
    ship.x=ship.x -2;
  }
  if(keyDown("right_arrow")){
    ship.x=ship.x +2;
  }
}