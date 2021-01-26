
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stones,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var world,boy;
var launchingForce = 100
function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30); 
	mango3=new mango(1010,140,30); 
	mango4=new mango(1000,70,30); 
	mango5=new mango(1100,70,30); 
	mango6=new mango(1000,230,30); 
	mango7=new mango(900,230,40); 
	mango8=new mango(1140,150,40); 
	mango9=new mango(1100,230,40); 
	mango10=new mango(1200,200,40); 
	mango11=new mango(1120,50,40); 
	mango12=new mango(900,160,40);

	stones = new stone(235, 420, 30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject = new Launcher(stones.body, {x: 235, y: 420});
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1300,
			height: 600,
			wireFrames: false
		}
	}
	)
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stones.display();
  groundObject.display();
  detectCollision();

  
}

function mouseDragged(){
    
    Matter.Body.setPosition(stones.body, {x: mouseX , y: mouseY});
    
}

function mouseReleased(){
    launcherObject.fly();
}

function detectCollision(){
	if(mango1.x - stones.x < stones.width/2 + mango1.width/2
		&& stones.x - mango1.x < stones.width/2 + mango1.width/2
		&& mango1.y - stones.y < stones.height/2 + mango1.height/2
		&& stones.y - mango1.y < stones.height/2 + mango1.height/2){
			Matter.body.setStatic(mango1.body, false);
		}
	if(mango2.x - stones.x < stones.width/2 + mango2.width/2
		&& stones.x - mango2.x < stones.width/2 + mango2.width/2
		&& mango2.y - stones.y < stones.height/2 + mango2.height/2
		&& stones.y - mango2.y < stones.height/2 + mango2.height/2){
			Matter.body.setStatic(mango2.body, false);
		}
	if(mango3.x - stones.x < stones.width/2 + mango3.width/2
		&& stones.x - mango3.x < stones.width/2 + mango3.width/2
		&& mango3.y - stones.y < stones.height/2 + mango3.height/2
		&& stones.y - mango3.y < stones.height/2 + mango3.height/2){
			Matter.body.setStatic(mango3.body, false);
		}

		if(mango4.x - stones.x < stones.width/2 + mango4.width/2
			&& stones.x - mango4.x < stones.width/2 + mango4.width/2
			&& mango4.y - stones.y < stones.height/2 + mango4.height/2
			&& stones.y - mango4.y < stones.height/2 + mango4.height/2){
				Matter.body.setStatic(mango4.body, false);
			}
			if(mango5.x - stones.x < stones.width/2 + mango5.width/2
				&& stones.x - mango5.x < stones.width/2 + mango5.width/2
				&& mango5.y - stones.y < stones.height/2 + mango5.height/2
				&& stones.y - mango5.y < stones.height/2 + mango5.height/2){
					Matter.body.setStatic(mango5.body, false);
				}
				if(mango6.x - stones.x < stones.width/2 + mango6.width/2
					&& stones.x - mango6.x < stones.width/2 + mango6.width/2
					&& mango6.y - stones.y < stones.height/2 + mango6.height/2
					&& stones.y - mango6.y < stones.height/2 + mango6.height/2){
						Matter.body.setStatic(mango6.body, false);
					}
					if(mango7.x - stones.x < stones.width/2 + mango7.width/2
						&& stones.x - mango7.x < stones.width/2 + mango7.width/2
						&& mango7.y - stones.y < stones.height/2 + mango7.height/2
						&& stones.y - mango7.y < stones.height/2 + mango7.height/2){
							Matter.body.setStatic(mango7.body, false);
						}
						if(mango8.x - stones.x < stones.width/2 + mango8.width/2
							&& stones.x - mango8.x < stones.width/2 + mango8.width/2
							&& mango8.y - stones.y < stones.height/2 + mango8.height/2
							&& stones.y - mango8.y < stones.height/2 + mango8.height/2){
								Matter.body.setStatic(mango8.body, false);
							}
							if(mango9.x - stones.x < stones.width/2 + mango9.width/2
								&& stones.x - mango9.x < stones.width/2 + mango9.width/2
								&& mango9.y - stones.y < stones.height/2 + mango9.height/2
								&& stones.y - mango9.y < stones.height/2 + mango9.height/2){
									Matter.body.setStatic(mango9.body, false);
								}
								if(mango10.x - stones.x < stones.width/2 + mango10.width/2
									&& stones.x - mango10.x < stones.width/2 + mango10.width/2
									&& mango10.y - stones.y < stones.height/2 + mango10.height/2
									&& stones.y - mango10.y < stones.height/2 + mango10.height/2){
										Matter.body.setStatic(mango10.body, false);
									}
									if(mango11.x - stones.x < stones.width/2 + mango11.width/2
										&& stones.x - mango11.x < stones.width/2 + mango11.width/2
										&& mango11.y - stones.y < stones.height/2 + mango11.height/2
										&& stones.y - mango11.y < stones.height/2 + mango11.height/2){
											Matter.body.setStatic(mango11.body, false);
										}
										if(mango12.x - stones.x < stones.width/2 + mango12.width/2
											&& stones.x - mango12.x < stones.width/2 + mango12.width/2
											&& mango12.y - stones.y < stones.height/2 + mango12.height/2
											&& stones.y - mango12.y < stones.height/2 + mango12.height/2){
												Matter.body.setStatic(mango12.body, false);
											}
}