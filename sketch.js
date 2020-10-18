function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(100, 200, 40, 80);
  movingrect=createSprite(200, 200, 40, 80);
  fixedrect.shapeColor=("green");
  movingrect.shapeColor=("green");

}

function draw() {
  background(0,0,0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2+movingrect.height/2){
      movingrect.shapeColor=("red");
      fixedrect.shapeColor=("red");
    }
    else
  {
    fixedrect.shapeColor=("green");
   movingrect.shapeColor=("green");
  }

  drawSprites();
}