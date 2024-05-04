const Square = require("../lib/square");
const SVG = require("../lib/svg");

describe("Square", () => {
  test("should create a square with the given side", () => {
    const svg = new SVG(500, 500);
    const square = new Square("red", 100, svg);
    expect(square.side).toBe(100);
  });

  test("should create a square with the side which fits in the parent", () => {
    const svg = new SVG(200, 500);
    const square = new Square("red", 300, svg);
    expect(square.side).toBe(200);
  });

  test("should render a square in the middle of the parent", () => {
    const svg = new SVG(500, 500);
    const square = new Square("red", 100, svg);
    const renderedSquare = square.render();
    expect(renderedSquare).toBe(
      '<rect x="200" y="200" width="100" height="100" fill="red" />'
    );
  });
});
