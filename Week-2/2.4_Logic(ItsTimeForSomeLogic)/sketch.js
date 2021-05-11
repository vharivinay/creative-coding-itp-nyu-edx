var xposTopLeft = 100;
var yposTopLeft = 100;
var xposBottomRight = 300;
var yposBottomRight = 300;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  fill(0,0,255);
  rect(100,100,200,200);
  //if mouse is in the rectangle then make a circle at the cursor

  if (mouseX > xposTopLeft && mouseY > yposTopLeft){
    if (mouseX < xposBottomRight && mouseY < yposBottomRight){
      fill(255);
      ellipse(mouseX,mouseY,25,25);
    }
  }
}

/*
Conditional expressions / Relational Operators
= - assignment
=== - comparison/ equality
!= - not equal to/ inequality (! - *bang* symbol)
< - less than
> - greater than
<= less then or equal to
>= greater than or equal to

Boolean Operators
true or false

if true
  do this
else if true
  do this
else
  do this

Logical Operators/ Expressions

&& - logicalAND - if A && B both or true
|| - logicalOR  - if A || B either one is true
! - NOT - if !A

-----------------------------
In javaScirpt "==" is loose equality and results in 
type coersion. Type coercion is the process of converting
value from one type to another (such as string to number,
object to boolean, and so on). Any type, be it primitive 
or an object, is a valid subject for type coercion.
[More on FreeCodeCamp: https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/]

*/

