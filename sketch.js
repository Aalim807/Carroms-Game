var gameState;
var POSITION;
var SHOOT;
var WIN;
var shootDirection;
var pocketed;

var wall1, wall2, wall3, wall4;

var innerLine1, innerLine2, innerLine3, innerLine4;

var outerLine1, outerLine2, outerLine3, outerLine4;

var striker;

var coin1, coin2, coin3, coin4;


function setup(){
  createCanvas(400, 400);

  gameState = 0;
  POSITION = 0;
  SHOOT = 1;

  wall1 = createSprite(200, 50, 250, 10);
  wall2 = createSprite(200, 350, 250, 10);
  wall3 = createSprite(350, 200, 10, 250);
  wall4 = createSprite(50, 200, 10, 250);

  innerLine1 = createSprite(200, 76, 290, 3);
  innerLine2 = createSprite(200, 324, 290, 3);
  innerLine3 = createSprite(324, 200, 3, 290);
  innerLine4 = createSprite(76, 200, 3, 290);

  outerLine1 = createSprite(200, 45, 310, 3);
  outerLine2 = createSprite(200, 355, 310, 3);
  outerLine3 = createSprite(355, 200, 3, 310);
  outerLine4 = createSprite(45, 200, 3, 310);

  striker = createSprite(200, 324, 20, 20);

  coin1 = createSprite(200, 210, 10, 10);
  coin2 = createSprite(200, 190, 10, 10);
  coin3 = createSprite(210, 200, 10, 10);
  coin4 = createSprite(190, 200, 10, 10);

  if(coin1.isTouching(outerLine1) ||
  coin1.isTouching(outerLine2) ||
  coin1.isTouching(outerLine3) ||
  coin1.isTouching(outerLine4))
   {

 coin1 = pocketed;
 coin1.visible = false;
}

if(coin2.isTouching(outerLine1) ||
  coin2.isTouching(outerLine2) ||
  coin2.isTouching(outerLine3) ||
  coin2.isTouching(outerLine4))
   {

 coin2 = pocketed;
 coin2.visible = false;
}

if(coin3.isTouching(outerLine1) ||
  coin3.isTouching(outerLine2) || 
  coin3.isTouching(outerLine3) ||
  coin3.isTouching(outerLine4))
   {

 coin3 = pocketed;
 coin3.visible = false;
}

if(coin4.isTouching(outerLine1) ||
  coin4.isTouching(outerLine2) ||
  coin4.isTouching(outerLine3) ||
  coin4.isTouching(outerLine4))
   {

 coin4 = pocketed;
 coin4.visible = false;
}

if(striker.isTouching(outerLine1) ||
   striker.isTouching(outerLine2) ||
   striker.isTouching(outerLine3) ||
   striker.isTouching(outerLine4))
   {
 
 striker = pocketed;
}

}

function draw() {
  
  background("white"); 
    
  text("Move the Coins out of the Board and you WIN!!!", 80, 15);
  
  if(gameState === POSITION){
  
  striker.y = 324;
  
  text("Use the arrow keys to position the striker", 120, 375);
  text("Done positioning? Press the R key", 120, 390);

  if(striker.isTouching(coin1)){  
    striker.x = coin1.x + 75
  }

  if(striker.isTouching(coin2)){  
    striker.x = coin2.x + 75
  }

  if(striker.isTouching(coin3)){  
    striker.x = coin3.x + 75
  }

  if(striker.isTouching(coin4)){  
    striker.x = coin4.x + 75
  }
  
   if(keyWentDown("space")){
    striker.x = 200;
    striker.y = 324;
   }
  
   if(keyWentDown("RIGHT_ARROW")){
    striker.velocityX = 3;
   }
   if(keyWentUp("RIGHT_ARROW")){
    striker.velocityX = 0;
   }
   if(keyWentDown("LEFT_ARROW")){
    striker.velocityX = -3;
   }
   if(keyWentUp("LEFT_ARROW")){
    striker.velocityX = 0;
   }
  
   if(striker.x > 324 || striker.x < 76){
    striker.x = 200;
   } 
  
  if(keyDown("R")){
    gameState = SHOOT;
    
  }
  }
  
  if(gameState === SHOOT){
  
    text("Use the keys Z, X, C, V, B, N and M to shoot at different angles", 55, 375);
    text("Press the space key when the turn is over", 55, 390);

    striker.bounce(coin1);
    striker.bounce(coin2);   
    striker.bounce(coin3);
    striker.bounce(coin4);

    striker.velocityX = striker.velocityX * 0.99;
    striker.velocityY = striker.velocityY * 0.99;

    if(striker.y === 324){
    
    if(keyWentDown("Z")){
      shootDirection = 1;
    }
    
    if(keyWentDown("X")){
      shootDirection = 2;
    }
    
    if(keyWentDown("C")){
      shootDirection = 3;
    }
    
    if(keyWentDown("V")){
      shootDirection = 4;
    }
    
    if(keyWentDown("B")){
      shootDirection = 5;
    }

    if(keyWentDown("N")){
      shootDirection = 6;
    }

    if(keyWentDown("M")){
      shootDirection = 7;
    }

    switch(shootDirection){
      
      case 1:{
        striker.velocityX = -10.5; 
        striker.velocityY = -7;
        shootDirection = 0;
        break;
      }
       
       case 2:{
        striker.velocityX = -7; 
        striker.velocityY = -7;
        shootDirection = 0;
        break;
      }
       
       case 3:{
        striker.velocityX = -4.5;
        striker.velocityY = -7;
        shootDirection = 0;
        break;
      }
       
       case 4:{
        striker.velocityX = 0;                         
        striker.velocityY = -7;
        shootDirection = 0;
        break;
      }
       
       case 5:{
        striker.velocityX = 4.5;
        striker.velocityY = -7;
        shootDirection = 0;
        break;
      }

      case 6:{
        striker.velocityX = 7;
        striker.velocityY = -7;
        shootDirection = 0;
        break;
      }
      case 7:{
        striker.velocityX = 10.5;
        striker.velocityY = -7;
        shootDirection = 0;
        break;
      }
      }

    }
        
    if(keyDown("SPACE")){
      gameState = POSITION;
      striker.velocityX = 0;
      striker.velocityY = 0;
    }
    
    if(coin1 === pocketed && 
      coin2 === pocketed &&
      coin3 === pocketed &&
      coin4 === pocketed){
 
     gameState = WIN;
      }
   
   if(striker === pocketed){

     striker.x = 200;
     striker.y = 324;
     striker.velocityX = 0;
     striker.velocityY = 0;
         }    

    }

    if(gameState === WIN){
      
      text("YOU WIN!!!", 200, 200);
    }
    
  
  coin1.bounceOff(wall1);
  coin1.bounceOff(wall2);
  coin1.bounceOff(wall3);
  coin1.bounceOff(wall4);
    
  coin2.bounceOff(wall1);
  coin2.bounceOff(wall2);
  coin2.bounceOff(wall3);
  coin2.bounceOff(wall4);
    
  coin3.bounceOff(wall1);
  coin3.bounceOff(wall2);
  coin3.bounceOff(wall3);
  coin3.bounceOff(wall4);
    
  coin4.bounceOff(wall1);
  coin4.bounceOff(wall2);
  coin4.bounceOff(wall3);
  coin4.bounceOff(wall4);


  coin1.collide(outerLine1)
  coin1.collide(outerLine2)
  coin1.collide(outerLine3)
  coin1.collide(outerLine4)

  coin2.collide(outerLine1)
  coin2.collide(outerLine2)
  coin2.collide(outerLine3)
  coin2.collide(outerLine4)

  coin3.collide(outerLine1)
  coin3.collide(outerLine2)
  coin3.collide(outerLine3)
  coin3.collide(outerLine4)

  coin4.collide(outerLine1)
  coin4.collide(outerLine2)
  coin4.collide(outerLine3)
  coin4.collide(outerLine4)

    
  coin1.bounce(coin2);
  coin1.bounce(coin3);
  coin1.bounce(coin4);
    
  coin2.bounce(coin3);
  coin2.bounce(coin4);
    
  coin3.bounce(coin4);
    

  striker.bounceOff(wall1);
  striker.bounceOff(wall2);
  striker.bounceOff(wall3);
  striker.bounceOff(wall4);

  striker.collide(outerLine1);
  striker.collide(outerLine2);
  striker.collide(outerLine3);
  striker.collide(outerLine4);

  coin1.velocityX = coin1.velocityX * 0.99;
  coin1.velocityY = coin1.velocityY * 0.99;
  
  coin2.velocityX = coin2.velocityX * 0.99;
  coin2.velocityY = coin2.velocityY * 0.99;
  
  coin3.velocityX = coin3.velocityX * 0.99;
  coin3.velocityY = coin3.velocityY * 0.99;
  
  coin4.velocityX = coin4.velocityX * 0.99;
  coin4.velocityY = coin4.velocityY * 0.99;


  drawSprites();
}
