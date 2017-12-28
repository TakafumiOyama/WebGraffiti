/* 04_Worm.js */

var tileCount = 20;
var actRandomSeed = 0;
var gridToggle = -1;

function setup(){
  createCanvas(windowHeight, windowHeight, P2D);
}

function draw(){
  background(250);
  smooth();
  noFill();
  strokeCap(ROUND);

  if (second() % 5 == 0) {
    changePattern();
  }
  randomSeed(actRandomSeed);

  for (var gridY=0; gridY<tileCount; gridY++) {
    for (var gridX=0; gridX<tileCount; gridX++) {

      var posX = width/tileCount*gridX;
      var posY = height/tileCount*gridY;

      var ratioX = mouseX/width;
      var ratioY = mouseY/height;

      var toggle = parseInt(random(0,2));

      if (toggle == 0) {
        strokeWeight(mouseX/100);
        stroke(mouseY/3,100,mouseX/3);
        line(posX, posY, posX+width/tileCount*ratioX, posY+height/tileCount*ratioY);
      }
      if (toggle == 1) {
        strokeWeight(mouseY/100);
        line(posX, posY+width/tileCount*ratioX, posX+height/tileCount*ratioY, posY);
      }

      if (gridToggle > 0) {
        strokeWeight(1);
        line(posX, posY, posX+width/tileCount, posY);
        line(posX, posY, posX, posY+height/tileCount);
      }
    }
  }
}

function changePattern() {
  actRandomSeed = parseInt(random(100000));
}

function keyPressed(){
  if (key === " ") {
    gridToggle *= -1;
  }
}
