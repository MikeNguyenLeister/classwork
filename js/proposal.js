
/*
color names: 
final project pitch
5.26.2020

Roberts, Owen. Lecture: Final Project Presentation ~ MMP 210. BMCC, May 5, 2020: 
        https://www.youtube.com/watch?v=MCNXclyTUEE .       

*/



var currentSlide = 0;
var numberOfSlides = 3;
// next slide button
var nextButtonX = 850;
var nextButtonY = 680;
var nextButtonW = 100;
var nextButtonH = 33;
//previous slide button
var prevButtonX = 10;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW + 30;
var prevButtonH = nextButtonH;


function setup() {
    createCanvas(960, 720);

}
function draw(){
    background('#25274d');
    //text('slide' + currentSlide, 100, 100);
    var title; // the title of slide.
    var description; 

        if (currentSlide == 0){
            title = "My final project";
            description = "An interactive sound project involving a choose your own E.T. encounter.";
        } 
        else if (currentSlide == 1) {
           title = "User interaction"; 
           description = "User will click a different UFO for different sounds + animations.";
        } 
        else if (currentSlide == 2) {
            title = "Graphics";
            description = "The graphics will use p5 shapes and colors.";

       var x = 500;
       var size = 6;
       var y = 375;

        var r = (50);
        var g = (125);
        var b = (190);
            //spaceship top lid
                   stroke(r,g,b, 99);
                    fill(r, g, b, 85);
                    ellipse(x, y+80,  size*49, size* 20);

            //spaceship middle part 1
                    fill(255, 128, 195);
                    ellipse(x, y+127, size*96,  size*25);


            //spaceship middle part 2
                    fill(199, 21, 133);
                    ellipse(x, y+138, size*95,  size*20);

            //spaceship bottom lid

                    fill(115, 13, 77);
                    ellipse(x, y+165, size*60, size*19);

            //entrance
                    
                    fill(26, 255, 178);
                    ellipse(x, y+199,  size*36,size* 9);
                    
        }

                
        //display title
        textSize(80);
        fill('#fff');
        noStroke();
        textAlign(LEFT, TOP);
        text(title, 20, 20);
        //slide button

        //display description
        textSize(40); 
        fill('#aaabb8')
        text(description, 20, 200, width - 40);

        //button background design
        fill('#29648a');
        stroke('#fff');
        strokeWeight(2);

    if (currentSlide < numberOfSlides - 1) {
            rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH, 5);//next
        }

    if (currentSlide> 0) {
            rect(prevButtonX,  prevButtonY, prevButtonW, prevButtonH, 5);//prev
        }
        
        //text design
        fill('#fff');
        textSize(25);
        noStroke();
        textAlign(CENTER, CENTER);
        textFont('Trebuchet MS');

        
    if (currentSlide < numberOfSlides - 1) {
        text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH);
    }
    if (currentSlide> 0) {
        text("Previous", prevButtonX,  prevButtonY, prevButtonW, prevButtonH);
    }
}


function mousePressed() {
    // detecting mouse collision with the next button
    if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
                mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
        if (currentSlide < numberOfSlides -1){
            currentSlide++;
         }
    }

    
    //detect mouse collision with previous button
    if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
        mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
        if (currentSlide > 0) {
        currentSlide--;
        }

    }

 }

/*

Project Notes:
function setup() {
    createCanvas(960, 720);

}

function draw() {
    background(51);
    var d = dist(width/2, height/2, mouseX, mouseY);
    var s = 500;

   if  (d < s/2) {
        fill ('gold');
    } else {

    fill('lightblue');
    }
   
    ellipse(width/2, height/2, s);
}

......More project notes. 
        }
        else if (currentSlide == 3) {
            title = "Graphics Part 2";
            description = "My background design.";

                    var w = 50;
                    noFill();
                    
                    for (let x = 0; x < width; x+= w) {
                                for (let y = 0; y < height; y +=w){
                                    stroke(0);
                                    ellipse(x, y, w * 2);
                                    stroke(127);
                                    rect(x - w/4, y - w/4, w/2, w/2);

                        }
                    
                }



*/