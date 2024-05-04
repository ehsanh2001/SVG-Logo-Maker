const Shape = require("./shape");

class Square extends Shape {
  constructor(color, side, svgParent) {
    super(color, svgParent);
    this.svgParent = svgParent;
    this.side = Math.min(side, svgParent.width, svgParent.height);
  }

  render() {
    const parentWidth = this.svgParent.width;
    const parentHeight = this.svgParent.height;
    console.log(parentWidth, parentHeight);
    const x = (parentWidth - this.side) / 2;
    const y = (parentHeight - this.side) / 2;

    return `<rect x="${x}" y="${y}" width="${this.side}" height="${this.side}" fill="${this.color}" />`;
  }
}

module.exports = Square;
