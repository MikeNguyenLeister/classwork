

 var img;
 var img2;
 var x =  500;
 var y = 200 ;
 var t,g, b;
 var speed = 3;
 

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
	if (frameCount % 20 === 0) {
	t = random(0,255);
	g = random(0,255);
	b = random(0,255);
	}
	fill(t, g, b);
	noStroke();
	rect(0, 0, 450, 500);
	pop();
	push();
	tint(225, 0, 225);
	image(img2, 20, 50, 400, 250);
	pop();
	textSize(50);
	textFont ("Impact");
    fill('yellow');
	text("LEAVING 2020", 20, 400);
    fill('yellow');
    textFont ("Verdana");
    textSize(30);
	text("after lockdown",100, 440);
	fill('white');
    textFont ("Comic Sans MS");
    textSize(25);
    text("Like a hairy BOSS!", mouseX, mouseY);
    push();
    fill("pink");
    noStroke();
	rect(25, y,  40, 15);
	fill("blue");
    rect(125, y, 15, 40);
    fill("pink");
	rect(225, y, 40, 15);
	fill("blue");
    rect(325, y, 40, 15);
    rect(425, y, 15, 40);
    pop()
    push()
    translate(width/2, height/2);
	var r = frameCount / 1000 * PI;
	rotate(r);
    fill("GreenYellow");
    noStroke();
    rect(20, y, 40, 15);
    rect(175, y, 15, 40);
    rect(275, y, 40, 15);
    pop();
	y += speed;
	if (y > height) {
		y = 0;
	}

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
    textSize(12);
    push();
	text("Now click & hold mouse button in meme to fast forward time.", mouseX, mouseY);
	pop();
    text("Hover mouse arrow in meme for instruction.", 24, 30);
	
	}
}


