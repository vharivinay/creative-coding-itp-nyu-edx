class Particle {
  constructor(pos) {
    this.name = "asteroid";
    this.color = color("red");
    this.pos = pos;
    this.speed = 1;
    this.lifespan = 255;
  }

  bounce() {
    if (this.pos.y >= height || this.pos.y <= 0) {
      this.speed *= -1;
    }
    this.pos.y += this.speed;
    if (this.lifespan > 0) {
      this.lifespan--;
    }
  }
}

var particles = [];

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  noStroke();
  particles.push(new Particle(createVector(width / 2, height / 2)));
}

function draw() {
  background(255);
  // loop backwards so splice does not skip the next particle
  for (var i = particles.length - 1; i >= 0; i--) {
    var particle = particles[i];
    particle.bounce();
    // fade from red to white over the lifespan
    var particleColor = lerpColor(color(255), particle.color, particle.lifespan / 255);
    fill(particleColor);
    ellipse(particle.pos.x, particle.pos.y, 50, 50);
    fill(255);
    text(particle.name, particle.pos.x, particle.pos.y);

    if (particle.lifespan <= 0) {
      particles.splice(i, 1);
      print("particle removed!");
      print("number of particles in our array " + particles.length);
    }
  }
}

function mousePressed() {
  particles.push(new Particle(createVector(random(width), height / 2)));
}
