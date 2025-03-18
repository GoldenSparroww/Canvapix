import React, { useRef, useState, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef(null); // Ref pro canvas element
  const [isDrawing, setIsDrawing] = useState(false); // Stav kreslení (při stisknutí myši)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 }); // Pozice posledního bodu
  const [color, setColor] = useState("black"); // Barva tužky

  // Funkce pro získání pozice myši v rámci plátna
  const getMousePos = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  // Funkce pro začátek kreslení (při stisknutí myši)
  const startDrawing = (event) => {
    const { x, y } = getMousePos(event);
    setLastPos({ x, y });
    setIsDrawing(true);
  };

  // Funkce pro kreslení (při pohybu myši)
  const draw = (event) => {
    if (!isDrawing) return; // Pokud není aktivní kreslení, nic se neděje

    const { x, y } = getMousePos(event);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y); // Předchozí pozice
    ctx.lineTo(x, y); // Nová pozice
    ctx.strokeStyle = color; // Barva tužky
    ctx.lineWidth = 2; // Tloušťka čáry
    ctx.lineCap = "round"; // Zaoblené konce čáry
    ctx.stroke(); // Vykreslení čáry
    setLastPos({ x, y }); // Uložení nové pozice pro další tah
  };

  // Funkce pro ukončení kreslení (při uvolnění tlačítka myši)
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Funkce pro změnu barvy tužky
  const changeColor = (newColor) => {
    setColor(newColor);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Inicializace plátna (nastavení výchozích vlastností)
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={64}
        height={64}
        style={{ border: "1px solid black" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing} // Pokud myš opustí canvas, kreslení se zastaví
      />
      <div>
        <button onClick={() => changeColor("black")}>Černá</button>
        <button onClick={() => changeColor("red")}>Červená</button>
        <button onClick={() => changeColor("green")}>Zelená</button>
        <button onClick={() => changeColor("blue")}>Modrá</button>
      </div>
    </div>
  );
};

export default Canvas;
