var offset = 10;
var xS = offset;
var xE = offset;
var yS = offset;
var yE = offset;
var q1 = true;
var q2 = false;
var q3 = false;
var q4 = false;
var step =5;

function setup() {
  createCanvas(900,900);
  background('#f4f4f4');
  colorMode(HSB);

  strokeWeight(1);
}

function drawLine(xS,yS,xE,yE){
  line(xS,yS,xE,yE); 
}

function draw() {
  hu = map(frameCount,0,396,0,255);
  stroke(hu,255,255);
  
  if(q1){
    drawLine(xS,yS,xE,height/2);
    xS = xS + step; //log(height + xS);
    xE = xS;
    if (xS > width/2){
      q1 = false;
      q2 = true;
      xS = width/2 + offset;
      yS = offset;
      xE = width-offset;
      yE = offset;
    }
  }else if(q2){
    drawLine(xS,yS,xE,yE);
    yS = yS + step; //log(height + yS);
    yE = yS;
    if (yS > height/2){
      q2 = false;
      q3 = true;
      xS = offset;
      yS = height/2 + offset;
      xE = width/2;
      yE = height/2 + offset;
    }
  }else if(q3){
    drawLine(xS,yS,xE,yE);
    yS = yS + step; //log(height + yS);
    yE = yS;
    if (yS > height - offset){
      q3 = false;
      q4 = true;
      xS = width/2 + offset;
      yS = height/2 + offset;
      xE = width/2 + offset;
      yE = height - offset;
    }
  } else if (q4){
    drawLine(xS,yS,xE,yE);
    xS = xS + step; //log(height + yS);
    xE = xS;
    if (xS > width-offset){
      noLoop();
    }
  }
}