

/* Although I didn't use Daniel Shiffman's codes, I did find some inspiration from The Coding Train.

I did the drawing in AI, but I did use a still-life that I bought from CVS.


Works Cited:

Halloween Dog Decor 8.1 inch. CVS Pharmacy, Inc, One CVS Drive Woonsocket, RI, 2019. 

Roberts, Owen. "KeyCode." MMP210. Viewed May 25, 2020: 
    https://owenroberts.github.io/mmp210/notes/keyboard/ .

Shiffman, Daniel. "Loading and Playing - p5.js Sound Tutorial." The Coding Train, June 7 2016:  
    https://www.youtube.com/watch?v=Pn1g1wjxl_0 .  .  


tuberatanka. [C]at meow. "110011_tuberatanka_cat-meow." FreeSound, Dec. 6 ,2010:
    https://freesound.org/people/timtube/sounds/61259/ . */



var img;
var x = 300;
var y = 80;
var cat;

function preload() {
    img = loadImage('images/dog.png');
    cat = loadSound('images/meow.mp3');

}


function setup() {
     var canvas = createCanvas(600, 600);
    background("black");

}

function draw() {
    image(img, 0, 0, 600, 600);
    textSize(40);
    textFont("Comic Sans MS");
    fill('purple');
    text("PRESS ENTER", x + 20, y + 100);
    fill('black');
    textFont("Brush Script MT");
    textSize(50);
    text("to hear the dog", x + 30, y + 150);
    


if (cat.isPlaying()) {
    textSize(60);
    fill('gray');
    text("MEOW!", x + 100, y + 215);
    } else {
    textSize(60);
    fill('coral');
    text("BARK!", x + 100, y + 215);
    }   
}
            


function keyPressed() {
    
        if (keyCode == 13) {
             cat.play();
            
        }
    }



