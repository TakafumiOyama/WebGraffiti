/* 01_SimultaneousContrast */

function setup() {
  createCanvas(windowHeight, windowHeight, P2D);
  noCursor();
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  rectMode(CORNER);
  noStroke();

  var rectCount = 10;
  var colorCount = 0;
  var rectWidth = width/rectCount;
  var rectHeight = height/rectCount;

  for (var i = 0; i < rectCount; i++) {
    for (var j = 0; j < rectCount; j++) {
      rectMode(CORNER);
      fill(mouseY-360/(rectCount*rectCount)*colorCount, 0, 100-mouseX/(rectCount*rectCount)*colorCount);
      rect(rectWidth*i, rectHeight*j, rectWidth, rectHeight);

      rectMode(CENTER);
      fill(360-(mouseY-360/(rectCount*rectCount)*colorCount), mouseY-100/(rectCount*rectCount)*colorCount, mouseX-100/(rectCount*rectCount)*colorCount);
      rect(rectWidth*i+rectWidth/2, rectHeight*j+rectHeight/2, mouseX/rectCount, mouseX/rectCount);

      colorCount++;
    }
  }
}
