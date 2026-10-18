==============================
Generative Text and Typography
==============================

This week is all about libraries and generative text.

10.2 Libraries
==============
- Libraries are pieces of javascript that extend the functionality of p5js.
- Libraries are added to index.html using a script tag with the src attribute ⟶ path to the javascript file.

.. code-block:: html

    <script src="../../libraries/p5.min.js"></script>
    <script src="../../libraries/rita.js"></script>
    <script src="sketch.js"></script>

- libraries/ ⟶ a directory (because of the slash).
- Load the libraries before sketch.js.

10.3 RiTa.js
============
- RiTa ⟶ natural language processing objects for generative literature. Created by Daniel Howe.
- Used for analyzing and generating text. eg., poetry, finding patterns in speeches, drawing shapes based on words in a text.
- `RiTa.js <https://rednoise.org/rita/>`_

Note:
~~~~~
- RiTa is very specific about strings vs arrays as parameters.
  - RiTa.tokenize() ⟶ takes a string
  - RiTa.getPosTags() ⟶ takes an array
- Keep track of what goes into a function and what is returned from it.
- The course uses RiTa v1 (libraries/rita.js is v1.3.94). The functions are renamed in v2 and later.

+----------------------+----------------------------------------+
| v1 (course)          | v2+                                    |
+======================+========================================+
| RiTa.getPhonemes()   | RiTa.phones()                          |
+----------------------+----------------------------------------+
| RiTa.getStresses()   | RiTa.stresses()                        |
+----------------------+----------------------------------------+
| RiTa.getPosTags()    | RiTa.pos()                             |
+----------------------+----------------------------------------+
| lexicon.randomWord() | RiTa.randomWord({ pos, numSyllables }) |
+----------------------+----------------------------------------+

Open source texts ⟶ `Project Gutenberg <https://www.gutenberg.org>`_

10.4 RiTa.tokenize
==================
- Takes a string ⟶ returns an array of tokens.
- Tokens ⟶ words and punctuation marks.

.. code-block:: javascript

    function setup() {
        createCanvas(400, 400);
        var words = RiTa.tokenize("I scream, you scream, we all scream for ice cream.");
        for (var i = 0; i < words.length; i++) {
            text(words[i], 10, i * 20 + 20);
        }
    }

- The commas and the period are also tokens.

10.5 RiTa.getPhonemes
=====================
- Takes a string ⟶ returns the phonetic spelling of the text. eg., for a karaoke app.

.. code-block:: javascript

    var phonemes = RiTa.getPhonemes("got me looking so crazy right now");
    // g-aa-t m-iy l-uh-k-ih-ng s-ow k-r-ey-z-iy r-ay-t n-aw
    text(phonemes, 50, 50, 300, 100);

- text(string, x, y, width, height) ⟶ wraps text inside the box.
- text() also accepts an array, it joins the elements with commas.

10.6 textWidth
==============
- p5js function. Returns the width of a string in pixels.
- eg., draw rectangles to represent how long the words are.

.. code-block:: javascript

    var word = "huge";
    var wordWidth = textWidth(word);
    text(word, 50, 50);
    rect(50, 70, wordWidth, wordWidth);

Code in folder /10.6-TextWidth

10.7 RiTa.getStresses
=====================
- Stresses ⟶ emphasis on a syllable.
- Takes a string ⟶ returns 1 (stressed) and 0 (not stressed) for each syllable.
- Syllables are separated by / ⟶ very ⟶ 1/0

.. code-block:: javascript

    var words = RiTa.tokenize("Thank you very much Mr. Robot");

    function draw() {
        background(255);
        translate(20, 20);
        var pos = 0;
        for (var i = 0; i < words.length; i++) {
            text(words[i], pos, 20);
            text(RiTa.getStresses(words[i]), pos, 45);
            // move along by the width of the previous word
            pos += textWidth(words[i]) + 10;
        }
    }

10.8 RiTa.getPosTags
====================
- Takes an array of words ⟶ returns the part of speech (PENN) tag of each word.

Some PENN tags

- nn ⟶ noun, singular
- nns ⟶ noun, plural
- jj ⟶ adjective
- vb ⟶ verb
- vbg ⟶ verb, gerund (eg., walking)
- rb ⟶ adverb
- dt ⟶ determiner
- in ⟶ preposition

Full list ⟶ `PENN tags <https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html>`_

.. code-block:: javascript

    // In a Station of the Metro - Ezra Pound
    var words = RiTa.tokenize("The apparition of these faces in the crowd");
    var pos = RiTa.getPosTags(words);
    // [dt, nn, in, dt, nns, in, dt, nn]

- pos has the same length as words ⟶ one tag per word. So pos[i] is the tag of words[i].
- Words wrap to the next line when wordPosX goes beyond the width. Code in folder /10.8-PosTags

10.9 RiTa.getWordCount
======================
- Counts the number of words in a string. Useful for large texts like a book or a chapter.

.. code-block:: javascript

    RiTa.getWordCount("Thank you very much Mr. Robot");

- Returns 7 here, the period in "Mr." is counted as a token.

10.10 Generating Text
=====================
- Analyzing text ⟶ RiTa object. Generating text ⟶ RiLexicon object.
- new ⟶ creates a new instance of RiLexicon (same as in objects lesson).

.. code-block:: javascript

    var lexicon;

    function setup() {
        createCanvas(400, 400);
        lexicon = new RiLexicon();
    }

    function mousePressed() {
        background(255);
        text(lexicon.randomWord(), width / 2, height / 2);
    }

10.11 lexicon.randomWord
========================

.. code-block:: javascript

    // any random word
    lexicon.randomWord();

    // random word of a part of speech ⟶ PENN tag
    lexicon.randomWord("nn");

    // random word of a part of speech and number of syllables
    lexicon.randomWord("nn", 2);

Example: Generative Haiku (code in folder /10.11-Haiku)

- Haiku ⟶ 5, 7, 5 syllables in the three lines.
- New haiku on every click.

.. code-block:: javascript

    function generateHaiku() {
        // 1 + 2 + 2
        var output = lexicon.randomWord("jj", 1);
        output += " " + lexicon.randomWord("vbg", 2);
        output += " " + lexicon.randomWord("nn", 2);
        output += "\n";
        // 2 + 2 + 3
        output += lexicon.randomWord("vbg", 2);
        output += " " + lexicon.randomWord("jj", 2);
        output += " " + lexicon.randomWord("nn", 3);
        output += "\n";
        // 1 + 2 + 2
        output += lexicon.randomWord("nns", 1);
        output += " " + lexicon.randomWord("vbg", 2);
        output += " " + lexicon.randomWord("nn", 2);
        text(output, width / 2, height / 2);
    }

- " " ⟶ space between the words.
- "\\n" ⟶ new line character.
- textAlign(CENTER, CENTER) ⟶ aligns text horizontally and vertically.
- Call background() in mousePressed, otherwise the haikus are drawn over each other.

10.12 preload and loadStrings
=============================
- preload() ⟶ built into p5js, runs before setup. Waits until large files are fully loaded before running the sketch.
- loadStrings(path) ⟶ loads a text file as an array of strings. Each string is a line in the file.

.. code-block:: javascript

    var lines;

    function preload() {
        lines = loadStrings("assets/station-of-the-metro.txt");
    }

    function setup() {
        createCanvas(400, 400);
        // join ⟶ array to one string, with a space between the elements
        text(lines.join(" "), 20, 20, width - 40, height - 40);
    }

Note:
~~~~~
- If the sketch is stuck at "Loading..." with no errors, the problem is most likely in preload.
- Check the path to the file. Exact file name, including spaces and the extension.
