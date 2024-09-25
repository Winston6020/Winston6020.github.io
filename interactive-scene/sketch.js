// Interactive Scene
// Winston George
// September 25, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let x = 0;
let y = 0;
let speed = 5;
let squareSize = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  square(x, y, squareSize);
  moveSquare();
}

function moveSquare() {
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      fill ("black");
      square (mouseX, mouseY, squareSize);
    }
  }
  if(keyIsDown(UP_ARROW)) {
    y -= speed;
  }
  if(keyIsDown(DOWN_ARROW)) {
    y += speed;
  }
  if(keyIsDown(LEFT_ARROW)) {
    x -= speed;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    x += speed;
  }
}