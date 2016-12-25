
var i, j;
var colors = [238, 192, 2, 226, 86, 235, 239, 180, 218, 4, 210, 216, 189, 197, 44, 138, 169, 185, 213, 25, 197, 56, 242, 81, 48, 74, 31, 78, 206, 27];
var aromas = ["Stinky Socks / Tutti-Fruitti", "Lime / Lawn Clippings", "Toothpaste / Berry Blue", "Buttered Popcorn / Rotten Egg",
 			  "Chocolate Pudding / Canned Dog Food", "Barf / Peach", "Moldy Cheese / Caramel Corn", "Booger / Juicy Pear",
 			  "Baby Wipes / Coconut", "Skunk Spray / Licorice"];
var aroma = "";

function setup() {
	createCanvas(500, 500);
	background(247, 240, 245);
	frameRate(60);
	smooth(3);

	jelly = new bean();


}
function draw() {
	noStroke();
	jelly.show();
}

function bean(){

	var color = [0, 0 ,0]

	this.show = function(){
		noStroke();
		fill(color[0], color[1], color[2]);
		ellipse(250, 250, 250, 250);
	}

	this.clicked = function(){
		var d = dist(250, 250, mouseX, mouseY);
		if(d<=125){
			background(247, 240, 245);
			var rand = floor(random(0, 9));
			print("rand = " + rand);
			print(color[0]);
			print(color[1]);
			print(color[2]);
			color[0] = colors[rand];
			color[1] = colors[rand+10];
			color[2] = colors[rand+20];
			textSize(25);
			textAlign(CENTER);
			fill(0);
			text(aromas[rand], 250, 435);


		}
	}	

	this.tapped = function(){
		var d = dist(250, 250, touches[0], touches[1]);
		if(d<=125){
			var rand = floor(random(0, 9));
			print("rand = " + rand);
			print(color[0]);
			print(color[1]);
			print(color[2]);
			color[0] = colors[rand];
			color[1] = colors[rand+10];
			color[2] = colors[rand+20];
			textSize(25);
			textAlign(CENTER);
			fill(0);
			text(aromas[rand], 250, 435);

		}
	}

}

function mousePressed(){
	jelly.clicked();
}

function touchStarted(){
	jelly.tapped();	
}