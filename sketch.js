const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,floor,box1;

var ball,rope;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
//var options = {
   // frictionAir = 1,
   // density = 1,
   // isStatic = true
//}
    ball = Bodies.circle(200,200,20);
    World.add(world,ball);
    rope = new Chain(ball,{x:200,y:50})
var options2 = {
    isStatic:true
}
    floor = Bodies.rectangle(0,350,width*2,100,options2);
    World.add(world,floor);
    box1 = new Box(300,0);
}

function draw(){
    background("white");
 Engine.update(engine);
 var pos = ball.position;
 var pos2 = floor.position; 
 fill("black");
 ellipse(pos.x,pos.y,20);
 rope.display();
 fill("black");
 rect(pos2.x,pos2.y,width,20);
 box1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}