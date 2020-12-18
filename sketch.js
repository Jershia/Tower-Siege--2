const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;

function setup(){
     createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    polygon = new Polygon(50,200,20);
    ground = new Ground(200,490,2000,20);
    stand1 = new Ground(550,350,300,20);
    stand2 = new Ground(1000,200,300,20);
    slingshot = new SlingShot(polygon.body,{x:100,y:200});
    box1 = new Box(420,310,50,50);
    box2 =new Box(470,310,50,50);
    box3 = new Box(520,310,50,50);
    box4 = new Box(570,310,50,50);
    box5 = new Box(620,310,50,50);
    box6 = new Box(670,310,50,50);
    box7 = new Box(470,270,50,50);
    box8 = new Box(520,270,50,50);
    box9 = new Box(570,270,50,50);
    box10 = new Box(620,270,50,50);
    box11 = new Box(520,240,50,50);
    box12 = new Box(570,240,50,50);
    box13 = new Box(550,170,50,50);
    box14 = new Box(900,160,50,50);
    box15 = new Box(950,160,50,50);
    box16 = new Box(1000,160,50,50);
    box17 = new Box(1050,160,50,50);
    box18 = new Box(1100,160,50,50);
    box19 = new Box(950,130,50,50);
    box20 = new Box(1000,130,50,50);
    box21 = new Box(1050,130,50,50);
    box22 = new Box(1000,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
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
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    ground.display();
    stand1.display();
    stand2.display();
    polygon.display();
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(polygon.body);  
    }
}
