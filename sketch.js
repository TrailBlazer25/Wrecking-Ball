const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var platform;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
    
    box1 = new box(700,525,100,100);
    box2 = new box(800,525,100,100);
    box3 = new box(900,525,100,100);
    box4 = new box(700,475,100,100);
    box5 = new box(800,475,100,100);
    box6 = new box(900,475,100,100);
    box7 = new box(700,425,100,100);
    box8 = new box(800,425,100,100);
    box9 = new box(900,425,100,100);
    box10 = new box(700,375,100,100);
    box11 = new box(800,375,100,100);
    box12 = new box(900,375,100,100);

    platform = new ground(600,590,1200,20);

    ball1 = new ball(575,100,50);

    sling = new slingshot(ball1.body,{x:575,y:40});
}

function draw(){
    background("cyan");
    Engine.update(engine);

    //mouseDragged();
    //mouseReleased();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    platform.display();
    ball1.display();
    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}