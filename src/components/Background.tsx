import { useEffect, useRef } from "react";
import "@/styles/Background.css";

export const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors: string[] = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#FDCB6E",
      "#6C5CE7",
      "#FFA07A"
    ];

    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const randomColor = () =>
      colors[Math.floor(Math.random() * colors.length)];

    const drawCircle = (
      x: number,
      y: number,
      radius: number,
      color: string
    ) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const drawLine = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      color: string,
      width: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
    };

    const drawCurve = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      controlX: number,
      controlY: number,
      color: string,
      width: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(controlX, controlY, endX, endY);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
    };

    const drawTriangle = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number,
      color: string
    ) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    const generateBackground = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );

      gradient.addColorStop(0, randomColor());
      gradient.addColorStop(1, randomColor());
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const generateShapes = () => {
      const numShapes = 100;
      for (let i = 0; i < numShapes; i++) {
        const shapeType = Math.floor(random(0, 4));
        const color = randomColor();

        const x = random(0, canvas.width);
        const y = random(0, canvas.height);

        switch (shapeType) {
          case 0:
            drawCircle(x, y, random(5, 50), color);
            break;
          case 1:
            drawLine(
              x,
              y,
              random(0, canvas.width),
              random(0, canvas.height),
              color,
              random(1, 5)
            );
            break;
          case 2:
            drawCurve(
              x,
              y,
              random(0, canvas.width),
              random(0, canvas.height),
              random(0, canvas.width),
              random(0, canvas.height),
              color,
              random(1, 5)
            );
            break;
          case 3:
            drawTriangle(
              x,
              y,
              random(0, canvas.width),
              random(0, canvas.height),
              random(0, canvas.width),
              random(0, canvas.height),
              color
            );
            break;
        }
      }
    };

    const applyTexture = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = random(-20, 20);
        data[i] = Math.max(0, Math.min(255, data[i] + noise));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const generatePainting = () => {
      generateBackground();
      generateShapes();
      applyTexture();
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generatePainting();
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-background"></canvas>;
};
