var xv = 10;
var yv = 10;
var wv = 10;
var hv;

var xh = 30;
var yh = 10;
var wh;
var hh = 10;

hu = 0;

function setup() {
  createCanvas(900, 900);
  background(240);
  colorMode(HSB)
  // Vertical Lines
  hv = height - 20;

  // Horizontal Lines
  wh = (width - 30);

  noStroke();
}

function drawVertical(x,y,w,h){
  fill(map(x,10,width-10,75,225),255,255);
  rect(x,y,w,h);
}

function drawHorizontal(x,y,w,h){
  fill(map(y,10,height-10,225,75),255,255);
  rect(x,y,w,h);
}

function draw() {
  drawVertical(xv,yv,wv,hv);
  drawHorizontal(xh,yh,wh,hh);

  if (xv >= width - 20){
    //console.log(xv);
    noLoop();
  }

  xv += 20;
  yv += 20;
  hv -=20;

  xh += 20;
  yh += 20;
  wh -=20;
}