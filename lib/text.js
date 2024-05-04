const Shape = require("./shape");

class Text extends Shape {
  constructor(color, text, fontSize = 60) {
    super(color);
    this.text = text;
    this.fontSize = fontSize;
  }

  render() {
    super.render();

    const cx = this.svgParent.width / 2;
    const cy = this.svgParent.height / 2 + this.fontSize / 3;

    return `<text text-anchor="middle" x="${cx}" y="${cy}" font-size="${this.fontSize}" fill="${this.color}">${this.text}</text>`;
  }
}

module.exports = Text;
