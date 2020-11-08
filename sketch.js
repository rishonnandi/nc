
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roofObject=new Ground(width/2,height/4,width/7,20);
	bobDiameter=40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(350,350,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofObject.display();
  drawSprites();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
}



