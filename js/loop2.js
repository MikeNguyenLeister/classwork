




/*
color names: 
https://www.w3schools.com/colors/colors_names.asp


*/


function setup() {
	createCanvas(900, 400);
    
    pattern(); // generate a pattern to start

    var patternButton = createButton('New Pattern');
    patternButton.mousePressed(pattern);

    var saveButton = createButton('Save Image');
    saveButton.mousePressed(saveImage);
}

function saveImage() {
    save('pattern.png');
}

function pattern() {
	background("#0f292f"); 
	rectMode(CENTER);


  for (var x = 100; x < width; x += 145) {
  	   var size = random(1, 80);
  	   var y = random(50,100)

  		var r = random(100, 255);
		var g = random(125, 255);
		var b = random(150, 255);

//spaceship top lid
		fill('azure');
		ellipse(x, y+120,  size+49, size+ 20);

//spaceship middle part 1
		fill(255, 128, 195);
		ellipse(x, y+127, size+96,  size+25);


//spaceship middle part 2
		fill(199, 21, 133);
		ellipse(x, y+130, size+95,  size+20);

//spaceship bottom lid

		fill(115, 13, 77);
		ellipse(x, y+135, size+60, size+19);

//entrance
		//fill(26, 255, 178);
		fill(r, g, b);
		ellipse(x, y+140,  size+36,size+ 9);
 }
}

/*
		strokeWeight(4);
		fill(0, 255, 255);
		semicircle(300, 190, 250, 90, PI, TWO_PI);


}






/*

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
    ellipse(x - 80, y - 95, w/10 - 1, h/10 + 1);
    ellipse(x - 68, y - 78, w/10 - 17, h/10 - 10);
    ellipse(x + 45, y - 95, w/10 - 1, h/10 + 1);
    ellipse(x + 55, y - 78, w/10 - 17, h/10 - 10);


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
  
  
    //palm
    noStroke()
    fill("LightGreen")
    ellipse (203, 290, 43, 43);
  
    //thumb
    noStroke()
    fill("LightGreen")
    ellipse (225, 268, 20, 20);

  
     //fingers darker shade
    noStroke()
    fill("MediumSeaGreen")
    rect(167, 270, 42, 12, 10);
   
    noStroke()
    fill("MediumSeaGreen")
    rect(167, 290, 47, 12, 10);
    //arm
  
    noStroke()
    fill("MediumSeaGreen")
    rect(195, 300, 20, 80, 10);
  
    noStroke()
    fill("LightGreen")
    rect(200, 300, 20, 80, 10);
  
   
    
    
    //cone
    noStroke()
    fill("SaddleBrown")
	triangle(175, 250, 200, 340, 225, 250); // three xy coordinates
   
    //icecream

    //first scoop of vanilla ice cream
    noStroke()
    fill("White")
    ellipse (200, 230, 60, 60);
    ellipse (182, 255, 22, 22);
    ellipse (200, 255, 22, 22);
    ellipse (218, 255, 22, 22);
  
    //second scoop of chocolate ice cream
    noStroke()
    fill("Chocolate")
    ellipse (200, 190, 60, 60);
    ellipse (182, 215, 22, 22);
    ellipse (200, 215, 22, 22);
    ellipse (218, 215, 22, 22);
  
    //third scoop of green tea ice cream  
    noStroke()
    fill("LightGreen")
    ellipse (200, 150, 60, 60);
    ellipse (182, 175, 22, 22);
    ellipse (200, 175, 22, 22);
    ellipse (218, 175, 22, 22);

    //fourth scoop of chocolate ice cream

    noStroke()
    fill("Chocolate")
    ellipse (200, 110, 60, 60);
    ellipse (182, 135, 22, 22);
    ellipse (200, 135, 22, 22);
    ellipse (218, 135, 22, 22);
  
   //fifth scoop of mango ice cream

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
  
  
    //fingers
    noStroke()
    fill("LightGreen")
    rect(176, 270, 42, 12, 10);
   
    noStroke()
    fill("LightGreen")
    rect(176, 290, 47, 12, 10);

    
    
    //glaze
    fill(205, 92, 92, 75)
    rect(x - x, y - y, 640, 360) */


 

