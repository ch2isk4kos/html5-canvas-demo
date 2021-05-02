const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth; // canvas covers entire browser window width
canvas.height = window.innerHeight; // canvas covers entire browser window height

const ctx = canvas.getContext("2d");
const particles = [];

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
  particles.push(new Particle());
});

// on mouse event
canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  //   console.log("mouse x:", mouse.x);
  mouse.y = e.y;
  //   console.log("mouse y:", mouse.y);
});

// animation
class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update = () => {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  };

  draw = () => {
    ctx.fillStyle = "grey";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  };
}

const handleParticles = () => {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    if (particles[i].size <= 0.3) {
      particles.splice(i, 1);
      i--;
    }
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate); // recursive funct.
};

animate();
