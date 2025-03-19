import React, { useState, useRef, useEffect } from "react";
import "./Canvas.css";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  // Změna stavu lastPosition nebo isDrawing nevede k přímé změně vlastností HTML elementu <canvas> v DOMu.
  // Tudíž React nezaznamená důvod znovu vykreslit tuto komponentu.
  // Tzn. React se při změně stavu podívá na to, zda je hodnota stavu přímo použita v návratovém JSX kódu.
  // Pokud změna stavu neovlivňuje žádný vizuální prvek nebo logiku v JSX, React nemá důvod komponentu znovu vykreslit.
  // ? pokud bychom přidali <p> s nějakým stavem do return, tak to canvas taky nepřekreslí, protže React "recykluje" nezměněné komponenty
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState(null);

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
    setIsDrawing(true);
    setLastPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });

    // to je tu jen pro to aby se při stisku napsala tečka
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath(); //začne novou cestu, aby se nepřekreslovaly staré čáry
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); //nastaví výchozí bod čáry
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); //přidá nový bod ke stávající čáře
    ctx.stroke(); //vykreslí čáru
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath(); //začne novou cestu, aby se nepřekreslovaly staré čáry
    ctx.moveTo(lastPosition.x, lastPosition.y); //nastaví výchozí bod čáry
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); //přidá nový bod ke stávající čáře
    ctx.stroke(); //vykreslí čáru

    setLastPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setLastPosition(null);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        height={props.height}
        width={props.width}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      ></canvas>
    </>
  );
};

export default Canvas;
