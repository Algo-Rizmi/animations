class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  Mul(m) {
    this.x *= m;
    this.y *= m;
  }

  Add(v) {
    this.x += v.x;
    this.y += v.y;
  }

  Sub(v) {
    this.x -= v.x;
    this.y -= v.y;
  }

  Mag() {
    let measure = Math.sqrt(this.x * this.x + this.y * this.y);
    return measure;
  }
}

class Mover {
  constructor() {
    this.location = location;
    this.speed = speed;
  }

  Mover() {}

  Draw() {}

  Update() {}
}
