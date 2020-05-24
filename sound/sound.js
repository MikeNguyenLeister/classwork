/* Some code was inspired from The Coding Train. See (https://www.youtube.com/watch?v=1c1_TMdf8b8).

Shiffman, Daniel. "4.2: Nested Loops - p5js Tutorial." The Coding Train. Sept. 11, 2015:  
     https://www.youtube.com/watch?v=1c1_TMdf8b8 .  */ 


var colorSlider;
function setup() {

    var canvas = createCanvas(800, 400);
    canvas.parent("sketch");



    createP("Color Slider");
    colorSlider = createSlider(0,255);
    colorSlider.input(pattern);
     var saveButton = createButton('Save Image');
    saveButton.mousePressed(saveImage);
    pattern();
}   


function saveImage() {
    save('pattern.png');
}

function pattern() {
    background(7, 33, 44);
    stroke('black');
    var size = -1;
    var d = -2;



    for (var x= 0; x <=width; x +=50) {
        for (var y = 0; y <= height; y += 50){
        var r = random(100, 255);
        var g = random(125, 255);
        var b = 0;


//spaceship top lid
        fill(100, 198, 255);
        ellipse(x, y+(120/d),  size+(49/d), size+ (20/d));

//spaceship middle part 1
        fill(r,g,b);
        ellipse(x, y+(127/d), size+(96/d),  size+(25/d));


//spaceship middle part 2
        fill(30, 133, 174);
        ellipse(x, y+(130/d), size+(95/d),  size+(20/d));

//spaceship bottom lid

        fill(22, 100, 131);
        ellipse(x, y+(135/d), size+(60/d), size+(19/d));

//entrance
       fill(30, 133, 174);
        ellipse(x, y+(140/d),  size+(36/d),size+ (9/d));
 }

    }
}




