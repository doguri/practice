// config.js

let topHeight = 80;

let headingOffset = 2;

let bkgrColor = 220;

let gridSize = 4;

let cellWidth = 100;

let tileAttrib = {
  "0": {
    textSize: 64,
    textColor: "#776e65", // "119,110,101"
    color: "#faf6f3",     // "250,246,243"
  },
  "2": {
    textSize: 64,
    textColor: "#776e65", // "119,110,101"
    color: "#eee4da",     // "238,228,218"
  },
  "4": {
    textSize: 64,
    textColor: "#776e65", // "119,110,101"
    color: "#ede0c8",     // "237,224,200"
  },
  "8": {
    textSize: 64,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#f2b179",     // "242,177,121"
  },
  "16": {
    textSize: 64,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#f59563",     // "245,149,99"
  },
  "32": {
    textSize: 64,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#f67c5f",     // "246,124,95"
  },
  "64": {
    textSize: 64,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#f65e3b",     // "246,94,59"
  },
  "128": {
    textSize: 48,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edcf72",     // "237,207,114"
  },
  "256": {
    textSize: 48,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edcc61",     // "237,204,97"
  },
  "512": {
    textSize: 48,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc850",     // "237,200,80"
  },
  "1024": {
    textSize: 36,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc53f",     // "237,197,63"
  },
  "2048": {
    textSize: 36,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc204",     // "237,194,4"
  },
  "4096": {
    textSize: 36,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc204",     // "237,194,4"
  },
  "8192": {
    textSize: 36,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc204",     // "237,194,4"
  },
  "16384": {
    textSize: 28,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc204",     // "237,194,4"
  },
  "32768": {
    textSize: 28,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc204",     // "237,194,4"
  },
  "65536": {
    textSize: 28,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc204",     // "237,194,4"
  },
  "131072": {
    textSize: 24,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc204",     // "237,194,4"
  },
  "262144": {
    textSize: 24,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc204",     // "237,194,4"
  },
  "524288": {
    textSize: 24,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc204",     // "237,194,4"
  },
  "1048576": {
    textSize: 20,
    textColor: "#f9f6f2", // "249,246,242"
    color: "#edc204",     // "237,194,4"
  },
}

function titleSize() {
  let tmpWidth = 0;
  if (cellWidth < 4) {
    tmpWidth = cellWidth;
  } else {
    tmpWidth = cellWidth * (gridSize - 2);
  }
  if (tmpWidth < 61) {
    return 22;
  } else if (tmpWidth < 81) {
    return 30;
  } else if (tmpWidth < 101) {
    return 32;
  } else {
    return 42;
  }
}