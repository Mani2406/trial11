const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    box1 = new Whiteox(700,320,70,70);
}

function draw() {
  background(255,255,255);  
  box1.display();
  drawSprites();
}