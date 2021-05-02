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

// circle configuration
ctx.fillStyle = "grey";
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
