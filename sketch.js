var sprite1, sprite2, sprite3, sprite4;
var movingSprite;




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	movingSprite=createSprite(random(20,750),300,20,20);
	movingSprite.shapeColor="white";
	movingSprite.velocityX=5;
	movingSprite.velocityY=5;

	sprite1=createSprite(100,590,180,20);
	sprite1.shapeColor="red";

	sprite2=createSprite(300,590,180,20);
	sprite2.shapeColor="green";

	sprite3=createSprite(500,590,180,20);
	sprite3.shapeColor="blue";

	sprite4=createSprite(700,590,180,20);
	sprite4.shapeColor="yellow";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(rgb(169,169,169));
   edges=createEdgeSprites();
    movingSprite.bounceOff(edges);


  
if(sprite1.isTouching(movingSprite)) {
	movingSprite.bounceOff(sprite1);
	movingSprite.shapeColor="red";
}

if(sprite3.isTouching(movingSprite)) {
	movingSprite.bounceOff(sprite3);
	movingSprite.shapeColor="blue";
}

if(sprite2.isTouching(movingSprite)) {
	movingSprite.bounceOff(sprite2);
	movingSprite.shapeColor="green";
}
if(sprite4.isTouching(movingSprite)) {
	movingSprite.bounceOff(sprite4);
	movingSprite.shapeColor="yellow";
}

  drawSprites();
 
}



