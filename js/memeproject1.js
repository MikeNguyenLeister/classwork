

 var img;
 var img2;
 var x =  500;
 var y = 200 ;

function preload() {
	img = loadImage("images/Before.jpg");
	img2 = loadImage("images/After.jpg");
}


function setup() {
	var canvas = createCanvas(900, 500);
   	background("black");
}

function draw(){
	image(img, 20, 50, 400, 250);
	image(img2, 450, 50, 400, 250);
	textSize(50);
    textFont ("Impact");
    fill('red');
	text("GOING INTO 2020", 20, 400);
    fill('gray');
    textFont ("Verdana");
    textSize(30);
	text("before lockdown", 100, 440);

	textSize(50);
	textFont ("Impact");
    fill('yellow');
	text("LEAVING 2020", x + 20, 400);
    fill('gray');
    textFont ("Verdana");
    textSize(30);
	text("after lockdown", x +100, 440);
 

}

	
 
  

	


    /*
    textSize(50);
	stroke('darkblue');
	strokeWeight(10);
	textFont("Verdana");
	text("in the BRONX.", 200, 300); */
