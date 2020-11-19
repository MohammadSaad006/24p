const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myEngine,myWorld
var paper
var dastbin
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	myEngine= Engine.create();
	myWorld= myEngine.World;
	paper =new Paperball(810,260,PI/2)
	

	//Create the Bodies Here.
	Engine.run(engine);
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  
 
}



