// clock

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function padNum(val) {
  if (val < 10) {
    return '0' + val;
  } else {
    return val;
  }
}

function draw() {
  background(255);
  translate(200, 200);
  rotate(270);
  let hr = hour();
  let min = minute();
  let sec = second();
  let arcSec = map(sec, 0, 60, 0, 360);
  let arcMin = map(min, 0, 60, 0, 360) + map(arcSec, 0, 60, 0, 1);
  let arcHr = map(hr % 12, 0, 12, 0, 360) + map(arcMin, 0, 60, 0, 5);
  drawFace();
  drawHourHand(arcHr);
  drawMinuteHand(arcMin);
  drawSecondHand(arcSec);
}