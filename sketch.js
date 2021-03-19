const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero;
var ground;


function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create;
  world = engine.world;
  // create sprites here

  //hero = new Hero();
  ground = new Ground(1500,750,3000,20);
}

function draw() {
  background("grey");

  ground.display();
}

