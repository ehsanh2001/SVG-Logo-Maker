const SVG = require("./lib/svg");
const Square = require("./lib/square");
const Circle = require("./lib/circle");
const Text = require("./lib/text");
const Triangle = require("./lib/triangle");
const inquirer = require("inquirer");
const fs = require("fs/promises");

const SVG_WIDTH = 300;
const SVG_HEIGHT = 200;
const SQUARE_SIDE = 200;
const CIRCLE_RADIUS = 100;
const TRIANGLE_TEXT_Y_SHIFT = 30;

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter the text to display(max 3 characters):",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color:(color name or hex code[eg: #rrggbb])",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose the shape to display the text:",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color:(color name or hex code[eg: #rrggbb])",
  },
];

async function getUserInput() {
  const answers = await inquirer.prompt(questions);
  answers.text = answers.text.slice(0, 3);
  return answers;
}

function createSVG(answers) {
  const svg = new SVG(SVG_WIDTH, SVG_HEIGHT);
  let shape;
  let text = new Text(answers.textColor, answers.text);
  switch (answers.shape) {
    case "Square":
      shape = new Square(answers.shapeColor, SQUARE_SIDE);
      break;
    case "Circle":
      shape = new Circle(answers.shapeColor, CIRCLE_RADIUS);
      break;
    case "Triangle":
      shape = new Triangle(answers.shapeColor);
      // Adjust the text position for the triangle
      text.shiftY = TRIANGLE_TEXT_Y_SHIFT;
      break;
  }
  svg.add(shape);
  svg.add(text);

  return svg.render();
}

async function main() {
  const answers = await getUserInput();
  const svg = createSVG(answers);
  try {
    await fs.writeFile("./output/logo.svg", svg);
    console.log("SVG file created successfully!");
  } catch (err) {
    console.error(`Error creating SVG file: ${err}`);
  }
}

main();
