// Arrays and Object Notation
// Winston George
// October 7th, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let circleArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let theCircle of circleArray) {
    theCircle.y += theCircle.dy;

    fill("orange");
    circle (theCircle.x, theCircle.y, theCircle.radius);
  }
}

function mousePressed() {
  shoot(mouseX, mouseY);
}

function shoot(theX, theY) {
  let theCircle = {
    x: theX,
    y: theY,
    radius: 25,
    dx: 5,
    dy: 5,
  };
  circleArray.push(theCircle);
}