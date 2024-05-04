class Shape {
  constructor(color) {
    this.color = color;
    // this is a reference to the parent SVG object
    // and will be set when the shape is added to the SVG object
    this.svgParent = null;
  }
  render() {
    if (!this.svgParent) {
      throw new Error(
        "A shape must be added to an SVG object before it can be rendered."
      );
    }
  }
}

module.exports = Shape;
