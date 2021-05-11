# Week 1 Notes

>## Basic Structure
- Any P5js sketch contains a *setup* and a *draw* function.
- *draw* loops whatever is written in it.
- *createCanvas* makes the canavs of the given size.
- *createCanvas(400, 400)* creates a canvas of width 400px and height 400px.
- *background(r,g,b)* sets the background color of the canvas
- If *backgound()* is called in draw, a background of given color is drawn every frame.
----

>## Primitives

### Creating a point
- point(x-coordinate, y-cordinate);

### Creating a line
- line(start-X-coord, start-Y-coord, end-X-coord, end-Y-coord)

### Creating a rectangle
- rect(X-topLeft, Y-topLeft, width, height);

### Creating a quadrilateral
- quad(xtopLeft, ytopLeft, xtopRight, ytopRight, xbottomRight, ybottomRight, xbottomLeft, ybottomLeft);

### Creating a triangle
- triangle(firstPointX, firstPointY,secondPointX, secondPointY,thirdPointX, thirdPointY);

### Creating an ellipse
- ellipse(positionX, positionY, width, height);
  - for circle width=height

### Creating an arc

-arc(centerX, centerY, width, height, startAngle, endAngle,
optionalparm);
- the options for optionalparm are *CHORD* and *PIE*
- Without the optional argument, the arc's perimeter is not closed.
- Optional *CHORD* makes a closed curve, but the shape isn't a sector. 
- Optional *PIE* makes a closed curve, and the shape is a sector.

### Some other functions
- *noFill()* doesn't fill the shape with any color.
- *fill(r,g,b)* defines the fill color.
- *noStroke()* disables the oulines for the shapes.
- *stroke(r,g,b)* sets the stroke color.
- *strokeWeight(value)* defined the thickness of the stroke
