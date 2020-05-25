/*
in.

/* Some code was inspired from The Coding Train. See (https://www.youtube.com/watch?v=1c1_TMdf8b8).

Shiffman, Daniel. "Loading and Playing - p5.js Sound Tutorial." The Coding Train, June 7 2016:  
    https://www.youtube.com/watch?v=Pn1g1wjxl_0 .  .  


tuberatanka. [C]at meow. "110011_tuberatanka_cat-meow." FreeSound, Dec. 6 ,2010:
    https://freesound.org/people/timtube/sounds/61259/ . */

/*

var img;
var x = 300;
var y = 80;
var cat;

function preload() {
    img = loadImage("dog.png");
    cat = loadSound('meow'.wav);

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
    text("CLICK ENTER", x + 20, y + 100);
    fill('black');
    textFont("Brush Script MT");
    textSize(50);
    text("to hear the dog", x + 30, y + 150);
    textSize(60);
    fill('coral');
    text("BARK!", x + 100, y + 215);
            
}

    if (keyIsPressed) {
        if (key == 'ENTER') {
            
            
        } else {
            cat.play();
            textSize(50);
            fill('gray');
            text("...Or meow.", x +100, y+ 268);




        }
    }

*/

/*Code is for test run to fix DOM sound issues */

var sound;
var slider; 

function setup() {
    createCanvas(200, 200);
    sound = loudSound("meow.mp3", loaded);
    sound.setVolume(0.6);
    sliderRate = createSlider(0, 1.5, 1, 0.01);
    sliderPan = createSlider(-1, 1, 0.5, 0.01);
    
}

function loaded(){
    song.play();
}
function draw(){
    background(0)
    sound.setVolume(slider.value());
}
