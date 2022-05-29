var navio1, navio2;
var sea, sea_fundo;


function preload(){
 sea_fundo = loadImage("sea.png");
 navio1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png");
 
}

function setup(){
  createCanvas(400,400);
sea = createSprite (200,180,400,20);
sea.addImage("sea.png", sea_fundo) ;
sea.scale = 0.1;


navio2 = createSprite (90, 200, 25, 25);
navio2.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png", navio1);
navio2.scale = 0.1;


}

function draw() {
  background("white");
    drawSprites();
   
   
  
    
 

}
