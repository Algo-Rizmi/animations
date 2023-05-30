class Snake {
  constructor(xPos, yPos, width, height, speedX, speedY) {
    this.segments = [{ x: xPos, y: yPos }]; // Start with a single-segment snake
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.speedY = speedY;
    this.direction = "right"; // The initial direction
  }

  update() {
    let newX = this.segments[0].x;
    let newY = this.segments[0].y;

    // Update the position based on the current direction
    if (this.direction === "right") newX += this.speedX;
    if (this.direction === "left") newX -= this.speedX;
    if (this.direction === "up") newY -= this.speedY;
    if (this.direction === "down") newY += this.speedY;

    // Add the new position to the start of the segments array
    this.segments.unshift({ x: newX, y: newY });

    // Remove the last segment of the snake, unless it has just eaten
    if (!this.hasJustEaten) {
      this.segments.pop();
    } else {
      this.hasJustEaten = false; // Reset the flag
    }
  }

  draw(context) {
    context.fillStyle = "green";
    for (let segment of this.segments) {
      context.fillRect(segment.x, segment.y, this.width, this.height);
    }
  }
}

class Egg {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.placeRandomly();
  }

  placeRandomly() {
    this.x = Math.floor(Math.random() * 500); // Replace with canvas size
    this.y = Math.floor(Math.random() * 500); // Replace with canvas size
  }

  draw(context) {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  let object = new Snake(20, 429, 15, 15, 10, 10);
  let egg = new Egg(10, 10);

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
    // Check for collision with the egg
    if (object.segments[0].x === egg.x && object.segments[0].y === egg.y) {
      object.hasJustEaten = true;
      egg.placeRandomly();
    }

    // Rest of the Animate function...

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
