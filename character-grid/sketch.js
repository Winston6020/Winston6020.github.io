// character in grid demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



     
let grid;
let cellSize;
const GRID_SIZE = 10;
const OPEN_TILE = 0;
const IMPASSABLE = 1;
const PLAYER = 9;
let thePlayer = {
  x: 0,
  y: 0,
};
let grassImg;
let pathImg;



function preload() {
  grassImg = loadImage("grass.jpg");
  pathImg = loadImage("path.jpg");
}

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowHeight);
  }

  cellSize = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);

  //add player to the grid
  grid[thePlayer.y][thePlayer.x] = PLAYER;
}

function windowResized() {
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowHeight);
  }
  else {
    resizeCanvas(windowWidth, windowHeight);
  }

  cellSize = height/GRID_SIZE;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
  if(key === "n") {
    shouldToggleNeighbors = !shouldToggleNeighbors;
  }
  if (key === " ") {
    updateGrid();
  }
  if (key === "s") {
    //move down
    movePlayer(thePlayer.x, thePlayer.y + 1);
  }
  if (key === "w") {
    //move up
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }
  if (key === "d") {
    //move right
    movePlayer(thePlayer.x + 1, thePlayer.y);
  }
  if (key === "a") {
    //move left
    movePlayer(thePlayer.x - 1, thePlayer.y);
  }
}

function movePlayer(x, y){
  //don't move off grid, and only move in open tile
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && grid[y][x] === OPEN_TILE) {
    //previous player location
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;

    //keeping track of where the player is
    thePlayer.x = x;
    thePlayer.y = y;

    //reset the old location to be an empty tile
    grid[oldY][oldX] = OPEN_TILE;

    //put the player in the grid
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  }
  
}

function updateGrid() {
  //make another array to hold the next term
  let nextTurn = generateEmptyGrid(GRID_SIZE, GRID_SIZE);

  //look at every cell
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x ++) {
      let neighbors = 0;

      //look at every neighbor
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <=1; j++){
          //don't fall off the edge
          if (x+j <= 0 && x + j < GRID_SIZE && y+i >= 0 && y+i < GRID_SIZE) {
            neighbors += grid[y+i][x+j];
          }
        }
      }
      //don't count yourself as neighbor
      neighbors -= grid [y][x];

      //apply the rules
      if (grid[y][x] === 1) {
        if (neighbors === 2 || neighbors === 3) {//alive
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
      if (grid[y][x] === 0) {
        if (neighbors=== 3){
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x];
        }
      }
    }
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  //toggle self
  toggleCell(x, y);

  if(shouldToggleNeighbors) {
    //toggle neighbors
    toggleCell(x-1, y);
    toggleCell(x+1, y);
    toggleCell(x, y-1);
    toggleCell(x, y+1);
  }
  
}

function toggleCell(x, y) {
  //make sure the cell youre toggling is in the grid
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE){
    if(grid[y][x] === OPEN_TILE) {
      grid[y][x] = IMPASSABLE;
    }
    else if (grid[y][x] === IMPASSABLE) {
      grid[y][x] = OPEN_TILE;
    }
  }
  
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === IMPASSABLE) {
        //fill ("black");
        image(grassImg, x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid [y][x] === OPEN_TILE){
        // fill("white");
        image(pathImg, x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === PLAYER) {
        fill("red");
        square (x * cellSize, y * cellSize, cellSize);
      }
      
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //make it a one half the time a zero half the time
      if (random(100) < 50) {
        newGrid[y].push(IMPASSABLE);
      }
      else {
        newGrid[y].push(OPEN_TILE);
      }
    }
  }
  return newGrid;
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(OPEN_TILE);
    }
  }
  return newGrid;
}