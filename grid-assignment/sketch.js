// Grid Based Assignment 
// Winston George
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 90;
let grid;
let cols;
let rows;



function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = 8;
  rows = 8;
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(220);
  displayGrid();
  spawnCheckers();
  // generateCheckers();
  // displayCheckers();
}

function displayGrid() {
  for(let y = 0; y < rows; y ++) {
    for(let x = 0; x < cols; x ++) {
      if (grid[y][x] === 1) {
        fill ("black");
      }
      else if (grid[y][x] === 0) {
        fill("white");
      }
      square (x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let shouldPushOne = true;
  newGrid = [];
  for(let y = 0; y < rows; y++) {
    newGrid.push([]);
    for(let x = 0; x < cols; x ++) {
      if (shouldPushOne) {
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
      }
      shouldPushOne = !shouldPushOne;      
    }
    shouldPushOne = !shouldPushOne; 
  }
  return newGrid;
}

function spawnCheckers () {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (y < 3 && grid[y][x] === 1) {
        fill ("red");
        circle(x * CELL_SIZE + 45, y * CELL_SIZE + 45, CELL_SIZE);
      }
      else if (y > 4 && grid [y][x] === 1) {
        fill ("white");
        circle(x * CELL_SIZE + 45, y * CELL_SIZE + 45, CELL_SIZE);
      }
    }
  }
}

function moveCheckers() {
  
}

// function generateCheckers(cols, rows) {
//   let shouldPushOne = true;
//   newCheckers = [];
//   for(let y = 0; y < rows; y++) {
//     newGrid.push([]);
//     for(let x = 0; x < cols; x ++) {
//       if (shouldPushOne) {
//         newGrid[y].push(1);
//       }
//       else {
//         newGrid[y].push(0);
//       }
//       shouldPushOne = !shouldPushOne;      
//     }
//     shouldPushOne = !shouldPushOne; 
//   }
//   return newCheckers;
// }

// function displayCheckers() {
//   for(let y = 0; y < 3; y ++) {
//     for(let x = 0; x > 4; x ++) {
//       if (grid[y][x] === 1) {
//         fill ("red");
//         circle (x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
//       }
//     }
//   }
// }