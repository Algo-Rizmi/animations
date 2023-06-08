class Character {
  constructor(xPos, yPos, width, height, speedX, speedY) {
    this.x = xPos;
    this.y = yPos;
    this.w = width;
    this.h = height;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    this.x += this.speedX; // Move horizontally based on speedX
    this.y += this.speedY; // Move vertically based on speedY
  }

  increaseWidth() {
    this.w += 10; // Increase width by 10 pixels
  }

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

  update() {}

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
  let object = new Character(20, 429, 80, 10, 2, 2);
  // let box = new Character(200, 200, 50, 50, 4, 4);
  let ball = new Ball(300, 300, 12, 10, 3);
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

  function Animate() {
    //Update
    object.update();
    //Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    //draw
    object.draw(context);
    ball.draw(context);
    //Collision Detection
    if (
      ball.x + ball.s >= object.x &&
      ball.x - ball.s <= object.x + object.w &&
      ball.y + ball.s >= object.y &&
      ball.y - ball.s <= object.y + object.h
    ) {
      object.increaseWidth();
      randomFood();
    }
    //Ballen update en draw
    ball.update();
    //Animate
    requestAnimationFrame(Animate);
  }

  function randomFood() {
    ball.x = Math.random() * (canvas.width - ball.s);
    ball.y = Math.random() * (canvas.height - ball.s);
  }

  Animate();
});
