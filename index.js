const SVG = require("./lib/svg");
const Square = require("./lib/square");

const svg = new SVG(50, 500);
const square = new Square("red", 100, svg);
square.render();
// console.log(svg.ender());
