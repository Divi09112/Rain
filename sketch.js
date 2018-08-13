var drops = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	for ( i = 0; i<500; i++) {
		tmpd = new Drop();
		drops.push(tmpd);
	}

	frameRate(60);
}

function draw() {
	background(51);
	
	for ( i = 0; i<500; i++) {
		tmpd = drops[i];
		tmpd.fall();
		tmpd.show();
	}
}

function Drop() {
	this.x = random(windowWidth);
	this.y = random(-200,0);
	this.z = random(0,20);
	this.speedy = random(8,12);
	
	this.fall = function() {
		this.y = this.y + this.speedy;

		if (this.y > windowHeight) {
			this.y = random(-200,0);
			this.x = random(windowWidth);	
		}
	}

	this.show = function() {
		var wt = map(this.z, 0, 20, 1, 3);
		strokeWeight(wt);
		stroke(66, 134, 244);
		line(this.x, this.y, this.x, this.y + 10);
	}
}