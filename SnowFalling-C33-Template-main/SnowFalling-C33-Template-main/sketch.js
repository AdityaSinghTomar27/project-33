const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,backgroundimg;
var Child,childimg;



function preload () {
 // getBackgroundImg();
 backgroundimg = loadImage( "snow1.jpg");
 //childimg = loadImage("running 1.png");
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
 world = engine.world

 Child =  createSprite(400, 200, 50, 50);
// Child.addImage(childimg);
 snow1 = new snow(100,-40);
 

 
  
}



function draw() {
  background(backgroundimg); 
  Engine.update(engine);
  
  snow1.display();

  drawSprites();
  
}

