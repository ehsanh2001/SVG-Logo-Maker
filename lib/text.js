const Shape = require("./shape");

class Text extends Shape {
  #shiftX = 0;
  #shiftY = 0;

  constructor(color, text, fontSize = 60) {
    super(color);
    this.text = text;
    this.fontSize = fontSize;
  }

  set shiftX(value) {
    this.#shiftX = value;
  }

  set shiftY(value) {
    this.#shiftY = value;
  }

  render() {
    super.render();

    const cx = this.svgParent.width / 2 + this.#shiftX;
    const cy = this.svgParent.height / 2 + this.fontSize / 3 + this.#shiftY;

    return `<text text-anchor="middle" x="${cx}" y="${cy}" font-size="${this.fontSize}" fill="${this.color}">${this.text}</text>`;
  }
}

module.exports = Text;
