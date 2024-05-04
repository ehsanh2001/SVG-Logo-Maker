const Shape = require("../lib/shape");

describe("Shape", () => {
  test("should have a color property", () => {
    const shape = new Shape("red");
    expect(shape.color).toBe("red");
  });

  test("should have a svgParent property of null", () => {
    const shape = new Shape("red");
    expect(shape.svgParent).toBe(null);
  });

  test("should throw an error when calling render", () => {
    const shape = new Shape();
    expect(() => shape.render()).toThrow();
  });
});
