// self portrait
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("#3333ff"); 
	noStroke();
	
  
  // face
	fill("SeaGreen");
	ellipse(310, 150, 260, 190);
  
    //chin
    arc(310, 210, 125, 150, 50, PI);

	//neck
    rect(290, 270, 45, 90);
  

	// face
	fill("MediumSeaGreen");
	ellipse(320, 150, 260, 190);
  
    //chin
    arc(320, 210, 125, 150, 50, PI);

	//neck
    rect(300, 270, 45, 90);
  
  // face
	fill("LightGreen");
	ellipse(330, 150, 200, 190);
  
    //chin
    arc(325, 235, 80, 80, 50, PI);

	//neck
    rect(310, 270, 20, 90);
  
  
  
  
	// eyes
	fill("black");
	ellipse(385, 180, 105, 45);
  	ellipse(260, 180, 105, 45);


	
	// reflections
	fill(255,255,255, 160);
	ellipse(410, 175, 25, 20);
    ellipse(390, 185, 9, 9);
    ellipse(240, 175, 25, 20);
    ellipse(262, 185, 9, 9);


	// mouth
    fill("black");
  	arc(320, 230, 40, 80, 0, PI);
  
     //teeth
    noStroke()  
    fill("white")
    rect(325, 230, 10, 10)
  
    //tongue
    noStroke()
    fill("#B22222")
    ellipse(320, 260, 25, 20) 
    noStroke()
    fill(255, 215, 0, 75)
    ellipse(320, 260, 25, 20)  
   
   //glaze
    fill(205, 92, 92, 75)
    rect(2, 2, 640, 360)
}