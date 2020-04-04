const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
   var ball_options = {
   restitution:2,
   friction:100
 }
 var ball2_options = {
restitution:2,
friction:100
 }
    World.add(world,ground);
    ball = Bodies.rectangle(300,200,20,20,ball_options)
   World.add(world,ball)
   ball2 = Bodies.circle(200,200,60,ball2_options)
   World.add(world,ball2)
   console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
rect(ball.position.x,ball.position.y,20,20)
ellipseMode(RADIUS)
ellipse(ball2.position.x,ball.position.y,60,60)









}