
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 1500);


	engine = Engine.create();
	world = engine.world;

	var ball_options={

		isStatic:false,
		restitution:0.5,
		friction:0,
		density:1.2


	}
	//Create the Bodies Here.
ball = Bodies.circle (100,100,40,ball_options);
World.add (world,ball);
ellipseMode(RADIUS);
	

	groundObj = new Ground (width/2,670,width,20);
	leftSide = new Ground (800,600,20,120);
	rightSide = new Ground (1000,600,20,120);

	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 groundObj.display();
leftSide.display();
rightSide.display();
ellipse(ball.position.x, ball.position.y, 40)
Engine.update (engine);
}


function keyPressed () {
	if (keyCode === UP_ARROW) {


		Matter.Body.applyForce(ball,ball.position,{x:250,y:-500});
	}
}

class Ground
{
constructor(x,y,w,h)
{
    let options = {
        isStatic:true
    };


this.body = Bodies.rectangle(x, y, w, h, options);
this.w = w;
this.h = h;
World.add(world, this.body);
}

display() {
    var pos = this.body.position
    push();
    rectMode(CENTER);
    stroke(255)
    fill (127);
    rect(pos.x,pos.y,this.w,this.h);
    pop();
}




}