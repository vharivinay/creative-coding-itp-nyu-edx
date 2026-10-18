class Particle {
  constructor(pos) {
    this.name = "ball";
    this.color = "red";
    // p5 vector
    this.pos = pos;
    this.speed = 1;
  }

  bounce() {
    if (this.pos.y >= height || this.pos.y <= 0) {
      this.speed *= -1;
    }
    this.pos.y += this.speed;
  }
}

var ball;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  ball = new Particle(createVector(random(width), random(height)));
  print(ball.color);
  print(ball.pos.x);
}

function draw() {
  background(220);
  ball.bounce();
  fill(ball.color);
  ellipse(ball.pos.x, ball.pos.y, 50, 50);
  fill(255);
  text(ball.name, ball.pos.x, ball.pos.y);
}
