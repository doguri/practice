// game.js

function slideUp(grid) {
  for (let n = 1; n < gridSize; n++) {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize - 1; j++) {
        if (grid[i][j] == 0) {
          grid[i][j] = grid[i][j + 1];
          grid[i][j + 1] = 0;
        }
      }
    }
  }
  return grid;
}

function slideDown(grid) {
  for (let n = 1; n < gridSize; n++) {
    for (let i = gridSize - 1; i >= 0; i--) {
      for (let j = gridSize - 1; j > 0; j--) {
        if (grid[i][j] == 0) {
          grid[i][j] = grid[i][j - 1];
          grid[i][j - 1] = 0;
        }
      }
    }
  }
  return grid;
}

function slideLeft(grid) {
  for (let n = 1; n < gridSize; n++) {
    for (let i = 0; i < gridSize - 1; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (grid[i][j] == 0) {
          grid[i][j] = grid[i + 1][j];
          grid[i + 1][j] = 0;
        }
      }
    }
  }
  return grid;
}

function slideRight(grid) {
  for (let n = 1; n < gridSize; n++) {
    for (let i = gridSize - 1; i > 0; i--) {
      for (let j = gridSize - 1; j >= 0; j--) {
        if (grid[i][j] == 0) {
          grid[i][j] = grid[i - 1][j];
          grid[i - 1][j] = 0;
        }
      }
    }
  }
  return grid;
}

function combineUp(grid) {
  let changed = false;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize - 1; j++) {
      if (grid[i][j] == grid[i][j + 1]) {
        grid[i][j] += grid[i][j + 1];
        grid[i][j + 1] = 0;
        score += grid[i][j];
        changed = true;
      }
    }
  }
  if (changed) {
    grid = slideUp(grid)
  }
  return grid;
}

function combineDown(grid) {
  let changed = false;
  for (let i = gridSize - 1; i >= 0; i--) {
    for (let j = gridSize - 1; j > 0; j--) {
      if (grid[i][j] == grid[i][j - 1]) {
        grid[i][j] += +grid[i][j - 1];
        grid[i][j - 1] = 0;
        score += grid[i][j];
        changed = true;
      }
    }
  }
  if (changed) {
    grid = slideDown(grid)
  }
  return grid;
}

function combineLeft(grid) {
  let changed = false;
  for (let i = 0; i < gridSize - 1; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] == grid[i + 1][j]) {
        grid[i][j] += grid[i + 1][j];
        grid[i + 1][j] = 0;
        score += grid[i][j];
        changed = true;
      }
    }
  }
  if (changed) {
    grid = slideLeft(grid)
  }
  return grid;
}

function combineRight(grid) {
  let changed = false;
  for (let i = gridSize - 1; i > 0; i--) {
    for (let j = gridSize - 1; j >= 0; j--) {
      if (grid[i][j] == grid[i - 1][j]) {
        grid[i][j] += grid[i - 1][j];
        grid[i - 1][j] = 0;
        score += grid[i][j];
        changed = true;
      }
    }
  }
  if (changed) {
    grid = slideRight(grid)
  }
  return grid;
}

function noMoves() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] == 0) {
        return false;
      }
      if (j !== gridSize - 1 && grid[i][j] == grid[i][j + 1]) {
        return false;
      }
      if (i !== gridSize - 1 && grid[i][j] == grid[i + 1][j]) {
        return false;
      }
    }
  }
  return true;
}

function addNumber() {
  let options = [];
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] === 0) {
        options.push({
          x: i,
          y: j
        });
      }
    }
  }
  if (options.length > 0) {
    let spot = random(options);
    let r = random(1);
    grid[spot.x][spot.y] = r > 0.5 ? 2 : 4;
  }
}

function restartGame() {
  grid = blankGrid();
  gridLast = blankGrid();
  score = 0;
}