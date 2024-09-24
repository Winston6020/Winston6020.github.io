// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let waitTimeGreen = 10000;
let waitTimeYellow = 2000;
let waitTImeRed = 10000;
let lastTimeSwitched = 0;
let isGreen = true;
let isYellow = true;
let isRed = true;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill("red");
  if(millis() > lastTimeSwitched + waitTImeRed) {
    isRed = !isRed;
    fill("green");
    lastTimeSwitched = millis();
  }
  ellipse(width/2, height/2 - 65, 50, 50); //top
  
  fill("yellow")
  if(millis() > lastTimeSwitched + waitTimeYellow) {
    isYellow = !isYellow;
    fill("red");
    lastTimeSwitched = millis();
  }
  ellipse(width/2, height/2, 50, 50); //middle
  
  fill("green")
  if (millis () > lastTimeSwitched + waitTimeGreen) {
    isGreen = !isGreen;
    fill("yellow");
    lastTimeSwitched = millis();
  }
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}