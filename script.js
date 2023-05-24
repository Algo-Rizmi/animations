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
