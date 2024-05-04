const Shape = require("./shape");

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  render() {
    super.render();

    const parentWidth = this.svgParent.width;
    const parentHeight = this.svgParent.height;
    const cx = (parentWidth - this.radius * 2) / 2 + this.radius;
    const cy = (parentHeight - this.radius * 2) / 2 + this.radius;

    return `<circle cx="${cx}" cy="${cy}" r="${this.radius}" fill="${this.color}" />`;
  }
}

module.exports = Circle;
