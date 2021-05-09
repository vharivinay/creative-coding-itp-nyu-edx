function setup() {
  createCanvas(800,500);
}

function draw() {
  background(255);
  noFill();
  strokeWeight(3);
  rect(20,20,200,200);
  ellipse(400,120,200,200);
  line(600,20,600,220);
  triangle(20,240,220,240,110,420);
  arc(400,240,200,200,0,PI);
  quad(720, 18, 650, 124, 650, 470, 720, 335);
  
  point(600,260);
}
