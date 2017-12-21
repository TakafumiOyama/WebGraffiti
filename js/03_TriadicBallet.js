/* 03_TriadicBallet.js */

var strokeColor;
var hue;
var resolution;

function setup(){
  createCanvas(windowHeight, windowHeight, P2D);
  colorMode(HSB, 360, 100, 100, 100);
  strokeColor = color(0, 100, 10, 20);
  hue = random(0, 360);
  resolution = random(2, 10);
  smooth();
  noFill();
  background(360);
}

function draw(){
  changeColor();
  push();
    translate(width/2,height/2);
    var radius = (mouseX+mouseY)/2-width/2;
    var circleResolution = resolution;
    var angle = TWO_PI/circleResolution;
    strokeWeight(1);
    stroke(strokeColor);
  pop();

  beginShape();
  stroke(strokeColor);
    for (var i=0; i<circleResolution; i++){
      var x = mouseX + cos(angle*i) * radius;
      var y = mouseY + sin(angle*i) * radius;
      vertex(x, y);
    }
  endShape(CLOSE);
}

function changeColor() {
  var rand = parseInt(random(3));
  switch(rand){
  case 0:
    strokeColor = color(hue, 100, 10, 20);
    break;
  case 1:
    strokeColor = color(hue, 100, 50, 20);
    break;
  case 2:
    strokeColor = color(hue, 100, 100, 20);
    break;
  }
}

function keyReleased(){
  if (key === " ") {
    hue = random(0, 360);
    resolution = random(2, 10);
    background(360);
  }
}
