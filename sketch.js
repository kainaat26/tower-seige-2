const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;



function preload() {
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,400,300,8);
    ground2 = new Ground(880,200,250,8);
    ground3 = new Ground(600,600,1200,10);
    
    block1 = new Box(500,370,40,50);
    block2 = new Box(540,370,40,50);
    block3 = new Box(580,370,40,50);
    block4 = new Box(620,370,40,50);
    block5 = new Box(660,370,40,50);
    block6 = new Box(700,370,40,50);

    block7 = new Box(540,320,40,50);
    block8 = new Box(580,320,40,50);
    block9 = new Box(620,320,40,50);
    block10 = new Box(660,320,40,50);

    block11 = new Box(580,270,40,50);
    block12 = new Box(620,270,40,50);

    block13 = new Box(600,220,40,50);


    block22 = new Box(800,170,40,50);
    block23 = new Box(840,170,40,50);
    block24 = new Box(880,170,40,50);
    block25 = new Box(920,170,40,50);
    block26 = new Box(960,170,40,50);
    

    block27= new Box(840,120,40,50);
    block28 = new Box(880,120,40,50);
    block29 = new Box(920,120,40,50);

    block30 = new Box(880,70,40,50);


    polygon1 = new Polygon(100,300,20);
launcher = new SlingShot(polygon1.body,{x:100,y:280});
}

function draw(){
    background("grey");
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();
    //1st pyramid
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    
    block11.display();
    block12.display();
    
    block13.display();
    
//2nd pyramid
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();

    block27.display();
    block28.display();
    block29.display();

    block30.display();


    polygon1.display();
    launcher.display();

    
}
function mouseDragged(){
        Matter.Body.setPosition(polygon1.body, {x:mouseX,y:mouseY})
      }
      function mouseReleased(){
      launcher.fly()
      }
      function keyPressed(){
        if (keyCode === 32){
        Matter.Body.setPosition(polygon1.body,{x:100,y:280})
        launcher .attach(polygon1.body);
    }
    }
