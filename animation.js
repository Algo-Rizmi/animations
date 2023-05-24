class Ball {
  constructor(x, y, straal, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.straal = straal;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
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
    context.fillStyle = "green";
    context.fill();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  let ballen = [];
  ballen.push(new Ball(10, 20, 20, 5, 5));
  ballen.push(new Ball(12, 15, 10, 10, 20));
  ballen.push(new Ball(50, 30, 25, 8, 8));
  function Animate() {
    //CLEAR
    context.clearRect(0, 0, 500, 500);
    //UPDATE
    for (let i = 0; i < ballen.length; i++) {
      ballen[i].move();

      //DRAW
      ballen[i].draw(context);
    }

    // context.fillRect(x, y, 50, 100);
    setTimeout(Animate, 33);
  }
  Animate();
});
