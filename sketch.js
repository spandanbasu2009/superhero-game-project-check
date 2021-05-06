const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero;
var ground;
var bg = "sky.jpg";
var monster;
var slingshot;
var blocks = [];
var block;

function preload() {
//preload the images here
bg = loadImage("sky.jpg");
}

function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  hero = new Hero(200,300,400);
  ground = new Ground(400,600,3000,10);
  monster = new Monster(800,300,200,200);
  for(var i = 0; i<7; i++){
      block = new Block(450,200);
      blocks.push(block);
      block = new Block(500,200);
      blocks.push(block);
      block = new Block(550,200);
      blocks.push(block);
  }
  slingshot = new SlingShot(hero.body,{x:100,y:200})
}

function draw() {
  background(bg);

  if(hero.body.x >= monster.body.x){
    monster.body.y = monster.body.y+400;
  }

  ground.display();
  monster.display();
  hero.display();
  slingshot.display();
  for(var i = 0; i<blocks.length; i++){
    blocks[i].display();
  }
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  //slingshot.fly();
}

