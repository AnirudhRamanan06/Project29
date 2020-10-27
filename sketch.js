const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var box,Hexagon;
var ground,background;
var stand1,stand2;
var block1,block2,block3,block4;
var block5,block6,block7,block8;
var block9,block10,block11,block12;
var block13,block14,block15,block16;
var block17,block18,block19,block20;
var block21,block22,block23,block24,block25;

function preload(){

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var stand1 = createSprite(400, 20, 100, 20);
  var stand2 = createSprite(40, 200, 70, 20);

  ground=new Ground(400, 200, 800, 20);

  slingShot=new SlingShot(this.Hexagon,{x:100,y:200});

//No.1
 //level one
 block1= new Block(300,275,30,40);
 block2= new Block(330,275,30,40);
 block3= new Block(360,275,30,40);
 block4= new Block(390,275,30,40);
 block5= new Block(420,275,30,40);
 block6= new Block(450,275,30,40);
 block7= new Block(480,275,30,40);
 //level two
 block8= new Block(330,235,30,40);
 block9= new Block(360,235,30,40);
 block10= new Block(390,235,30,40);
 block11= new Block(420,235,30,40);
 block12= new Block(450,235,30,40);
 //level three
 block13= new Block(360,195,30,40);
 block14= new Block(390,195,30,40);
 block15= new Block(420,195,30,40);
 //top
 block16=new Block(390,155,30,40);

 //No.2
 //level one 
 block17= new Block(530,155,30,40);
 block18= new Block(560,155,30,40);
 block19= new Block(590,155,30,40);
 block20= new Block(620,155,30,40);
 block21= new Block(650,155,30,40);
 //level two
 block22= new Block(560,115,30,40);
 block23= new Block(590,115,30,40);
 block24= new Block(620,115,30,40);
 //top
 block25=new Block(590,75,30,40);
  
}

function mouseDragged(){
    Matter.body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   slingShot.fly();
}

function draw() {
  background(255,255,255);  
    Engine.update(engine);
    strokeWeight(4);
    box.display();
    ground.display();
    slingShot.display();    


  drawSprites();
   text("Drag the hexagonal stone and release it, to launch it towards the blocks",300,100);
}