/* 02_ImageColorPallette */

var img;
var colors = [];
var color;
var tileCount;
var rectSize;

function preload() {
  img = loadImage("data/lena.jpg");
}

function setup(){
  createCanvas(windowHeight, windowHeight, P2D);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  // get colors from image
  image(img, 0, 0);

  tileCount = width / max(5, 3);
  rectSize = width / tileCount;
  var i = 0;
  for (var gridY=0; gridY<tileCount; gridY++) {
    for (var gridX=0; gridX<tileCount; gridX++) {
      var px = (gridX * rectSize);
      var py = (gridY * rectSize);
      //var color = get(10, 10);
      //colors.push(get(px, py));
      //colors[i] = get(px, py);
      i++;
    }
  }
}

function draw(){
  //background(0);

  // get colors from image
  //colors = new Array(1000);

  // // draw grid
  // i = 0;
  // for (var gridY=0; gridY<tileCount; gridY++) {
  //   for (var gridX=0; gridX<tileCount; gridX++) {
  //     fill(colors[i]);
  //     var x = gridX*rectSize+rectSize/2;
  //     var y = gridY*rectSize+rectSize/2;
  //
  //     rectSize += (sq((mouseX - x)) + sq((mouseY - y)))*0.0000000005;
  //
  //     if(mouseX>x && mouseY>y){
  //       ellipse(x+rectSize, y+rectSize, 5, 5);
  //     }else if(mouseX>x && mouseY<y){
  //       ellipse(x+rectSize, y-rectSize, 5, 5);
  //     }else if(mouseX<x && mouseY>y){
  //       ellipse(x-rectSize, y+rectSize, 5, 5);
  //     }else{
  //       ellipse(x-rectSize, y-rectSize, 5, 5);
  //     }
  //     //rect(x+rectSize, y+rectSize, 10, 10);
  //     i++;
  //   }
  // }

}
