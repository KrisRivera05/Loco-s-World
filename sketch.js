//The setup function only happens once
var loco=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(120,216,mouseX);
}

//The draw function happens over and over again
function draw() {
  background(170,216,231); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127);// an RGB color for the circle's border
  fill(293,254,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(8,200,400,20); // center of canvas, 20px dia
ellipse(mouseX,mouseY,80,20); // center of canvas, 20px dia
stroke(84,178,205);
strokeWeight(5);
fill(211,127,200);
rect(loco,120,200,loco,loco);
line(125,220,300,loco);
point(random(width),random(height));
ellipse(50,100,20,20);

}
function mousePressed() {
if (loco>=100)
{loco=0;}
else
{loco=loco+1;}
}
