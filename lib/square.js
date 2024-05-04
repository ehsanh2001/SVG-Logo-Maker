const Shape = require("./shape");

class Square extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }

  render() {
    super.render();

    const parentWidth = this.svgParent.width;
    const parentHeight = this.svgParent.height;

    const x = (parentWidth - this.side) / 2;
    const y = (parentHeight - this.side) / 2;

    return `<rect x="${x}" y="${y}" width="${this.side}" height="${this.side}" fill="${this.color}" />`;
  }
}

module.exports = Square;
