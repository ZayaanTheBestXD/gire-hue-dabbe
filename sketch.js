const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var box,box2,ground;


function setup() {
  createCanvas(800,400);
  //to create your own engine
  engine=Engine.create()
  //your own world
  world=engine.world
  // your own physical body
  //customize with options
  
  //create objects
  box= new Box(450,50,80,70);
  box2= new Box(400,150,80,70);

  ground = new Ground(400,360,800,35)
   console.log(box)
  
}

function draw() {
  background(0);
  Engine.update(engine)  

  box.display();
  box2.display();
  ground.display();
  
}





















