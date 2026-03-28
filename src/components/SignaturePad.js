import { useRef, useEffect } from "react";

function SignaturePad() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let drawing = false;

    canvas.onmousedown = () => drawing = true;
    canvas.onmouseup = () => drawing = false;

    canvas.onmousemove = (e) => {
      if (!drawing) return;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };
  }, []);

  return (
    <div>
      <h2>Signature</h2>
      <canvas ref={canvasRef} width="400" height="200"></canvas>
    </div>
  );
}

export default SignaturePad;