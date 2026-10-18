==================
Arrays and Objects
==================

- Arrays are for **collections**.
- Objects are for **encapsulating** attributes and behaviors.

8.2 Arrays
==========
Arrays make code more modular and store a bunch of variables in one place.

Instead of this...

.. code-block:: javascript

    var firstPoint = 10;
    var secondPoint = 20;
    var thirdPoint = 30;

we can do this.

.. code-block:: javascript

    // square brackets ⟶ declaring an array
    var points = [10, 20, 30];

- Arrays in javascript are comma separated lists of data.
- Arrays can store numbers, strings, booleans or even objects.
- Each element is referenced by its **index** ⟶ the place at which the element resides in the array.
- Index starts at **0**. i.e., first element ⟶ points[0]

Adding elements to an array
---------------------------
1. Using push ⟶ adds an element to the end of the array

.. code-block:: javascript

    var myFirstArray = [];

    function setup() {
        createCanvas(500, 500);
        for (var i = 0; i < 5; i++) {
            myFirstArray.push(random(0, 100));
        }
        print(myFirstArray);
    }

2. Using the iterator as index

.. code-block:: javascript

    var mySecondArray = [];

    function setup() {
        createCanvas(500, 500);
        for (var i = 0; i < 5; i++) {
            mySecondArray[i] = i * 20;
        }
        print(mySecondArray);
    }

3. Writing out the values ⟶ when the data is known ahead of time or there are only a few elements.

.. code-block:: javascript

    var myThirdArray = ["apple", "orange", "banana", "peach"];

Accessing elements
------------------

.. code-block:: javascript

    // element at index i
    var value = numbers[i];

    // number of elements in the array
    numbers.length;

    // last element in the array
    numbers[numbers.length - 1];

Example: Bullseye (code in folder /8.2-Arrays)

.. code-block:: javascript

    function draw() {
        background(255);
        noFill();
        for (var i = 0; i < mySecondArray.length; i++) {
            ellipse(width / 2, height / 2, mySecondArray[i] + 20, mySecondArray[i] + 20);
        }
    }

Removing elements from an array
-------------------------------
- shorten() ⟶ p5js function, removes the last element of the array.

.. code-block:: javascript

    shorten(myThirdArray);

- splice() ⟶ removes specific element(s) from the array

.. code-block:: javascript

    // array.splice(start index, number of elements to remove)
    var myArray = ["cat", 2, "dog", "turtle", "frog"];
    myArray.splice(2, 1); // removes "dog"

- splice() also returns a new array with the removed elements.

.. code-block:: javascript

    var spliced = myThirdArray.splice(0, 1);

Code in folder /8.2-RemovingElements ⟶ click to remove the first element.

Note:
~~~~~
- Both shorten() and splice() change the original array.
- splice() is handy when the removed value is needed later.

Example: Circle radii
---------------------
Create an array of radii and use it to draw circles of different radii.

.. code-block:: javascript

    var circleRadii = [10, 40, 25, 60, 80];

    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(220);
        for (var i = 0; i < circleRadii.length; i++) {
            ellipse(50 + i * 75, height / 2, circleRadii[i] * 2);
        }
    }

8.3 Objects
===========
If a number of attributes, like speed, name and color are meant to be grouped together as one entity, they can be encapsulated in an object.

Array vs Object

.. code-block:: javascript

    // Array ⟶ square brackets, comma separated values
    var myArray = [5, "red", "ball"];

    // Object ⟶ curly brackets, comma separated key : value pairs
    var particle = {
        speed: 5,
        color: "red",
        name: "ball",
    };

Terminology

- *Properties* ⟶ attributes or the data of an object. eg., ears, nose, color, position of a dog.
- *Methods* ⟶ functions that operate on objects. eg., dog can walk, blink, look around.

There are two ways of creating objects in javascript.

1. Object literals
2. Constructors (classes)

Object literals
---------------

.. code-block:: javascript

    // Object name starts with an uppercase letter
    var CustomObject = {
        propertyName: data,
        methodName: function () {
            // do something
        },
    };

    // access a property using dot notation
    CustomObject.propertyName;

    // call a method ⟶ remember the round brackets
    CustomObject.methodName();

Example (code in folder /8.3-ObjectLiterals)

.. code-block:: javascript

    var Cat = {
        color: "brown",
        greeting: "purr!",
        sayHello: function () {
            // this ⟶ refers to the Cat object
            return this.greeting;
        },
    };

    function setup() {
        createCanvas(400, 400);
        textAlign(CENTER);
        var cat = Cat;
        text(cat.sayHello(), width / 2, height / 2);
    }

- Use object literals when only reading the properties of an object.
- Object literals are not good for writing new values.
- var cat2 = Cat is not a copy. Both refer to the same object. So, changing cat2.color also changes cat.color.

Constructors (Classes)
----------------------
- For objects that do computation, and when the values of each object need to change.
- Think of the class definition as a cookie cutter ⟶ new creates a cookie from it.

.. code-block:: javascript

    class Particle {
        // constructor ⟶ built in, runs when a new object is created
        constructor(pos) {
            // this ⟶ refers to the scope of the class
            this.name = "ball";
            this.color = "red";
            this.pos = pos;
            this.speed = 1;
        }

        // method
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
        // new ⟶ creates a new instance of the class
        ball = new Particle(createVector(random(width), random(height)));
    }

    function draw() {
        background(220);
        ball.bounce();
        fill(ball.color);
        ellipse(ball.pos.x, ball.pos.y, 50, 50);
    }

Code in folder /8.3-BouncingBall

p5 Vector
~~~~~~~~~
- A representation of two or more dimensions. eg., x, y position.
- createVector(x, y) ⟶ creates a 2D vector
- Values are accessed by vector.x and vector.y

.. code-block:: javascript

    var pos = createVector(random(width), random(height));
    print(pos.x);
    print(pos.y);

8.4 Particle Systems
====================
A particle system is a collection of many minute particles that together represent a fuzzy object. Over a period of time, particles are generated into a system, move and change within the system and die within the system. - William Reeves (1983)

- *Lifespan* ⟶ how long a particle lives on screen until it is destroyed.
- *Emitter* ⟶ the source of the particles. eg., top of a volcano.

Recipe

1. Define a particle object.
2. Create a bunch of instances of that particle (new Particle()).
3. Add each of the instances to a collection ⟶ array. To keep track of position and lifespan of all particles.
4. Do things with the particles ⟶ apply forces, change color etc., using methods.

Example: Simple Particle System (code in folder /8.4-ParticleSystem)

- A new particle is added on every mouse click.
- The particle fades from red to white over its lifespan and is removed from the array when it dies.

.. code-block:: javascript

    class Particle {
        constructor(pos) {
            this.name = "asteroid";
            // lerpColor needs a color, not a string
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
        noStroke();
        particles.push(new Particle(createVector(width / 2, height / 2)));
    }

    function draw() {
        background(255);
        for (var i = particles.length - 1; i >= 0; i--) {
            var particle = particles[i];
            particle.bounce();
            // lifespan / 255 ⟶ lerp amount between 0 and 1
            fill(lerpColor(color(255), particle.color, particle.lifespan / 255));
            ellipse(particle.pos.x, particle.pos.y, 50, 50);
            if (particle.lifespan <= 0) {
                particles.splice(i, 1);
            }
        }
    }

    function mousePressed() {
        particles.push(new Particle(createVector(random(width), height / 2)));
    }

Note:
-----
- Without removing dead particles, the array keeps growing and the sketch slows down.
- Loop backwards when splicing inside a loop, otherwise the element after the removed one is skipped.
- Parameters like name and color can be passed to the constructor to make different looking particles from the same class.

Inspiration: Murmuration ⟶ thousands of starlings flying together as one shape.
