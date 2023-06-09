class Character {
  constructor(xPos, yPos, width, height, speedX, speedY) {
    this.x = xPos;
    this.y = yPos;
    this.w = width;
    this.h = height;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {}

  draw(context) {
    context.fillRect(this.x, this.y, this.w, this.h);
    context.fillStyle = "black";
  }
}

class Ball {
  constructor(xPos, yPos, straal, speedX, speedY) {
    this.x = xPos;
    this.y = yPos;
    this.s = straal;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > 500) {
      this.x = -this.s;
    }
    if (this.x < -this.s) {
      this.x = 500;
    }
    if (this.y > 500) {
      this.y = -this.s;
    }
    if (this.y < -this.s) {
      this.y = 500;
    }
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.s, Math.PI * 2, false);
    context.fillStyle = "red";
    context.fill();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  let object = new Character(20, 429, 80, 10, 10, 10);
  // let box = new Character(200, 200, 50, 50, 4, 4);
  const ballen = [];
  ballen.push(new Ball(10, 20, 20, 5, 5));
  ballen.push(new Ball(10, 20, 20, 5, 5));
  ballen.push(new Ball(10, 20, 20, 5, 5));
  ballen.push(new Ball(10, 20, 20, 5, 5));
  ballen.push(new Ball(10, 20, 20, 5, 5));
  ballen.push(new Ball(12, 15, 10, 10, 20));
  ballen.push(new Ball(50, 30, 25, 8, 8));

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && object.x - object.speedX >= 0) {
      object.x -= object.speedX;
    }
    if (
      event.key === "ArrowRight" &&
      object.x + object.w + object.speedX <= 505
    ) {
      object.x += object.speedX;
    }
    if (event.key === "ArrowUp" && object.y - object.speedY >= -3) {
      object.y -= object.speedY;
    }
    if (
      event.key === "ArrowDown" &&
      object.y + object.h + object.speedY <= canvas.height
    ) {
      object.y += object.speedY;
    }
  });

  document.addEventListener("mousemove", function (event) {
    let rect = canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;
    object.x = mouseX - object.w / 2;
    object.y = mouseY - object.h / 2;
  });

  function Animate() {
    //Update
    object.update();
    //Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    //draw
    object.draw(context);
    //Collision Detection
    for (let i = 0; i < ballen.length; i++) {
      if (
        ballen[i].x + ballen[i].s >= object.x &&
        ballen[i].x - ballen[i].s <= object.x + object.w &&
        ballen[i].y + ballen[i].s >= object.y &&
        ballen[i].y - ballen[i].s <= object.y + object.h
      ) {
        ballen[i].speedY *= -1;
      }

      //Ballen update en draw
      ballen[i].update();
      ballen[i].draw(context);
    }

    //Animate
    requestAnimationFrame(Animate);
  }

  Animate();
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowLeft" && object.x - object.speedX >= 0) {
    object.x -= object.speedX;
  }
  if (
    event.key === "ArrowRight" &&
    object.x + object.w + object.speedX <= 505
  ) {
    object.x += object.speedX;
  }
  if (event.key === "ArrowUp" && object.y - object.speedY >= -3) {
    object.y -= object.speedY;
  }
  if (
    event.key === "ArrowDown" &&
    object.y + object.h + object.speedY <= canvas.height
  ) {
    object.y += object.speedY;
  }
});
