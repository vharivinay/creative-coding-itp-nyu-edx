var xpos=0;
var ypos=-20;
var size = 30;
var padding = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
  //colorMode(HSB)
  noFill();
  /*
  stroke(random(255),random(255),random(255),150);
  strokeWeight(12);
  rect(padding,padding,width-padding*2,height-padding*2);*/
}

function makeRect(){
  rect(xpos,ypos,random(60,100),random(60,100));
}

function keyPressed(){
  noLoop(); 
}

var count = 0;
var hu = 0;
var overlap = size/2;
function draw() {
  //xpos = random(padding, width-(padding+size));
  //ypos = random(padding, height-(padding+size));
  noStroke(); 
  fill(random(255),random(255),random(255),random(25,125));
  size = (random(40,100));
  var overlap = size * 0.33;
  newx = xpos+random(-overlap,overlap);
  newy = ypos+random(-overlap,overlap);
  if(random(1)>0.5){
    rect(newx,newy,size,size);
    fill(240,240,240,255);
    rectMode(CENTER);
    rect(newx,newy,size/random(1,3));
  }else{
    ellipse(newx,newy,size);
    fill(240,240,240,255);
    ellipse(newx,newy,size/random(1,3));
  }
  

  if (count>=140){
    noLoop();
  }

  if (hu>255){
    hu=0;
  }

  if (xpos >= width-(padding)){
    xpos = padding - size;
    if(ypos >= height-(padding)){
      noLoop();
    }
    ypos += size;
  }
  xpos += size;
  //count++;
}
