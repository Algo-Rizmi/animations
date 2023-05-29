class Snake {
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
  }
}

class Egg {
  constructor(xPos, yPos, width, height) {
    this.x = xPos;
    this.y = yPos;
    this.w = width;
    this.h = height;
  }

  update() {}

  draw(context) {
    context.fillRect(this.x, this.y, this.w, this.h);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  let object = new Snake(20, 429, 15, 15, 10, 10);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && object.x - object.speedX >= 0) {
      object.x -= object.speedX;
    }
    if (
      event.key === "ArrowRight" &&
      object.x + object.speedX + object.w <= 505
    ) {
      object.x += object.speedX;
    }

    if (event.key === "ArrowUp" && object.y - object.speedY >= -2) {
      object.y -= object.speedY;
    }
    if (
      event.key === "ArrowDown" &&
      object.y - object.speedY + object.h <= canvas.height
    ) {
      object.y += object.speedY;
    }
  });

  function Animate() {
    //Update
    object.update();
    //Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    //draw
    object.draw(context);
    //Animate
    requestAnimationFrame(Animate);
  }

  Animate();
});
