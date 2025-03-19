import React, { useState, useRef, useEffect } from "react";
import "./Canvas.css";

const Canvas = () => {
  const canvasSizeX = 500;
  const canvasSizeY = 500;

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const prepareCanvas = (canvas, ctx) => {
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 30;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineJoin = "round";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    prepareCanvas(canvas, ctx);
  }, []);

  const startDrawing = (e) => {
    const ctx = canvasRef.current.getContext("2d");
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath(); //začne novou cestu, aby se nepřekreslovaly staré čáry
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); //nastaví výchozí bod čáry
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); //přidá nový bod ke stávající čáře
    ctx.stroke(); //vykreslí čáru
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        height={canvasSizeY}
        width={canvasSizeX}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      ></canvas>
    </div>
  );
};

export default Canvas;
