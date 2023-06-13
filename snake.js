class Character {
  constructor(xPos, yPos, width, height, speedX, speedY) {
    this.x = xPos;
    this.y = yPos;
    this.w = width;
    this.h = height;
    this.speedX = speedX;
    this.speedY = speedY;
    this.snakeBody = [{ x: this.x, y: this.y }];
  }

  update() {}

  draw(context) {
    context.fillStyle = "blue";
    for (let segment of this.snakeBody) {
      context.fillRect(segment.x, segment.y, this.w, this.h);
    }
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
  let object = new Character(20, 429, 10, 10, 5, 5);
  let ball = new Ball(0, 0, 10, 12, 10);
  let direction = null;
  let gameOver = false;

  document.addEventListener("keydown", (event) => {
    const directions = {
      ArrowLeft: "left",
      ArrowRight: "right",
      ArrowUp: "up",
      ArrowDown: "down",
    };

    if (
      directions[event.key] &&
      direction !== oppositeDirection(directions[event.key])
    ) {
      direction = directions[event.key];
    }
  });

  function oppositeDirection(dir) {
    const opposites = {
      left: "right",
      right: "left",
      up: "down",
      down: "up",
    };
    return opposites[dir] || null;
  }

  function update() {
    const { x, y, speedX, speedY, w, h } = object;

    switch (direction) {
      case "left":
        object.x = x - speedX >= 0 ? x - speedX : x;
        break;

      case "right":
        object.x = x + w + speedX <= canvas.width ? x + speedX : x;
        break;

      case "up":
        object.y = y - speedY >= 0 ? y - speedY : y;
        break;

      case "down":
        object.y = y + h + speedY <= canvas.height ? y + speedY : y;
        break;
    }
    // Update snake's body segments
    const newSegment = { x: object.x, y: object.y };
    object.snakeBody.unshift(newSegment);
    object.snakeBody.pop();

    //Gameover funciton
    if (
      object.x - object.speedX < 0 ||
      object.x + object.w + object.speedX > canvas.width ||
      object.y - object.speedY < 0 ||
      object.y + object.h + object.speedY > canvas.height
    ) {
      endGame();
    }

    for (let i = 1; i < object.snakeBody.length; i++) {
      if (
        object.x == object.snakeBody[i].x &&
        object.y == object.snakeBody[i].y
      ) {
        endGame();
      }
    }
    function endGame() {
      if (gameOver) return; // Don't do anything if the game is already over

      gameOver = true; // Set gameOver to true, this will prevent the endGame function from executing more than once

      canvas.style.display = "none";

      const gameOverImage = new Image();
      gameOverImage.src = "maze_resized.jpg";
      gameOverImage.style.display = "block";
      gameOverImage.style.margin = "0 auto";

      document.body.appendChild(gameOverImage);

      // Sound Game Over
      const gameOverSound = new Audio("scream.mp3");
      gameOverSound.play();
    }
  }

  function Animate() {
    //Update
    update();
    //random Ball postion
    if (ball.x == 0 && ball.y == 0) {
      randomFood();
    }
    //Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    //Canvas color
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
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
      randomFood();
      addSegmentToSnake();
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

  function addSegmentToSnake() {
    const lastSegment = object.snakeBody[object.snakeBody.length - 1];
    object.snakeBody.push({ x: lastSegment.x, y: lastSegment.y });
  }

  Animate();
});
