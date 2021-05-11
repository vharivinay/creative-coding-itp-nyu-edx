
// Declare variable using 'var' key word
// var NAME_OF_VARIABLE = Initial value of variable
// Here variable bgRed is initialized at 200
// Variable names are case sensitive
var bgRed = 200;

var xpos = 50;
var ypos = 50;
var side = 150;

function setup() {
  createCanvas(400, 400);

  /*
  Data types
  Numbers 
  Strings - usually in "" or ''
  Null
  Boolean - true or false
  */

  var myString = "Hello there!";
  // println key word is used for printing
  print(myString);

  var theBestNumberEver = 73;
  print(theBestNumberEver);

  var canYouHandleTheTruth = false;
  print(canYouHandleTheTruth);

  var whatcugot = null;
  print(whatcugot);
}

function draw() {
  background(bgRed, 24, 0);
  fill(bgRed/2, 24, 12);

  //Using varibales for function arguments
  rect(xpos,ypos,side,side);

  //side = side + 1;
}


