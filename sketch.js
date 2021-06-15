var PLAY = 1;
var END = 0;
var gameState = END;
var gameState = PLAY;
var gameoverSound, swooshSound;
var sword, swordImage, fruit1, fruit1Image, fruit2, fruit2Image, fruit3, fruit3Image, fruit4, fruit4Image, gameOver, gameOverImage, alien1, alien1Image, alien2, alien2Image;
var board, boardImage;
var restart, restartImage;

function preload(){
  swordImage = loadImage ("sword.png");
  fruit1Image = loadImage ("fruit1.png");
  fruit2Image = loadImage ("fruit2.png");
  fruit3Image = loadImage ("fruit3.png");
  fruit4Image = loadImage ("fruit4.png");
  gameOverImage = loadImage ("gameover2.png");
  alien1Image = loadImage ("alien1.png");
  boardImage = loadImage ("board.webp");
  restartImage = loadImage ("gameOver.png")
  swooshSound = loadSound ("swoosh.mp3");
}

function setup(){
  createCanvas (640,500); 
  board = createSprite (299,250)
  board.addImage ("board", boardImage);
  board.scale = 0.78;
  sword = createSprite(200,200);
  sword.addImage("sword",swordImage);
  sword.scale = 0.8;
    
  gameOver = createSprite(300,250);
  gameOver.scale = 1.5;
  gameOver.addImage("gameOver",gameOverImage);
  
  
  restart = createSprite (300,310);
  restart.scale = 0.5;
  restart.addImage("restart",restartImage);
  score=0;
  
  fruit1group = new Group();
  fruit2group = new Group();
  fruit3group = new Group();
  fruit4group = new Group();
  alien1group = new Group();

  }

function draw(){
  
  if(gameState === PLAY){
  gameOver.visible = false;
  sword.visible = true;  
  restart.visible = false;
  fruits();
  enemy(); 

  
  sword.x = mouseX;
  sword.y = mouseY;
    
 if (sword.isTouching(fruit1group)){
 
  fruit1group.destroyEach();
  score = score + 1;
  swooshSound.play();
 } 
  
 if (sword.isTouching(fruit2group)){
  
  fruit2group.destroyEach();
  score = score + 1;
  swooshSound.play();
} 
  
   if (sword.isTouching(fruit3group)) {
    
  fruit3group.destroyEach(); 
  score = score + 1;   
  swooshSound.play();
     } 
  
   if ( sword.isTouching(fruit4group)){
   
  fruit4group.destroyEach();   
  score = score + 1;
  swooshSound.play();
   } 
  
  if (sword.isTouching(alien1group)){
   
  alien1group.destroyEach();   
  fruit1group.destroyEach();
  fruit2group.destroyEach();
  fruit3group.destroyEach();
  fruit4group.destroyEach(); 
  gameState = END;
 }

  } 
  
  if (gameState === END ){
  fill ("yellow");
  textSize(30);
  text("score:"+score,480,35);
    
    
  
  gameOver.visible = true;
  restart.visible = true;
  sword.visible = false;

 }
  
  if (keyDown("space")){
    gameState = PLAY;  
    score = 0;
    
      }
  
  drawSprites();
  fill ("yellow");
  textSize(30);
  text("score:"+score,480,35);
  

}

function fruits(){
 if (frameCount % 100 === 0){
  fruit1 = createSprite(600,230);
  fruit1.scale = 0.2;
  fruit1.addImage("fruit1",fruit1Image);
  fruit1.velocityX = -(8 + score+1);
  fruit1.y = Math.round (random(80,390));
  fruit1.lifeTime = -75;
  fruit1group.add(fruit1);
   
 }
 if (frameCount % 150 === 0){
  fruit2 = createSprite(0,230);
  fruit2.scale = 0.2;
  fruit2.addImage("fruit2",fruit2Image);
  fruit2.velocityX = (8 + score+1);
  fruit2.y = Math.round (random(80,390));
  fruit2.lifeTime = 75;
  fruit2group.add(fruit2);
}
  
  if (frameCount % 200 === 0){
  fruit3 = createSprite(0,230);
  fruit3.scale = 0.2;
  fruit3.addImage("fruit3",fruit3Image);
  fruit3.velocityX = (8 +score+1);
  fruit3.y = Math.round (random(80,390));
  fruit3.lifeTime = 75;
  fruit3group.add(fruit3); 
}
  
  if (frameCount % 250 === 0){
  fruit4 = createSprite(600,230);
  fruit4.scale = 0.2;
  fruit4.addImage("fruit4",fruit4Image);
  fruit4.velocityX = -(8 + score +1);
  fruit4.y = Math.round (random(80,390));
  fruit4.lifeTime = -75;
  fruit4group.add(fruit4); 
}
  
}

function enemy(){
 if (frameCount % 200 === 0){
  alien1 = createSprite(600,200); 
  alien1.addImage("alien1", alien1Image);
  alien1.velocityX = -(8 + score+1);
  alien1.y = Math.round (random(80,390))
  alien1.lifeTime = -75;  
  alien1group.add(alien1);
 }
}