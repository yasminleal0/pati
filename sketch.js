function setup() {
  createCanvas(600, 600);
background ("#8BC34A");
}
function draw() {
  fill("black");
  stroke("pinck");
  strokeWeight(1);
  
  if (mouseIsPressed){
  rect(mouseX,mouseY,20,30);
  }
}
