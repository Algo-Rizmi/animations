class Rechthoek {
  constructor(xPos, yPos, width, height, speedX, speedY) {
    this.x = xPos;
    this.y = yPos;
    this.w = width;
    this.h = height;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  Update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x >= 500 || this.x < 0) {
      this.speedX = this.speedX * -1;
    }

    if (this.y >= 500 || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

class Ball {
  constructor(xPos, yPos, straal, speedX, speedY) {
    this.x = xPos;
    this.y = yPos;
    this.straal = straal;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  Update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x >= 500 || this.x <= 0) {
      this.speedX = this.speedX * -1;
    }
    if (this.y >= 500 || this.y <= 0) {
      this.speedY = this.speedY * -1;
    }
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.straal, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  let ballen = [];
  ballen.push(new Ball(10, 20, 20, 5, 5));
  ballen.push(new Ball(12, 15, 10, 5, 5));
  ballen.push(new Ball(50, 30, 25, 5, 5));
  let r1 = new Rechthoek(10, 10, 20, 95, 5, 5);

  function Animate() {
    //clear
    context.clearRect(0, 0, 500, 500);

    //update en draw rectangle
    r1.Update();
    r1.draw(context);

    for (let i = 0; i < ballen.length; i++) {
      const ball = ballen[i];
      ball.Update();
      Collide(ball, r1);
      ball.draw(context);
    }

    //loop again
    requestAnimationFrame(Animate);
  }

  function Collide(obj1, obj2) {
    const ballLeft = obj1.x - obj1.straal;
    const ballRight = obj1.x + obj1.straal;
    const ballTop = obj1.y - obj1.straal;
    const ballBottom = obj1.y + obj1.straal;

    if (
      ballRight > obj2.x &&
      ballLeft < obj2.x + obj2.w &&
      ballBottom > obj2.y &&
      ballTop < obj2.y + obj2.h
    ) {
      // Ball collides with rectangle, reverse ball's speed
      obj1.speedX *= -1;
    }
  }

  Animate();
});
