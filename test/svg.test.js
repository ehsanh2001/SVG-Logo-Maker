const SVG = require("../lib/svg");

describe("SVG", () => {
  test("should render an SVG element with no children and default width and height", () => {
    const svg = new SVG();
    expect(svg.render()).toBe(
      `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    );
  });

  test("should render an SVG with width and height", () => {
    const svg = new SVG(500, 400);
    expect(svg.render()).toBe(
      `<svg width="500" height="400" xmlns="http://www.w3.org/2000/svg"></svg>`
    );
  });
});
