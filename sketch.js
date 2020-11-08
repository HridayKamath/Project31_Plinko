

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];
var k ;

var divisionHeight = 300;



function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);

   ka = new Division(100,100,20,10);
  //ax = new Particle(100,200,30);
  
  /*for(var k = 0;k<=width; k=k+80){
    divisions.push(new Division(k,height - divisionHeight/2,10,divisionHeight));
    display();

  }*/
  
  

  
}

function draw() {
  background("black"); 
  
  Engine.update(engine);

  ground.display();
  
  //ka.display();
  
  for(var k = 0;k<=width; k=k+80){
    divisions.push(new Division(k,height - divisionHeight/2,10,divisionHeight));
   // ka.display();

  }
  

  
  

}