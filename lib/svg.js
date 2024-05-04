class SVG {
  constructor(width = 300, height = 200) {
    this.children = [];
    this.width = width;
    this.height = height;
  }

  add(child) {
    this.children.push(child);
  }

  render() {
    return `<svg width="${this.width}" height="${
      this.height
    }" xmlns="http://www.w3.org/2000/svg">${this.children
      .map((child) => child.render())
      .join("")}</svg>`;
  }
}

module.exports = SVG;
