const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth; // canvas covers entire browser window width
canvas.height = window.innerHeight; // canvas covers entire browser window height

const ctx = canvas.getContext("2d");

console.log("canvas:", canvas);
console.log("ctx:", ctx);

// window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth; // canvas covers entire browser window width
  canvas.height = window.innerHeight; // canvas covers entire browser window height
});

// interactivity
const mouse = {
  x: undefined,
  y: undefined,
};

// on click event
canvas.addEventListener("click", (e) => {
  mouse.x = e.x;
  //   console.log("click x:", mouse.x);
  mouse.y = e.y;
  //   console.log("click y:", mouse.y);
});

// on mouse event
canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  //   console.log("mouse x:", mouse.x);
  mouse.y = e.y;
  //   console.log("mouse y:", mouse.y);
});

const drawCircle = () => {
  ctx.fillStyle = "grey";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.beginPath();
  //   ctx.arc(100, 100, 50, 0, Math.PI * 2);
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
};

// animation
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  requestAnimationFrame(animate); // recursive funct.
};

animate();
