/* 03_TriadicBallet.js */

var strokeColor = color(0);
var hue = random(0, 360);
var resolution = 100;


function setup(){
  createCanvas(windowHeight, windowHeight, P2D);
  colorMode(HSB, 360, 100, 100, 100);
  smooth();
  noFill();
  background(360);
}

function draw(){
  changeColor();
  push();
   translate(width/2,height/2);

    //int circleResolution = (int)map(mouseX+100,0,height,2,100);
    var circleResolution = resolution;
    var radius = (mouseX+mouseY)/2-width/2;
    var angle = TWO_PI/circleResolution;
    strokeWeight(2);
    stroke(strokeColor);

  pop();

  beginShape();
    for (var i=0; i<=circleResolution; i++){
      var x = mouseX + cos(angle*i) * radius;
      var y = mouseY + sin(angle*i) * radius;
      vertex(x, y);
    }
  endShape();
}

function changeColor() {
  var rand = random(3);
  switch(rand){
  case 0:
    strokeColor = color(hue, 100, 10, 10);
    break;
  case 1:
    strokeColor = color(hue, 100, 50, 10);
    break;
  case 2:
    strokeColor = color(hue, 100, 100, 10);
    break;
  }
}
function keyReleased(){
  if (key == DELETE || key == BACKSPACE) {
    hue = random(0, 360);
    resolution = random(2, 10);
    background(360);
  }
}
