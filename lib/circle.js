const Shape = require("./shape");

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  render() {
    if (!this.svgParent) {
      throw new Error(
        "A circle must be added to an SVG object before it can be rendered."
      );
    }
    const parentWidth = this.svgParent.width;
    const parentHeight = this.svgParent.height;
    const x = (parentWidth - this.radius * 2) / 2 + this.radius;
    const y = (parentHeight - this.radius * 2) / 2 + this.radius;

    return `<circle cx="${x}" cy="${y}" r="${this.radius}" fill="${this.color}" />`;
  }
}

module.exports = Circle;
