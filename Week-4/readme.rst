==============
Week 4 - Color
==============

This week is all about color and how to use color in P5js.

4.2 Colored Light
=================

+ lowest visible frequency ⟸ red ⟹ longest wave length
+ highest visible frequency ⟸ violet ⟹ shortest wave length
+ White is even (uniform) distribution of color
+ Black is absence of Light

- Subtractive color ⟶ mixing color pigments ⟶ dark brown/Black
- Additive color ⟶ mixing colored light ⟶ approaches white

color
-----
.. code-block:: javascript

    color(red,green,blue);

- color takes 3 parameters ⟶ red channel, green channel, blue channel
- color can also be specified as string
  
.. note::

    color can also be specified in the following ways

    - numbers ⟶ var c = color(255,0,0);

    - strings ⟶ var c = color("rgb(100%,0%,0%)");

    - hexadecimal ⟶ var c = color("#ff0000");


fill value
----------
.. code-block:: javascript

    fill(255,0,0);  ⟶ RED fill color
    fill(0,255,0);  ⟶ GREEN fill color
    fill(0,0,255);  ⟶ BLUE fill color

