var x = 0;
var y = 0;
var offset = 20;
var hu = 0;

function setup() {
  createCanvas(900, 900);
  colorMode(HSB)
  background(0);
}

var w1 = 1;
var w2 = 16;
var m;

function makeWall(m,n){
  while(true){
    if(y > height/3 - offset){
      x = 0;
      y = 0;
      break;
    }
    if (random(1) < 0.50){
      stroke(255)
      if (m >= 1){
        strokeWeight(0);
      } else{
        strokeWeight(2);
      }
      /*if (y < height/2){
        strokeWeight(map(y,0,height/2,w1,w2));
      } else {
        strokeWeight(map(y,0,height/2,w2,w1));
      }*/
      line(x,y, x+offset, y+offset);
    }else{
      if (n >= 1){
        strokeWeight(0);
      } else{
        strokeWeight(2);
      }

      line(x,y+offset, x+offset, y);
    }
    x = x + offset;
    if (x > width/3 - offset){
      x = 0;
      y = y+offset;
    }
  }
  return;
  
}


function draw() {
  makeWall(0,0);
  translate(width/3,0);
  makeWall(0,1);
  translate(width/3,0);
  makeWall(0,0);
  translate(-2*width/3,height/3);
  makeWall(1,0);
  translate(width/3,0);
  makeWall(0,0);
  translate(width/3,0);
  makeWall(0,1);
  translate(-2*width/3,height/3);
  makeWall(0,0);
  translate(width/3,0);
  makeWall(0,1);
  translate(width/3,0);
  makeWall(0,0);
  noLoop();
  //makeWall();

}
