// self portrait

	var x = 400;
    var y = 270
    var w = 260;
    var h = 190;
	var eyeColor = "black";

//I will fill in the bottom variables pertaining to hand and ice cream cone when I get around to the interactive self portrait tonight. Additional groups of variables may follow in case I need to group the eyes or mouth portions together.  

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

    //bottom layer scoop of vanilla ice cream
    noStroke()
    fill("White")
    ellipse (200, 230, 60, 60);
    ellipse (182, 255, 22, 22);
    ellipse (200, 255, 22, 22);
    ellipse (218, 255, 22, 22);
  
    //second layer scoop of chocolate ice cream
    noStroke()
    fill("Chocolate")
    ellipse (200, 190, 60, 60);
    ellipse (182, 215, 22, 22);
    ellipse (200, 215, 22, 22);
    ellipse (218, 215, 22, 22);
  
    //third layer scoop of green tea ice cream  
    noStroke()
    fill("LightGreen")
    ellipse (200, 150, 60, 60);
    ellipse (182, 175, 22, 22);
    ellipse (200, 175, 22, 22);
    ellipse (218, 175, 22, 22);

    //fourth layer scoop of chocolate ice cream

    noStroke()
    fill("Chocolate")
    ellipse (200, 110, 60, 60);
    ellipse (182, 135, 22, 22);
    ellipse (200, 135, 22, 22);
    ellipse (218, 135, 22, 22);
  
   //fifth layer scoop of mango ice cream

    noStroke()
    fill("Gold")
    ellipse (200, 70, 60, 60);
    ellipse (182, 95, 22, 22);
    ellipse (200, 95, 22, 22);
    ellipse (218, 95, 22, 22);
  
    //cherry
    noStroke()
    fill("Red")
    ellipse (190, 40, 14, 14);
  
    //hand
    noStroke()
    fill("LightGreen")
    rect(75, 200, 50, 10, 10);

    //arm
    noStroke()
    fill("LightGreen")
    rect(75, 125, 50, 10, 10);

  

  
    //glaze
    fill(205, 92, 92, 75)
    rect(x - x, y - y, 640, 360)
}