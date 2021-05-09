function setup() {
  createCanvas(400, 400);
  // To center the rectangle without math
  rectMode(CENTER);
}

function draw() {
  background(100);
  // rect(X-topLeft, Y-topLeft
  //      width, height);
  //rect(200,200,100,100);
  // Quadrilateral

  // quad(x1,y1,x2,y2,x3,y3,x4,y4);

  // quad(xtopLeft, ytopLeft,
  //      xtopRight, ytopRight,
  //      xbottomRight, ybottomRight,
  //      xbottomLeft, ybottomLeft);
  
  quad(10,10,200,10,390,390,200,390);
}
