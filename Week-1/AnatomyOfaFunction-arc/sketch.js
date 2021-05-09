function setup() {
  createCanvas(400, 400);
}

//let s = 0;
//let x = 1;

function draw() {
  background(220);
  // arc(centerX, centerY,
  //    width, height,
  //    startAngle, endAngle,
  //    optionalparm);

  // Optionalparm = CHORD, PIE

  // W/o optional argument,
  // the arc perimeter is not closed.
  arc(100,200,
      100,100,
      0,PI/2);

  // Optional CHORD makes a closed curve,
  // but the shape isn't sector.    
  arc(200,200,
      100,100,
      0,PI/2,
      CHORD);

  // Optional PIE makes a closed curve,
  // and the shape is a sector.  
  arc(300,200,
      100,100,
      0,PI/2,
      PIE);

  // s += 0.01;
  // x += 0.1;
}
