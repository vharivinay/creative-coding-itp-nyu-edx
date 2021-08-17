==========================
Functions and Interactions
==========================

5.1 Introduction
================

- Functions perform predefined/user defined actions.
- They provide **modularity**.
- They provide **reusability** or parameterization.

5.2 Modularity
==============
Anatomy of a function

.. code-block:: javascript

    // Follow camel casing for the function name
    function functionName()
    {   
        /*
        This is the function body
        Code to execute
        */
    }

The function is declared as shown the above code-block.

When a function needs to be invoked / or to make a  function call
the following syntax is used.

.. code-block:: javascript

    /* function call */
    functionName();

In P5js, there is no need to call functions `setup()` and `draw()`

To make a function modular, related logic in one function can be 
written as separate function.

For example

Normal code

.. code-block:: javascript

    function setup() {
        createCanvas(400, 400);
        background(220);
        /* Aligns text to be at center */
        textAlign(CENTER);
        text("Hello there!", width / 2, height / 2);
    }

The idea of modularity is a follows.

.. code-block:: javascript

    function setup() {
        createCanvas(400, 400);
        background(220);
        greetings();
    }

    function greetings() {
        /* Aligns text to be at center */
        textAlign(CENTER);
        text("Hello there!", width / 2, height / 2);
    }

5.3 Reusability
===============
A function can called/invoked as many times as desired to the same thing. If a function takes arguments, it can called to the same things slightly differently.

For example,here is a function that takes in coordinates and size to make a red circle.

.. code-block:: javascript

    function setup(){
        createCanvas(400,400);
        background(220);
    }

    function draw(){
        redCircle(50, 50, 100);
        redCircle(300,300,50);
        redCircle(200,200,75);
    }

    function redCircle(x-center, y-center, radius){
        fill('red');
        circle(x-center, y-center, radius);
    }

5.4 Functions that return data
==============================
A function that returns nothing is considered to return void. They just perform actions and no data is retrieved from them to assign them to a variable.

Functions can also return data in the form of all the fundamental data types and well as user defined objects.

For example

.. code-block:: javascript

    function setup() {
        createCanvas(400, 400);
        background(220);
        /* Aligns text to be at center */
        textAlign(CENTER);
        data = greetings();
        text(data, width / 2, height / 2);
    }

    function greetings() {
        return "Hello there! " + floor(random(30000, 750000));
    }

5.5 Built-in Functions
======================
Some useful built-in functions in P5js are

.. code-block:: javascript

    keyPressed()

    mousePressed()

    mouseClicked()

    mouseMoved()

The functions are used just like setup and draw functions in P5js.
i.e., Declare the function write the desired logic in the function body.

.. code-block:: javascript

    function setup(){
        createCanvas(400,400);
        // write setup
    }

    function draw(){
        // write code to draw    
    }

    function keyPressed(){
        // write what to do on key press
    }

More information on these functions here

- `keyPressed() <https://p5js.org/reference/#/p5/keyPressed>`_
  
- `mousePressed() <https://p5js.org/reference/#/p5/mousePressed>`_
  
- `mouseClicked() <https://p5js.org/reference/#/p5/mouseClicked>`_
  
- `mouseMoved() <https://p5js.org/reference/#/p5/mouseMoved>`_

Note:
~~~~~
- keyPressed() and keyTyped() are similar functions except keyTyped is case sensitive.
- mouseClicked() does what both mousePressed() and mouseReleased() together do.