const Shape = require("./shape");

class Square extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }

  render() {
    if (!this.svgParent) {
      throw new Error(
        "A square must be added to an SVG object before it can be rendered."
      );
    }
    const parentWidth = this.svgParent.width;
    const parentHeight = this.svgParent.height;
    console.log(parentWidth, parentHeight);
    const x = (parentWidth - this.side) / 2;
    const y = (parentHeight - this.side) / 2;

    return `<rect x="${x}" y="${y}" width="${this.side}" height="${this.side}" fill="${this.color}" />`;
  }
}

module.exports = Square;
