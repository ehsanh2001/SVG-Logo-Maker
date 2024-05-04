const Square = require("../lib/square");
const SVG = require("../lib/svg");

describe("Square", () => {
  test("should create a square with the given side", () => {
    const square = new Square("red", 100);
    expect(square.side).toBe(100);
  });

  test("should throw an error when rendering without a parent", () => {
    const square = new Square("red", 100);
    expect(() => square.render()).toThrow(Error);
    //   "A square must be added to an SVG object before it can be rendered."
    // );
  });

  test("should have the parent set after being added to an SVG object", () => {
    const square = new Square("red", 100);
    const svg = new SVG();
    svg.add(square);
    expect(square.svgParent).toBe(svg);
  });

  test("should render a square in the middle of the parent", () => {
    const square = new Square("red", 100);
    const svg = new SVG(500, 500);
    svg.add(square);
    const renderedSquare = square.render();
    expect(renderedSquare).toBe(
      '<rect x="200" y="200" width="100" height="100" fill="red" />'
    );
  });
});
