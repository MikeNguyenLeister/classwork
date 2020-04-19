// self portrait

	var x = 400;
    var y = 270
    var w = 260;
    var h = 190;
	var eyeColor = "black";

    var x2 = 0;
    var y2 = 0;
    var w2 = 0;
    var h2 = 0;

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("#3333ff"); 
	noStroke();

  // face
	fill("SeaGreen");
	ellipse(x - 10, y - 120, w, h);
  
    //chin
    arc(x - 10, y - 60, w/2 - 6, h - 40, 50, PI);

	//neck
    rect(x - 30, y, w/4 - 20, h/2 -5);
  

	// face
	fill("MediumSeaGreen");
	ellipse(x, y - 120, w, h);
  
    //chin
    arc(x, y - 60, w/2 - 5, h - 40, 50, PI);
