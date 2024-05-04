const SVG = require("../lib/svg");
const Triangle = require("../lib/triangle");

describe("Triangle", () => {
  test("render", () => {
    const svg = new SVG(300, 200);
    const triangle = new Triangle("red");
    svg.add(triangle);

    const actual = triangle.render(svg);
    const expected = `<polygon points="150,0 300,200 0,200" fill="red" />`;

    expect(actual).toBe(expected);
  });
});
