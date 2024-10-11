// Arrays and Object Notation
// Winston George
// October 7th, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let circleArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; i++) {
    shoot();
  }
  window.setInterval(shoot, 500);
}

function draw() {
  background(220);
  displayAstroids();
  dropAstroids();
}


function displayAstroids() {
  for (let theCircle of circleArray) {
    fill("orange");
    circle(theCircle.x, theCircle.y, theCircle.radius);
  }
}

function dropAstroids() {
  for(let theCircle of circleArray) {
    theCircle.y += theCircle.speed;
  }
}

function shoot() {
  let theCircle = {
    x: random(width),
    y: random(0, 50),
    speed: random(5, 10),
    radius: 25,
  };
  circleArray.push(theCircle);
}