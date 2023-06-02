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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Clock

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  let graden = 0;

  function Animate() {
    let currentTime = new Date();
    //clear
    context.clearRect(0, 0, 500, 500);
    //update
    graden++;
    context.save();
    context.translate(400, 180);
    context.rotate((currentTime.getSeconds() * 6 * Math.PI) / 180);
    context.strokeStyle = "green";
    //draw secondwijzer
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -50);
    context.stroke();
    context.restore();
    //draw u;urwerk border
    context.beginPath();
    context.arc(400, 180, 100, 0, Math.PI * 2, false);
    context.stroke();
    //loop again
    setTimeout(Animate, 33);
  }
  Animate();
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
  let ball = new Ball(250, 250, 30, 5, 5);

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

    //draw paddle
    r1.Draw(context);

    //draw ball
    context.drawImage(
      ballImage,
      ball.x - ball.straal,
      ball.y - ball.straal,
      ball.straal * 2,
      ball.straal * 2
    );

    //loop again
    setTimeout(Animate, 33);
  }

  Animate();
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  let hasMouseClicked = false;

  //   context.beginPath();
  //   context.moveTo(20, 50);
  //   context.lineTo(200, 200);
  //   context.lineWidth = 20;
  //   context.strokeStyle = "green";
  //   context.stroke();
  // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //   document.addEventListener("mousedown", () => {
  //     hasMouseClicked = true;
  //     context.beginPath();

  //   });

  //   document.addEventListener("mouseup", () => {
  //     hasMouseClicked = false;
  //   });

  //   document.addEventListener("mousemove", (MouseEvent) => {
  //     if (hasMouseClicked) {
  //       context.lineTo(MouseEvent.pageX, MouseEvent.pageY);
  //       context.stroke();
  //     }
  //   });

  context.beginPath();
  context.arc(50, 60, 25, Math.PI * 2, false);
  context.fillStyle = "red";
  context.fill();
  context.strokeStyle = "green";
  context.lineWidth = 5;
  context.stroke();
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//game.js
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
  let ball = new Ball(250, 250, 30, 5, 5);

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

    //draw paddle
    r1.Draw(context);

    //draw ball
    context.drawImage(
      ballImage,
      ball.x - ball.straal,
      ball.y - ball.straal,
      ball.straal * 2,
      ball.straal * 2
    );

    //loop again
    setTimeout(Animate, 33);
  }

  Animate();
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Pong.js
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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Running.js
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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//object control
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
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector("canvas");
  let context = canvas.getContext("2d");
  let object = new Character(20, 429, 15, 70, 10, 10);

  console.log(object);
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
    //Animate
    requestAnimationFrame(Animate);
  }

  Animate();
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
