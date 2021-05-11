/* Variables declared out side the scope
i.e., {} --> these thingys, are global variables*/ 

var bgRed = 200;
var bgGreen = 12;

// A varibale can be just declared with out assigning a value.
// But a value needs to be assigned later on
// bgBlue declared here
var bgBlue;

function setup() {
  createCanvas(400, 400);

  /* Variables declared in setup have scope with in setup
  -Meaning they are local variables not availabe to any functions
  outside setup 
  
  -*/
  /*
  If this not done, there is no error raised, but the
  sketch doesn't load
  A value assigned to bgBlue
  */
  
  bgBlue = 24;
  // These are local variables
  /*var bgRed = 200;
  var bgGreen = 12;
  var bgBlue = 24;*/
  
}

function draw() {
  /*
  When tried to access local varibale out side the scope,
  it gives "Uncaught ReferenceError: Variable is not defined"
  */
  background(bgRed,bgGreen,bgBlue);

  // Basic drawing with build-in mouse vaiables
  // mouseX and mouseY define the width and height of the shape here
  stroke(255);
  //RECTANGLE
  //rect(20,20,mouseX,mouseY);

  //ELLIPSE
  //ellipse(width/2, height/2, mouseX, mouseY);

  //SUGGESTED EXERCISE
  rect(mouseX, mouseY, 30,30);
}

/* PRE DEFINED VARIABLES

NUMBER
- width - Width (in pixels) of sketch window
- height - Height (in pixels) of sketch window
- frameCount - No. of frames displayed
- frameRate - FPS (Usually at 60 FPS)
- windowWidth - width of the browser window
- windowHeight - height of the browser window
- key - Most recent key pressed on the keyboard
- keyCode - Numeric code for the key pressed on keyboard in ASCII
- mouseX - x position of the mouse cursor
- mouseY - y position of the mouse cursor

BOOLEAN
- keyIsPressed - Is a key pressed? true/false
- mouseIsPressed - Is the mouse pressed? 

Misc
- mouseButton - Which mouse button is pressed?
                LEFT, CENTER or RIGHT?
*/
