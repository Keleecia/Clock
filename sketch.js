
var squareColor;
function setup() {
  createCanvas(400,400,WEBGL);
 // camera(200,200,200);
 



}


function draw() {
  background(0, 0, 26);
  //0,19,26

  hr = hour();
  mn = minute();
  sc = second();

  end1 = map(sc,0,60,0,360);
  end2 = map(mn,0,60,0,360);
  end3 = map(hr,0,12,0,360);
 
  push();
 
  rotate(end1);
  stroke(255,128,128);
  strokeWeight(6)
  line(0,0,0,-100);
  noFill();
  pop();

  push();
  rotate(end2);
  stroke(102, 140, 255);
  strokeWeight(8)
  line(0,0,0,-100);
  noFill();
  pop();

  push();
 
  rotate(end3);
  
  stroke(255, 255, 179);
  strokeWeight(8)
  line(0,0,0,-100);
  noFill();
  pop();

  push();
  fill(255,255,102);
  noStroke();
  circle(0,0,15);
  pop();
  
 push();
 tint(255, 127);
 squareColor = color(255,128,128);
 squareColor.setAlpha(40);
 stroke(squareColor);
 rotate(end1);
 rectMode(CENTER);
 noFill();
 strokeWeight(7);
 rect(0,0,237,237);
 pop();


 push();
 tint(255, 127);
 squareColor = color(102, 140, 255);
 squareColor.setAlpha(80);
 stroke(squareColor);
 rotate(end2);
 rectMode(CENTER);
 noFill();
 strokeWeight(7);
 rect(0,0,340,340);
 pop();

 push();
 tint(255, 127);
 squareColor = color(255, 255, 179);
 squareColor.setAlpha(160);
 stroke(squareColor);
 rotate(end3);
 rectMode(CENTER);
 noFill();
 strokeWeight(7);
 rect(0,0,500,500);
 pop();

 push();
  fill(0, 0, 14);
  noStroke();
  circle(0,0,220);
  pop();
  //0, 0, 26
}