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
    
	//neck
    rect(x - 20, y, w/4 - 20, h - 100);
  
  // face
	fill("LightGreen");
	ellipse(x + 10, y - 120, w - 50, h);
  
    //chin
    arc(x + 6, y - 35, w/3 - 5, h/2 - 15, 50, PI);

	//neck
    rect(x - 10, y, w/5 - 32, h/2 - 5);
  
	// eyes
	fill(eyeColor);
	ellipse(x + 65, y - 90, w/2 - 25, h/5 + 7);
  	ellipse(x - 60, y - 90, w/2 - 25, h/5 + 7);


	
	// reflections
	fill(255,255,255, 160);
	ellipse(x + 90, y - 95, w/10 - 1, h/10 + 1);
    ellipse(x + 70, y - 85, w/10 - 17, h/10 - 10);
    ellipse(x - 80, y - 95, w/10 - 1, h/10 + 1);
    ellipse(x - 58, y - 85, w/10 - 17, h/10 - 10);


	// mouth
    fill(eyeColor);
  	arc(x, y - 40, w/10 + 14, h/2 - 15, 0, PI);
  
     //teeth
    noStroke()  
    fill("white")
    rect(x + 5, y - 40, w/13 - 10, h/19)
  
    //tongue
    noStroke()
    fill("Red")
    ellipse(x, y - 10, 25, 20) 
    noStroke()
    fill(255, 215, 0, 75)
    ellipse(x, y - 10, w/10 - 1, h/10 + 1)  
  
    //cone
    noStroke()
    fill("SaddleBrown")
	triangle(175, 250, 200, 340, 225, 250); // three xy coordinates
   
    //icecream

    noStroke()
    fill("Gold")
    ellipse (50, 50, 60, 60);
    ellipse (150, 50, 25, 25);
    ellipse (150, 150, 25, 25);
    ellipse (150, 200, 25, 25);

    noStroke()
    fill("White")
    ellipse (50, 225, 60, 60);
    ellipse (150, 250, 25, 25);
    ellipse (150, 270, 25, 25);
    ellipse (150, 290, 25, 25);
  

    noStroke()
    fill("Chocolate")
    ellipse (50, 300, 60, 60);
    ellipse (150, 330, 25, 25);
    ellipse (150, 340, 25, 25);
    ellipse (150, 350, 25, 25);

    noStroke()
    fill("Gold")
    ellipse (50, 50, 60, 60);
    ellipse (150, 50, 25, 25);
    ellipse (150, 150, 25, 25);
    ellipse (150, 200, 25, 25);

    noStroke()
    fill("White")
    ellipse (50, 225, 60, 60);
    ellipse (150, 250, 25, 25);
    ellipse (150, 270, 25, 25);
    ellipse (150, 290, 25, 25);
  
  
    noStroke()
    fill("Chocolate")
    ellipse (50, 300, 60, 60);
    ellipse (150, 330, 25, 25);
    ellipse (150, 340, 25, 25);
    ellipse (150, 350, 25, 25);

    //hand
    noStroke()
    fill("LightGreen")
    rect(75, 200, 50, 10, 10);

    //arm
    noStroke()
    fill("LightGreen")
    rect(75, 125, 50, 10, 10);

    //cherry
    noStroke()
    fill("Red")
    ellipse (150, 290, 14, 14);

  
    //glaze
    fill(205, 92, 92, 75)
    rect(x - x, y - y, 640, 360)
}
