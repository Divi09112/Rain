var drops = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	for ( i = 0; i<200; i++) {
		tmpd = new Drop();
		drops.push(tmpd);
	}

	frameRate(60);
}

function draw() {
	background(51);
	
	for ( i = 0; i<200; i++) {
		tmpd = drops[i];
		tmpd.fall();
		tmpd.show();
	}
}

function Drop() {
	this.angle = PI/8;
	this.sn = Math.sin(this.angle);
	this.cs = Math.cos(this.angle);
	this.tn = Math.tan(this.angle);
	this.x = random(-windowHeight*this.tn, windowWidth-(200*this.tn));
	this.y = random(-200,0);
	this.z = random(0,20);
	this.speed = random(8,12);
	
	this.fall = function() {
		this.y = this.y + this.speed * this.cs;
		this.x = this.x + this.speed * this.sn;

		if (this.y > windowHeight || this.x > windowWidth) {
			this.y = random(-200,0);
			this.x = random(-windowHeight*this.tn, windowWidth-(200*this.tn));	
		}
	}

	this.show = function() {
		var wt = map(this.z, 0, 20, 1, 3);
		strokeWeight(wt);
		stroke(66, 134, 244);
		line(this.x,this.y, this.x+(10*this.sn), this.y+(10*this.cs));
	}
}