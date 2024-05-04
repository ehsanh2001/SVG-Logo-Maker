class Shape {
  constructor(color) {
    this.color = color;
    // this is a reference to the parent SVG object 
    // and will be set when the shape is added to the SVG object
    this.svgParent = null;  
  }
  reder() {
    throw new Error("render method should be implemented");
  }
}

module.exports = Shape;
