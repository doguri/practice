// cubewave

let angleoffset = 0.045;
let side = 40;
let win = 400;
let bkgrColor = 230;

let angle = 0;
let horizoffset = side / 4;
let maxdist = 0;

function setup() {
  createCanvas(win + 100, win + 100, WEBGL);
  maxdist = dist(0, 0, win, win);
  colorMaterial = color(224, 224, 182);
  colorPoint = color(255, 221, 170);
  colorAmbient = color(42, 84, 162);
}

function draw() {
  background(bkgrColor);

  //...adjust view...
  ortho(-width, width, -width, width, -width * 2, width * 2);
  rotateX(-QUARTER_PI + 0.25);
  rotateY(QUARTER_PI);

  //...material and lights...
  noStroke();
  ambientMaterial(colorMaterial);
  for (n = 0; n < 3; n += 1) {
    pointLight(colorPoint, 800, -100, 800);
  }
  ambientLight(colorAmbient);

  //...cube wave...
  for (let x = 0; x < width; x += side) {
    for (let y = 0; y < height; y += side) {
      push();

      //...calculate offset...
      let d = dist(x, y, width / 2 - side / 2, height / 2 - side / 2);
      let offset = map(2.2 * sq(d), 0, sq(maxdist), -PI, PI);
      let a = angle + offset;

      //...display box...
      translate(x - width / 2 + horizoffset, 0, y - height / 2 + horizoffset)
      let h = map(sin(a), -1, 1, width * 0.3, width);
      box(side, h, side);

      pop();
    }
  }

  angle -= angleoffset;
}
