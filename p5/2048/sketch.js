// 2048

let score = 0;
let best = 0;

function setup() {
  createCanvas(cellWidth * gridSize, cellWidth * gridSize + topHeight);
  noLoop();
  grid = blankGrid();
  gridLast = blankGrid();
  addNumber();
  updateCanvas();
}

function updateCanvas() {
  background(bkgrColor);
  drawGrid();
}

function drawGrid() {
  textAlign(LEFT, TOP);
  titleSize();
  fill(100);
  textSize(titleSize());
  textStyle("bold");
  text("2048", 5, 5);

  noFill();
  noStroke();
  strokeWeight(2);
  fill("#baac9f");
  rect((gridSize - headingOffset) * cellWidth + 1, 0, cellWidth - 2, 53, 2);
  rect((gridSize - headingOffset + 1) * cellWidth + 1, 0, cellWidth - 2, 53, 2);

  textAlign(CENTER, CENTER);

  fill(0);
  textSize(14);
  textStyle("normal");
  text("SCORE", ((gridSize - headingOffset) * cellWidth) + cellWidth / 2, 15);
  text("HI SCORE", ((gridSize - headingOffset + 1) * cellWidth) + cellWidth / 2, 15);

  fill(bkgrColor);
  textSize(24);
  text(score, ((gridSize - headingOffset) * cellWidth) + cellWidth / 2, 34);
  if (score > best) {
    best = score;
  }
  text(best, ((gridSize - headingOffset + 1) * cellWidth) + cellWidth / 2, 34);

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let val = grid[i][j];
      strokeWeight(2);
      stroke(bkgrColor);
      fill(tileAttrib[val].color);
      rect(
        i * cellWidth,
        j * cellWidth + topHeight,
        cellWidth, cellWidth, 10
      );
      if (grid[i][j] !== 0) {
        let s = "" + val;
        let len = s.length - 1;
        textSize(tileAttrib[val].textSize);
        fill(tileAttrib[val].textColor);
        noStroke();
        text(
          val,
          i * cellWidth + cellWidth / 2,
          j * cellWidth + cellWidth / 2 + topHeight
        )
      }
    }
  }
}

function keyPressed() {
  if ((keyCode == DOWN_ARROW) ||
    (keyCode == UP_ARROW) ||
    (keyCode == RIGHT_ARROW) ||
    (keyCode == LEFT_ARROW) ||
    (keyCode == ENTER)) {

    let gridLast = copyGrid(grid);

    switch (keyCode) {
      case DOWN_ARROW:
        grid = slideDown(grid);
        grid = combineDown(grid);
        break;
      case UP_ARROW:
        grid = slideUp(grid);
        grid = combineUp(grid);
        break;
      case LEFT_ARROW:
        grid = slideLeft(grid);
        grid = combineLeft(grid);
        break;
      case RIGHT_ARROW:
        grid = slideRight(grid);
        grid = combineRight(grid);
        break;
      case ENTER:
        if (noMoves()) {
          restartGame();
        }
        break;
    }

    if (compareGrid(gridLast, grid)) {
      addNumber();
    }

    updateCanvas();

    if (noMoves()) {
      fill(100);
      textAlign(LEFT, BOTTOM);
      textSize(20);
      text("Game Over", 5, 78);
      textAlign(RIGHT, BOTTOM);
      textSize(10);
      text("Press ENTER to Restart", gridSize * cellWidth - 5, 75);
    }
  }
}