// grid.js

function blankGrid() {
  let arrBlank = new Array(gridSize);
  for (let i = 0; i < gridSize; i++) {
    arrBlank[i] = new Array(gridSize);
  }
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      arrBlank[i][j] = 0;
    }
  }
  return arrBlank;
}

function copyGrid(grid) {
  arr = blankGrid();
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      arr[i][j] = grid[i][j];
    }
  }
  return arr;
}

function compareGrid(a, b) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }
  return false;
}