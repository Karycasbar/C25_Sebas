const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;
var tower;
var towerImage;
var angle, cannon, cannonBall;
var balls = [];
var boat;


//var arr = [[1,2], [3,4], [5,6]] 


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
 
}
function setup() {
  /*console.log(arr[2])
  console.log(arr[2][0])*/
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(0, height -1, width * 2, 1, options);
  World.add(world,ground); 

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  angle = 20;
  cannon = new Cannon(180,110,130,100,angle);

  cannonBall = new CannonBall(cannon.x, cannon.y);
  boat =  new Boat(width-79, height-60, 170, 170, -80);
 
}

function draw() {
  //background(189);
  image(backgroundImg, 0, 0, width, height);
 
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width*2, 1);

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  //cannonBall.display();

  boat.display();

  for(var i=0; i<balls.length; i++){
    showCannonBalls(balls[i])
  }
   
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    //cannonBall.shoot();
    balls[balls.length-1].shoot();
  }
}
  function keyPressed(){
    if(keyCode === DOWN_ARROW){
      var cannonBall = new CannonBall(cannon.x, cannon.y);
      balls.push(cannonBall)
    }
  }
  function showCannonBalls(ball){
    if(ball){
      ball.display();
    }
  }

