function setup() {
	var canvas = createCanvas(640, 360);
	canvas.drawingContext.miterLimit = 2; // fix for stroke edges
	background(254);
    textSize(25);  
	text("Mike Leister says", 20, 26);

	textSize(100);
    textFont ("Impact");
	text("Stay strong", 20, 125);
    textStyle(BOLD);
 
  

	fill('CornflowerBlue');
    textFont ("Comic Sans MS");
	textStyle(BOLD);
     textSize(60);
	text("New Yorkers", 100, 200);


    textSize(50);
	stroke('darkblue');
	strokeWeight(10);
	textFont("Verdana");
	text("in the BRONX.", 200, 300);
}