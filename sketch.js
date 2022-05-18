var bg,bgImg;
var hunter,hunterImg;
var hunter2Img;
var hunter4Img;
var hunter3Img;
var hunter5Img;
var deer,deerImg;
var deerGroup;

function preload(){
  
  bgImg = loadImage("assets/background.jpg");
  // hunterImg = loadImage("assets/character1.jpg");
  // hunter2Img = loadImage("assets/character2.jpg");
  // hunter3Img = loadImage("assets/character3.jpg");
  // hunter4Img = loadImage("assets/character4.jpg");
  hunterImg = loadAnimation("assets/character1.png","assets/character2.png");
  hunter5Img = loadAnimation("assets/character3.png","assets/character4.png");
  deerGroup = new Group();
  deerImg = loadImage("assets/deer.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale = 2.2;
bg.velocityX = -2;

//creating the player sprite
hunter = createSprite(displayWidth-1150, displayHeight-250, 50, 50);
hunter.addAnimation("hunter",hunterImg);
hunter.addAnimation("huntermoving",hunter5Img);
hunter.scale = 0.5;
hunter.debug = true;
hunter.setCollider("rectangle",0,0,95,170);


}

function draw() {
  background("green"); 

  if(bg.x < 490)
  {
  bg.x = displayWidth/2;
  }


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("SPACE")){
  hunter.changeAnimation("huntermoving",hunter5Img);
}

if(keyWentUp("space")){
 
  hunter.changeAnimation("hunter",hunterImg);
 
}



//release bullets and change the image of shooter to shooting position when space is pressed
/*if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}&

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}*/

drawSprites();

spawnDeer();

}

function spawnDeer()
{
 if(frameCount % 200 === 0)
 {
  deer = createSprite(displayWidth - 350, displayHeight - 240, 80, 30);
  deer.addImage(deerImg);
  deer.scale = 0.25;
  deer.velocityX = -3;
 }
}
