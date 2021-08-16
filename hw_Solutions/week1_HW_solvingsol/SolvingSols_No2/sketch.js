var radius = 0;
var l = 0;
var cx, cy;
var step = 10;
var angle = 0;
var cr = 0;
var total_degrees = 360;

function setup() {
  createCanvas(900, 900);
  background(240);
  //colorMode(HSB);
  rectMode(CENTER);
  noFill();
}

function drawCircle(center_x, center_y, radius){
  stroke(0);
  strokeWeight(random(1,4))
  ellipse(center_x, center_y, radius);
  if(cr > 255){
    cr = 0;
  }
  cr += step;
}

function drawRect(center_x, center_y, w, h){
  push();
  rotate(radians(angle))
  stroke(0);
  strokeWeight(random(1,4))
  rect(center_x, center_y, w, h);
  pop();
  if(cr > 255){
    cr = 0;
  }
  cr += step;
  angle += 2;
}

function draw() {

  translate(width/4, height/4);
  drawCircle(0,0,radius);

  translate(width/2, 0);
  drawRect(0,0,l, l);

  translate(-width/2, height/2);
  drawRect(0,0,l,l);

  translate(width/2, 0);
  drawCircle(0,0,radius);
  //noLoop();
  radius += step;
  l += step;

  if (radius >= width/2.25){
    noLoop();
  }
 
}