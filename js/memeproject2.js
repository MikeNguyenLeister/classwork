

 var img;
 var img2;
 var x =  500;
 var y = 200 ;

function preload() {
	img = loadImage("images/Before.jpg");
	img2 = loadImage("images/After.jpg");
}


function setup() {
	var canvas = createCanvas(450, 500);
}

function draw(){
	if (mouseIsPressed) {
	background('plum');
	push();
	tint(225, 0, 225);
	image(img2, 20, 50, 400, 250);
	pop();
	textSize(50);
	textFont ("Impact");
    fill('yellow');
	text("LEAVING 2020", 20, 400);
    fill('gray');
    textFont ("Verdana");
    textSize(30);
	text("after lockdown",100, 440);
	fill('white');
    textFont ("Verdana");
    textSize(15);
    text("Like a hairy BOSS!", mouseX, mouseY);

} else {
	background("black");
	image(img, 20, 50, 400, 250);
	textSize(50);
    textFont ("Impact");
    fill('red');
	text("GOING INTO 2020", 20, 400);
    fill('gray');
    textFont ("Verdana");
    textSize(30);
	text("before lockdown", 100, 440);
	fill('white');
    textFont ("Verdana");
    textSize(15);
    push();
	text("Now click in meme to fast forward time.", mouseX, mouseY);
	pop();
    text("Hover mouse arrow in meme for instruction.", 24, 30);
	
	}
}
   
	
 
  
