const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
let ground;
let rope1;
let fruit;
let fruit_con;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground = new Ground(250, 690, 700, 10);
  rope1 = new Rope(6,{x:400,y:250});

  var fruit_options = {
    density: 0.01,
  }
  fruit = Bodies.circle(300,300,10,fruit_options);
  Matter.Composite.add(rope1.body, fruit);

  fruit_con = new Link(rope1,fruit);


}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.display();
  rope1.show();
  ellipse(fruit.position.x,fruit.position.y,15,15);
}




