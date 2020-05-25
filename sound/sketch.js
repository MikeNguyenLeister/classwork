/*2nd test run to get sound to run on DOM. Used professor's code from class site. Although I'm using a private test server, my morking theories 
are that it could be my browswer, an error in my html coding on index side, or a script error requiring another add-on. I used my professor's code as a placeholder. 
The loading time remains indefinite for a one second mp3.  


Two errors came back this time:

1) p5.sound.js:3112 Uncaught ReferenceError: p5 is not defined
    at Object.<anonymous> (p5.sound.js:3112)....

2)Uncaught (in promise) ReferenceError: loadSound is not defined
    at preload (sketch.js:6)....

*/

var chickens;

function preload() {
    chickens = loadSound('meow.mp3');
}

function setup() {
    createCanvas(640, 200);
}

function draw() {
    if (chickens.isPlaying()) {
        background('yellow');
    } else {
        background(0)
    }   
}

function keyPressed() {
    if (keyCode == 32) { // Space bar
        chickens.play();
    }
}

/*Two errors came back this time:

1) p5.sound.js:3112 Uncaught ReferenceError: p5 is not defined
    at Object.<anonymous> (p5.sound.js:3112)....

2)Uncaught (in promise) ReferenceError: loadSound is not defined
    at preload (sketch.js:6)


p5.sound.js:3112 Uncaught ReferenceError: p5 is not defined
    at Object.<anonymous> (p5.sound.js:3112)
    at Object.<anonymous> (p5.sound.js:3160)
    at __webpack_require__ (p5.sound.js:84)
    at Object.<anonymous> (p5.sound.js:2885)
    at Object.<anonymous> (p5.sound.js:2956)
    at __webpack_require__ (p5.sound.js:84)
    at p5.sound.js:120
    at p5.sound.js:122
(anonymous) @ p5.sound.js:3112
(anonymous) @ p5.sound.js:3160
__webpack_require__ @ p5.sound.js:84
(anonymous) @ p5.sound.js:2885
(anonymous) @ p5.sound.js:2956
__webpack_require__ @ p5.sound.js:84
(anonymous) @ p5.sound.js:120
(anonymous) @ p5.sound.js:122
sketch.js:6 Uncaught (in promise) ReferenceError: loadSound is not defined
    at preload (sketch.js:6)
    at _start (p5.min.js:3)
    at new _ (p5.min.js:3)
    at p5.min.js:3
preload @ sketch.js:6
_start @ p5.min.js:3
_ @ p5.min.js:3
(anonymous) @ p5.min.js:3
Promise.then (async)
46.../core/main @ p5.min.js:3
u @ p5.min.js:3
(anonymous) @ p5.min.js:3
37../color/color_conversion @ p5.min.js:3
u @ p5.min.js:3
o @ p5.min.js:3
(anonymous) @ p5.min.js:3
(anonymous) @ p5.min.js:3
(anonymous) @ p5.min.js:3 */




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
var p;

function preload() {
    img = loadImage("dog.png");
    p = loadSound('meow'.wav);

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
             p.play();
            textSize(50);
            fill('gray');
            text("...Or meow.", x +100, y+ 268);
            
      




        }
    }
*/


/*Code is for test run to fix DOM sound issues 

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
    sound.play();
}
function draw(){
    background(0)
    sound.setVolume(slider.value());
}



*/