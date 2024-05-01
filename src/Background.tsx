let size: number = 20;
let drops: number[] = [];
const letters: string[] = [];
const offset: number = 100;

const defineCanvas = (height: number, width: number): HTMLCanvasElement => {
  const canvas = document.querySelector('canvas');
  canvas!.height = height;
  canvas!.width = width;
  return canvas!;
}

const genRandom = (bound: number = 1) => {
  return Math.floor(Math.random() * bound)
}

const init = (canvas: HTMLCanvasElement, s: number = 20) => {
  for (let i: number = 32; i < 127; i++) {
    letters.push(String.fromCharCode(i));
  }

  size = s;
  const columns: number = canvas!.width / size;

  for (let i: number = 0; i < columns; i++) {
    drops[i] = genRandom(offset) - offset;
  }
}

const draw = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  ctx!.fillStyle = "#00000026";
  ctx!.fillRect(0, 0, canvas.width, canvas.height);

  for (let i: number = 0; i < drops.length; i++) {
    const text: string = letters[genRandom(letters.length)];
    ctx!.fillStyle = "#00ff00";
    ctx!.fillText(text, i * size, drops[i] * size);
    drops[i]++;
    if (drops[i] * size > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
  }
}

const startAnimation = (canvas: HTMLCanvasElement) => {
  setInterval(() => draw(canvas), 80);
}

const start = (height: number, width: number) => {
  const canvas = defineCanvas(height, width);
  init(canvas, size);
  startAnimation(canvas);
}

export default start;
