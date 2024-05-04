class Shape {
  constructor(color,svgParent) {
    this.color = color;
    this.svgParent = svgParent;
  }
  reder() {
    throw new Error("render method should be implemented");
  }
}

module.exports = Shape;
