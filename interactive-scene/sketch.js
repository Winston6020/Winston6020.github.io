// Interactive Scene
// Winston George
// September 25, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Defining the Varibles
let x = 0;
let y = 0;
let speed = 5;
let squareSize = 50;
let direction = 0;

//Creating the Canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//Drawing the Square
function draw() {
  background(220);
  square(x, y, squareSize);
  moveSquare();
}

//Funtion that allows us to move the square with the mouse 
//and arrow keys
function moveSquare() {
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      square (mouseX, mouseY, squareSize);
    }
  }
  if(keyIsDown(UP_ARROW)) {
    square (x, y, squareSize);
    y -= speed;
  }
  if(keyIsDown(DOWN_ARROW)) {
    square (x, y, squareSize);
    y += speed;
  }
  if(keyIsDown(LEFT_ARROW)) {
    square (x, y, squareSize);
    x -= speed;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    square (x, y, squareSize);
    x += speed;
  }
}

//Allows us to adjust the size of the square by scrolling
function mouseWheel(event) {
  if (event.delta > 0) {
    direction = "▲";
    squareSize += 10;
  } 
  else {
    direction = "▼";
    squareSize -= 10;
  }
}