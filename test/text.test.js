const SVG = require("../lib/svg");
const Text = require("../lib/text");

describe("Text", () => {
  test("constructor", () => {
    const text = new Text("red", "ABC", 50);
    expect(text.color).toBe("red");
    expect(text.text).toBe("ABC");
    expect(text.fontSize).toBe(50);
    expect(text.svgParent).toBe(null);
  });

  test("should render the text in the middle of the parent", () => {
    const svg = new SVG(300, 200);
    const text = new Text("blue", "ABC");
    svg.add(text);

    const result = text.render();

    expect(result).toBe(
      '<text text-anchor="middle" x="150" y="120" font-size="60" fill="blue">ABC</text>'
    );
  });

  test("should render the text in the middle of the parent with shiftX and shiftY", () => {
    const svg = new SVG(300, 200);
    const text = new Text("blue", "ABC");
    text.shiftX = 10;
    text.shiftY = 20;
    svg.add(text);

    const result = text.render();

    expect(result).toBe(
      '<text text-anchor="middle" x="160" y="140" font-size="60" fill="blue">ABC</text>'
    );
  });
});
