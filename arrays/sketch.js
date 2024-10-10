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
  displayAstroids();
  // for (let theCircle of circleArray) {
  //   // theCircle.y += theCircle.dy;

  //   fill("orange");
  //   circle (theCircle.x, theCircle.y, theCircle.radius);
  //   theCircle.y += dy;
  // }
}

// function mousePressed() {
//   shoot(mouseX, mouseY);
// }

function displayAstroids() {

}

function shoot() {
  let theCircle = {
    x: random(width),
    y: height - random(0, 50),
    radius: 25,
    dx: -5,
    dy: -5,
  };
  circleArray.push(theCircle);
}