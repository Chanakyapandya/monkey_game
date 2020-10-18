
var monkey , monkey_running
var banana ,ground,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score
var groundImage,effect,effectImage, invisibleGround;
var survivalTime=0;

function preload(){
  
  
 
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  groundImage = loadImage("forest-stones-2d-game-landscape-260nw-645837517.png")
  
  effectImage = loadImage("00FFFC.png.png")
  
  
   monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
}



function setup() {
  
  //creating canvas
  createCanvas(600,300);
  
  
  
  
  
  // background
 // effect = createSprite(200,300,30,30)
 // effect.addImage(effectImage);
  //effect.scale=2;
  
  
  
   //sprite for ground
  ground = createSprite(600,200,900,5);
  ground.addImage(groundImage);
  ground.scale=1.9;
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  //ig ground
  invisibleGround = createSprite(200,298,900,5);
  invisibleGround.visible=false;
  
  //creating sprite for monkey
  monkey = createSprite(50,200,20,20);
  monkey.addAnimation("gh",monkey_running);
  monkey.scale=0.1;
  
  //identifing groups
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
  
}


function draw() {
//background("lightgrey");
   
  //reseting ground position
  if(ground.x<0){
     ground.x = ground.width/2;
  }
  
  //making monkey jump
  if(keyDown("space")){
    monkey.velocityY = -12
    
  }
  
  //adding gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
  
  //colliding monkey with ground
  monkey.collide(invisibleGround);
  
  //calling function in draw
 banana1();
 obstacle1();
  
  drawSprites();
  
  
  stroke("blue");
  textSize(20)
  survivalTime = Math.ceil (frameCount/frameRate());
  text("Survival Time:"+ survivalTime,200,50);
  
  
  
  
}

function banana1(){
  
  if(frameCount % 100 == 0){
  banana = createSprite(590,0,20,20);
    banana.velocityX=-3;
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.lifetime=200;
  banana.y = Math.round(random(60,200));
  FoodGroup.add(banana);
    
  }
}

function obstacle1(){

  if(frameCount % 300 == 0){
    obstacle = createSprite(590,270,20,20);
    obstacle.velocityX=-3;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  
    
  }
  
  
}



