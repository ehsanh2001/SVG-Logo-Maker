const Shape = require("./shape");

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    super.render();

    const x1 = this.svgParent.width / 2;
    const y1 = 0;

    const x2 = this.svgParent.width;
    const y2 = this.svgParent.height;

    const x3 = 0;
    const y3 = this.svgParent.height;

    return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
