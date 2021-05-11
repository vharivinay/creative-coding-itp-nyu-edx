# Week 2 - Notes

>## VARIABLES

### Data types

- Numbers - integers, floating point values
- Strings - usually in " " --> this or ' ' --> this. 
- Null
- Boolean - true or false

### Variables

- Declare variable using 'var' key word
- var NAME_OF_VARIABLE = Initial value of variable
- Variable names are case sensitive
- print keyword is used to print the variable value into console
----
>## VARIABLE SCOPE 

### Global Variables
- Variables declared out side the scope i.e., {} --> these thingys, are global variables.

- A varibale can be just declared with out assigning a value. But a value needs to be assigned later on.

### Local Variables
- Variables declared in setup or with in any function have scope with in setup or that function.
- Meaning they are local variables not availabe to any functions outside the parent function.
-When tried to access local varibale out side the scope,
it gives "Uncaught ReferenceError: Variable is not defined"

----
>## PRE DEFINED VARIABLES

#### NUMBER
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

#### BOOLEAN
- keyIsPressed - Is a key pressed? true/false
- mouseIsPressed - Is the mouse pressed? 

#### Misc
- mouseButton - Which mouse button is pressed?
                LEFT, CENTER or RIGHT?

----
>## OPERATORS/OPERATOR EXPRESSIONS
- '+' addition
- '-' subrtaction
- '*' multiplication
- '/' division
- '%' modulo (This give the remainder after multiplication)
- '=' assignment
- '!' bang operator (Returns opposite of a boolean)

### EXPRESSIONS
- 'Hello' + ' ' + 'there!' gives Hello there! (Or General Kenobi if you are nasty.)
- Basic arithemetic works the same.
- 23%4 (23 mod 4) gives 3. 
----
>## LOGIC

### Conditional expressions / Relational Operators
- === - comparison/ equality
- != - not equal to/ inequality (! - *bang* symbol)
- < - less than
- '>' - greater than
- <= less then or equal to
- '>=' greater than or equal to

### Boolean Operators
true or false

if true
  do this
else if true
  do this
else
  do this

### Logical Operators/ Expressions

&& - logicalAND - if A && B both or true
|| - logicalOR  - if A || B either one is true
! - NOT - if !A

>### NOTE:
In javaScirpt "==" is loose equality and results in 
type coersion. Type coercion is the process of converting
value from one type to another (such as string to number,
object to boolean, and so on). Any type, be it primitive 
or an object, is a valid subject for type coercion.
[More on this is explained at FreeCodeCamp](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)


