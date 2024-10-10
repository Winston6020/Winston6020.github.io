// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theBubbles = [];
let deathLocation = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noStroke();

  for (let i = 0; i < 5; i++) {
    spawnBubble();
  }

  //create new bubble every half second
  window.setInterval(spawnBubble, 500);
}

function draw() {
  background(220);
  //moveBubblesRandomly();
  moveBubblesWithNoise();
  displayBubble();
  displayDeathSpot();
}

function mousePressed() {
  for(let bubble of theBubbles) {
    if (clickedInBubble(mouseX, mouseY, bubble)) {
      let theIndex = theBubbles.indexOf(bubble);
      theBubbles.splice(theIndex, 1);
      addDeath(mouseX, mouseY);
    }
  }
}

function displayDeathSpot() {
  for (let spot of deathLocation) {
    textAlign(CENTER, CENTER);
    fill("black");
    text("X", spot.x, spot.y);
  }
}

function addDeath(_x, _y) {
  let deathSpot = {
    x: _x,
    y: _y,
  };
  deathLocation.push(deathSpot);
}

function clickedInBubble(x, y, theBubbles) {
  let distanceAway = dist(x, y, theBubbles.x, theBubbles.y);
  if (distanceAway < theBubbles.radius) {
    return true;
  }
  else {
    return false;
  }
}

function displayBubble() {
  for (let bubble of theBubbles) {
    fill(bubble.r, bubble.g, bubble.b, bubble.alpha);
    circle(bubble.x, bubble.y, bubble.radius*2);
  }
}
function moveBubblesWithNoise() {
  for (let bubble of theBubbles) {
    let x = noise(bubble.timeX) * width;
    let y = noise(bubble.timeY) * height;

    bubble.x = x;
    bubble.y = y;

    bubble.timeX += bubble.deltaTime;
    bubble.timeY += bubble.deltaTime;
  }
}

function moveBubblesRandomly() {
  for (let bubble of theBubbles) {
    let choice = random(100);
    if (choice < 50) {
      //move up
      bubble.y -= bubble.speed;
    }
    else if (choice < 65) {
      //move down
      bubble.y += bubble.speed;
    }
    else if (choice < 80) {
      //move right
      bubble.x += bubble.speed;
    }
    else {
      //move left
      bubble.x -= bubble.speed;
    }
  }
}

function spawnBubble() {
  let someBubble = {
    x: random(width),
    y: height + random(0, 50),
    speed: random(2, 5),
    radius: random(20, 40),
    r: random(255),
    g: random(255),
    b: random(255),
    alpha: random(255),
    timeX: random(100000000),
    timeY: random(100000000),
    deltaTime: 0.002,
  };
  theBubbles.push(someBubble);
}
