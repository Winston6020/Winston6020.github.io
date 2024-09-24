// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



x = 0
y = 0
let speed = 5
let squareSize = 50
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  square(x, y, squareSize)
  moveSquare()
}

function moveSquare(){
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      fill ("black")
      square (mouseX, mouseY, squareSize)
    }
    if(mouseButton === RIGHT) {
      x += speed;
      y += speed;
    }
  }
}