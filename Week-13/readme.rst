=====
Video
=====

Last class ⟶ video and video effects. Everything learned so far can be applied to video and other media.

Video used this week ⟶ /assets/cat.mp4, a trimmed copy of the cat video in /Examples/1.2_VideoPixels

13.2 Finding Video
==================
Openly available video

- `archive.org <https://archive.org/details/movies>`_ ⟶ eg., collection of nature videos by Don Whitaker.
- `Open Video Project <https://open-video.org>`_ ⟶ many formats, some like MPEG-1 are not easy to use on the web.

13.3 Video Formats and Data
===========================
Video formats on the web

- MPEG-4 / H.264 ⟶ .mp4. Common.
- .mov ⟶ a wrapper for different codecs. Know the codec inside.
- WebM and OGG ⟶ web specific, open source codecs by Mozilla. Simplest to use in a browser, harder to export to.

Hello World video (code in folder /13.3-HelloVideo)

.. code-block:: javascript

    var cat;

    function setup() {
        createCanvas(windowWidth, windowHeight);
        // array of paths ⟶ other formats as fallbacks if the browser doesn't support mp4
        cat = createVideo(["../assets/cat.mp4"]);
        cat.volume(0);
        cat.loop();
        cat.showControls();
    }

    function draw() {
        background(220);
        // center of the element at the center of the page
        cat.position(width / 2 - cat.width / 2, height / 2 - cat.height / 2);
    }

- createVideo() ⟶ creates a video DOM element.
- loop() ⟶ plays the video on loop. play() ⟶ plays once.
- volume(0) ⟶ muted. Browsers don't autoplay videos with sound.

Video data
----------
- video.time() ⟶ current time in seconds.
- video.duration() ⟶ length of the video in seconds.
- Useful to trigger events at a time or to sort videos by duration.

.. code-block:: javascript

    text("current time is " + cat.time(), 20, 32);
    text("video duration is " + cat.duration(), 20, 64);

Code in folder /13.3-VideoData

13.4 Video Cues and Canvas
==========================
Cues
----
- Cue ⟶ schedules an event. When the video reaches a certain time, a callback function is fired.

.. code-block:: javascript

    // addCue(time in seconds, callback, parameter to the callback)
    video.addCue(time, callback, value);

Example (code in folder /13.4-VideoCues) ⟶ background changes at 3 seconds, a bubble floats up at 4 seconds.

.. code-block:: javascript

    var isMakeBubble = false;
    var bubblePos;

    function setup() {
        // ...
        cat.addCue(3, changeBgColor);
        cat.addCue(4, triggerBubble, height);
    }

    function draw() {
        background(bgColor);
        if (isMakeBubble) {
            if (bubblePos < 0) {
                isMakeBubble = false;
            } else {
                ellipse(width / 2, bubblePos, 20, 20);
                bubblePos -= 3;
            }
        }
    }

    function changeBgColor() {
        bgColor = color(random(255), random(255), random(255));
    }

    function triggerBubble(posY) {
        isMakeBubble = true;
        bubblePos = posY;
    }

- Boolean ⟶ good for switching something on or off (state change).

Video in the canvas
-------------------
- A video is a DOM element like a div or canvas.
- To do p5js things to it (tint, filter, pixels) ⟶ draw it in the canvas using image().

.. code-block:: javascript

    function setup() {
        createCanvas(windowWidth, windowHeight);
        cat = createVideo(["../assets/cat.mp4"]);
        cat.volume(0);
        cat.loop();
        // hide the DOM element
        cat.hide();
    }

    function draw() {
        background(220);
        tint(255, 0, 0);
        // image() draws the current frame of the video
        image(cat, width / 2 - cat.width / 2, height / 2 - cat.height / 2);
    }

Code in folder /13.4-VideoCanvas

13.5 Video Inspiration and Webcam Video
=======================================
Inspiration ⟶ not made with p5js or generative techniques, but they can be recreated with code.

- The White Stripes - Fell in Love with a Girl (Michel Gondry) ⟶ LEGO stop motion.

Webcam
------
- createCapture(VIDEO) ⟶ video from the webcam. Works like createVideo.

.. code-block:: javascript

    var capture;

    function setup() {
        createCanvas(640, 480);
        capture = createCapture(VIDEO);
        capture.size(320, 240);
        capture.hide();
    }

    function draw() {
        background(255);
        tint(0, 150, 255);
        image(capture, 0, 0, width, height);
    }

- capture.size() ⟶ size of the source video. Larger ⟶ higher resolution, but slower.
- The size on the canvas is set in image().
- The browser asks for permission to use the camera. Needs localhost or https.

Code in folder /13.5-Webcam

13.6 Conclusion
===============
- Programming takes time ⟶ weeks, months, years.
- Code is a tool, a paintbrush. Used for an artistic purpose, not only to solve problems.
- Keep looking at design and art. Study prior art. Creative coding is an aesthetic experience.
