># Week 3 - Loops and Repetitions
<p>
    This week we’ll learn to do more with less. More specifically, we’ll learn about ‘while’ and ‘for’ loops, which enable us to draw hundreds of shapes with just a few lines of code. You will then apply the learning to draw complex shapes containing many vertices, and with p5’s beginShape(), vertex(x,y), and endShape() commands. 
</p>

## 3.2 Loops
>- While loop - Anatomy

while(true condition){
<div style="padding-left: 30px;">
Do this each loop iteration
</div>
}
<br>

>- For loop - Anatomy

for (start condition; exit condition; iterator){<br>
    <div style="padding-left: 30px;">
        Do this each loop iteration
    </div>
}
- - exit condition can be until a certain value or until and including a certain value
    i.e., i < value;
    or i <= value;
- - iterator can move one value each loop or more than one.
    i.e., i++ or i+=x;

## 3.3 Nested Loops - Looping in 2-Dimensions
>- Nested while loop - Anatomy

while(x is true condition){
    <div style="padding-left: 30px;">
    while (y is true condition){
    <div style="padding-left: 30px;">
        Do this each loop iteration
        increment y;
    </div> 
    }<br>
    increment x;
    </div>
}


>- Nested for loop - Anatomy

for (x start condition; exit condition; x-iterator){
    <div style="padding-left: 30px;">
    for (y start condition; exit condition; y-iterator){
        <div style="padding-left: 30px;">
        Do this each loop iteration;
        </div> 
    }
    </div>
}

## 3.4 Moire Patterns
<p>A moire pattern is an interference pattern that is sometimes produced in digital images, particularly when a printed image is scanned. Two patterns of circles or lines overlap along with sketchy alignments, and light and dim lines are produced.</p>
[More on this in wiki](https://en.wikipedia.org/wiki/Moir%C3%A9_pattern)

- Overlapping similar patterns would be simple start.

## 3.5 beginShape() and endShape()
- Anatomy

beginShape()
<div style="padding-left: 30px;">
    vertex(x-cordinate, y-cordinate);
</div>
endShape()

- Parameters availabe for beginShape() are
<div style="padding-left: 30px;">
POINT<br>
LINES<br>
TRIANGLES<br>
TRIANGLE_FAN<br>
TRIANGLE_STRIP<br>
QUADS<br>
QUAD_STRIP<br>
TESS (WebGL)
</div><br>

- The only parameter availabe for endShape() is
<ul>
CLOSE (Creates a closed curve)
</ul>


## Section Conclusion
<p>
    You should now understand how loops, specifically the for and while loops can be used to generate dozens — even hundreds — of shapes in p5. Loops are a critical aspect of programming in any language, and much of the content you see on the web every day is powered, at some level, by loops. Share any questions you have about these topics in the forums, and we'll see you next week! 
</p>

## 3.6 Additional Resources: Arrays
- [Repetition, Rhythm and Pattern](http://flyeschool.com/content/repetition-rhythm-and-pattern)
- [The Patternbase Digital Archive](https://patternbase.tumblr.com/)
- Arrays are covered later in Week 8. [Some simple examples for using arrays](https://openprocessing.org/sketch/400510#)
----
>### Examples
[While loop](https://openprocessing.org/sketch/400504#)

[Random While loop](https://openprocessing.org/sketch/400505#)

[Simple for loop](https://openprocessing.org/sketch/400506#)

[For loop](https://openprocessing.org/sketch/400507#)

[Arrays](https://openprocessing.org/sketch/400508#)

[Array with numbers](https://openprocessing.org/sketch/400509#)

[Array Drawing](https://openprocessing.org/sketch/400510#)

