class Rectangle {
  constructor(width, height) {
     this.width = width;
     this.height = height;
  }

  getArea() {
     return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
     super(side, side);
  }
}

let rectangle = new Rectangle(5, 10);

let square = new Square(7);

console.log("Площа прямокутника: " + rectangle.getArea());

console.log("Площа квадрата: " + square.getArea());
