// hands.js

function drawHourHand(val) {
  push()
  rotate(val);
  //...hour hand edge...
  stroke(80);
  strokeWeight(9.3);
  line(-20, 0, 85, 0);
  //..hour hand...
  stroke(200);
  strokeWeight(8);
  line(-20, 0, 85, 0);
  pop();
}

function drawMinuteHand(val) {
  push()
  rotate(val);
  //...minute hand edge...
  stroke(80);
  strokeWeight(7.3);
  line(-25, 0, 115, 0);
  //...minute hand...
  stroke(200);
  strokeWeight(6);
  line(-25, 0, 115, 0);
  pop();
}

function drawSecondHand(val) {
  push();
  rotate(val);
  //...second hand edge..
  stroke(80);
  strokeWeight(3.3);
  line(-30, 0, 120, 0);
  //...second hand...
  stroke(180, 0, 0);
  strokeWeight(2);
  line(-30, 0, 120, 0);
  //...second hand end edge...
  stroke(80);
  strokeWeight(5.3);
  line(-30, 0, 0, 0);
  //...second hand end...
  stroke(180, 0, 0);
  strokeWeight(4);
  line(-30, 0, 0, 0);
  //...center edge...
  strokeWeight(1);
  fill(80);
  stroke(80);
  circle(0, 0, 4);
  //...center...
  fill(180, 0, 0);
  stroke(180, 0, 0);
  circle(0, 0, 3.5);
  pop();
}