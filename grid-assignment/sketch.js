// Grid Based Assignment 
// Winston George
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 80;
let grid =[[1, 0, 1, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],[1, 0, 1, 0, 1, 0, 1, 0, 1, 0],[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],[1, 0, 1, 0, 1, 0, 1, 0, 1, 0],[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],[1, 0, 1, 0, 1, 0, 1, 0, 1, 0],[0, 1, 0, 1, 0, 1, 0, 1, 0, 1],[1, 0, 1, 0, 1, 0, 1, 0, 1, 0],[0, 1, 0, 1, 0, 1, 0, 1, 0, 1]];
let cols;
let rows;



function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid(x, y) {
  let newGrid = [];
  for(let y = 0; y < cols; y ++) {
    for(let x = 0; x < rows; x ++) {
      if (grid[x][y] === 1) {
        newGrid[y].push(0);
        fill ("black");
      }
      else if (grid[x][y] === 0) {
        newGrid[y].push(1);
        fill("white");
        
      }
      return newGrid;
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

// function generateRandomGrid() {
//   newGrid = [];
//   for(let y = 0; y < rows; y++) {
//     newGrid.push([]);
//     for (let x = 0; x < cols; x ++) {
//       if (random(1) < 1) {
//         newGrid[y].push(0);
//       }
//       else {
//         newGrid[y].push(1);
//       }
//     }
//   }
//   return newGrid;
// }