// face.js

function drawTicks() {
  for (n = 0; n < 60; n++) {
    push();
    rotate(map(n, 0, 60, 0, 360));
    strokeWeight(2);
    stroke(180);
    line(135, 0, 140, 0);
    pop();
  }
  for (n = 0; n < 60; n += 5) {
    push();
    rotate(map(n, 0, 60, 0, 360));
    strokeWeight(4);
    stroke(180);
    line(130, 0, 140, 0);
    pop();
  }
}

function drawNumbers() {
  push();
  rotate(90);
  textAlign(CENTER, CENTER);
  textSize(32);
  textStyle(BOLD);
  noStroke();
  fill(120);
  let numRadius = 113;
  text('1', numRadius * 0.5, -numRadius * 0.85);
  text('2', numRadius * 0.85, -numRadius * 0.5);
  text('3', numRadius*1.02, 0);
  text('4', numRadius * 0.85, +numRadius * 0.5);
  text('5', numRadius * 0.5, +numRadius * 0.85);
  text('6', 0, numRadius);
  text('7', -numRadius * 0.5, +numRadius * 0.85);
  text('8', -numRadius * 0.85, +numRadius * 0.5);
  text('9', -numRadius* 1.02, 0);
  text('10', -numRadius * 0.80, -numRadius * 0.5);
  text('11', -numRadius * 0.45, -numRadius * 0.85);
  text('12', 0, -numRadius);
  pop();
}

function drawFace() {
  push();
  fill(120);
  noStroke();
  circle(0, 0, 155, 155);
  fill(0);
  noStroke();
  circle(0, 0, 150, 150);
  pop();
  drawTicks();
  drawNumbers();
}