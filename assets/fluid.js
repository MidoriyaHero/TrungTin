const canvas = document.querySelector("#liquid");
const context = canvas.getContext("2d", { alpha: false });
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const pointer = { x: innerWidth * 0.72, y: innerHeight * 0.35 };
let width = innerWidth;
let height = innerHeight;
let pixelRatio = Math.min(devicePixelRatio, 1.5);
let animationFrame;
let activeColor = "#38E8EE";
const palettes = {
  dark: { background: "#03181A", primary: "#38E8EE", secondary: "#B8FF8A", depth: "#0A4444", depthOpacity: 0.3 },
  light: { background: "#F1FFF8", primary: "#00AEBB", secondary: "#65C844", depth: "#B8F0DD", depthOpacity: 0.42 }
};

const blobs = Array.from({ length: 8 }, (_, index) => ({
  angle: (Math.PI * 2 * index) / 8,
  radius: 110 + index * 13,
  speed: 0.00012 + index * 0.000018,
  size: Math.min(width, height) * (0.18 + (index % 3) * 0.04),
  x: width * 0.74,
  y: height * 0.4
}));

/** Resizes the drawing surface without rendering unnecessary retina pixels. */
function resizeCanvas() {
  width = innerWidth;
  height = innerHeight;
  pixelRatio = Math.min(devicePixelRatio, 1.5);
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

/** Draws one diffused pool with a dense center and transparent edge. */
function drawPool(x, y, radius, color, opacity) {
  const gradient = context.createRadialGradient(x, y, radius * 0.08, x, y, radius);
  gradient.addColorStop(0, `${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")}`);
  gradient.addColorStop(0.42, `${color}${Math.round(opacity * 0.72 * 255).toString(16).padStart(2, "0")}`);
  gradient.addColorStop(1, `${color}00`);
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
}

/** Renders the viscous field; the pointer influences the cluster through inertia. */
function render(time = 0) {
  const theme = document.documentElement.dataset.theme || "dark";
  const palette = palettes[theme];
  context.fillStyle = palette.background;
  context.fillRect(0, 0, width, height);

  const anchorX = reducedMotion.matches ? width * 0.76 : pointer.x;
  const anchorY = reducedMotion.matches ? height * 0.34 : pointer.y;

  blobs.forEach((blob, index) => {
    const orbitX = Math.cos(blob.angle + time * blob.speed) * blob.radius;
    const orbitY = Math.sin(blob.angle + time * blob.speed * 0.83) * blob.radius * 0.7;
    const targetX = anchorX + orbitX;
    const targetY = anchorY + orbitY;
    blob.x += (targetX - blob.x) * (0.012 + index * 0.0015);
    blob.y += (targetY - blob.y) * (0.012 + index * 0.0015);
    drawPool(blob.x, blob.y, blob.size, index % 4 === 0 ? palette.secondary : activeColor, index % 4 === 0 ? 0.13 : 0.17);
  });

  drawPool(width * 0.08, height * 0.92, Math.min(width, height) * 0.48, palette.depth, palette.depthOpacity);

  if (!reducedMotion.matches) animationFrame = requestAnimationFrame(render);
}

/** Starts a single static frame or the interactive animation as requested. */
function startRendering() {
  cancelAnimationFrame(animationFrame);
  render();
}

window.addEventListener("pointermove", (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
}, { passive: true });

window.addEventListener("resize", () => {
  resizeCanvas();
  if (reducedMotion.matches) render();
});

document.querySelectorAll("[data-liquid]").forEach((item) => {
  item.addEventListener("pointerenter", () => {
    activeColor = item.dataset.liquid;
    const bounds = item.getBoundingClientRect();
    pointer.x = bounds.left + bounds.width * 0.78;
    pointer.y = bounds.top + bounds.height * 0.5;
  });
});

reducedMotion.addEventListener("change", startRendering);
window.addEventListener("portfolio-theme-change", (event) => {
  activeColor = palettes[event.detail.theme].primary;
  startRendering();
});
resizeCanvas();
startRendering();
