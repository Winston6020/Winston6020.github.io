// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//if hardcoding the grid, use this
// let grid = [[1, 0, 0, 1],
//             [0, 1, 1, 0],
//             [0, 0, 1, 1],
//             [1, 1, 1, 0]];

     
let grid;
let cellSize;
const GRID_SIZE = 10;
let shouldToggleNeighbors = false;

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowHeight);
  }

  cellSize = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
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
    if(grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else {
      grid[y][x] = 0;
    }
  }
  
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 1) {
        fill ("black");
      }
      else if (grid [y][x] === 0){
        fill("white");
      }
      square (x * cellSize, y * cellSize, cellSize);
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
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
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
      newGrid[y].push(0);
    }
  }
  return newGrid;
}