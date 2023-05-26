class Paddle {
  constructor(posX, posY, width, height) {
    this.x = posX;
    this.y = posY;
    this.w = width;
    this.h = height;
    // this.speedX = speedX;
    // this.speedY = speedY;
  }

  update() {
    // this.x += this.speedX;
    // this.y += this.speedY;
    // if (this.x >= 500 || this.x < 0) {
    //   this.speedX = this.speedX * -1;
    // }
    // if (this.y >= 500 || this.y < 0) {
    //   this.speedY = this.speedY * -1;
    // }
  }

  Draw(context) {
    context.fillRect(this.x, this.y, this.w, this.h);
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

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x >= 500) {
      this.speedX = this.speedX * -1;
    }
    if (this.x < -10) {
      alert("lost the game Sucker!");
    }
    if (this.y >= 500 || this.y <= 0) {
      this.speedY = this.speedY * -1;
    }
  }

  Draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.straal, Math.PI * 2, false);
    context.fillStyle = "black";
    context.fill();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  let r1 = new Paddle(20, 20, 10, 60);
  let ballImage = new Image();
  ballImage.src = "bomb.png";
  let ball = new Ball(250, 250, 10, 10, 10);

  canvas.addEventListener("mousemove", function (event) {
    let rect = canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    r1.y = mouseY - r1.h / 2;
  });

  function Animate() {
    context.clearRect(0, 0, 500, 500);

    //update
    r1.update();
    ball.update();

    // Check collision with the paddle
    if (
      ball.x + ball.straal >= r1.x &&
      ball.x - ball.straal <= r1.x + r1.w &&
      ball.y + ball.straal >= r1.y &&
      ball.y - ball.straal <= r1.y + r1.h
    ) {
      // Ball has collided with the paddle
      ball.speedX *= -1; // Reverse the horizontal direction of the ball
    }

    //draw
    r1.Draw(context);
    ball.Draw(context);

    //loop again
    setTimeout(Animate, 33);
  }

  Animate();
});
