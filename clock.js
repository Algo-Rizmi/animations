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
