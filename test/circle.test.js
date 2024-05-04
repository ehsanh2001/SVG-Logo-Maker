const Circle = require("../lib/circle");
const SVG = require("../lib/svg");

describe("Circle", () => {
  test("should create a circle with the given radius", () => {
    const circle = new Circle("red", 100);
    expect(circle.radius).toBe(100);
  });

  test("should throw an error when rendering without a parent", () => {
    const circle = new Circle("red", 100);
    expect(() => circle.render()).toThrow(Error);
  });

  test("should have the parent set after being added to an SVG object", () => {
    const circle = new Circle("red", 100);
    const svg = new SVG();
    svg.add(circle);
    expect(circle.svgParent).toBe(svg);
  });

  test("should render a circle in the middle of the parent", () => {
    const circle = new Circle("red", 100);
    const svg = new SVG(500, 500);
    svg.add(circle);
    const renderedCircle = circle.render();
    expect(renderedCircle).toBe(
      '<circle cx="200" cy="200" r="100" fill="red" />'
    );
  });
});
