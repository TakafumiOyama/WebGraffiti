function setup() {
  // put setup code here
  createCanvas(displayWidth-10, displayHeight-10, P2D);
  noCursor();
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  rectMode(CORNER);
  noStroke();
  background(360, 100, 100);

  var rectCount = 5;
  var colorCount = 0;
  var rectWidth = (displayWidth-10)/rectCount;
  var rectHeight = (displayHeight-10)/rectCount;

  for (var i = 0; i < rectCount; i++) {
    for (var j = 0; j < rectCount; j++) {
      rectMode(CORNER);
      fill(mouseY-360/(rectCount*rectCount)*colorCount, mouseY-100/(rectCount*rectCount)*colorCount, mouseX-100/(rectCount*rectCount)*colorCount);
      rect(rectWidth*i, rectHeight*j, rectWidth, rectHeight);

      rectMode(CENTER);
      fill(360-(mouseY-360/(rectCount*rectCount)*colorCount), mouseY-100/(rectCount*rectCount)*colorCount, mouseX-100/(rectCount*rectCount)*colorCount);
      rect(rectWidth*i+rectWidth/2, rectHeight*j+rectHeight/2, mouseX/rectCount, mouseX/rectCount);

      //fill(mouseY-360/(rectCount*rectCount)*colorCount, mouseY-100/(rectCount*rectCount)*colorCount, mouseX-100/(rectCount*rectCount)*colorCount);
      //rect(rectWidth*i+rectWidth/2, rectHeight*j+rectHeight/2, mouseX/rectCount/2, mouseX/rectCount/2);
      colorCount++;
    }
  }
}
