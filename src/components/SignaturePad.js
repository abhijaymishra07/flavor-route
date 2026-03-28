import React, { useRef, useState, useEffect } from 'react';

function SignaturePad() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#ff5722';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
  }, []);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearPad = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div style={padContainerStyle}>
      <p style={{ marginBottom: '10px' }}>Sign to confirm receipt:</p>
      <canvas
        ref={canvasRef}
        width={400}
        height={150}
        style={canvasStyle}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <button onClick={clearPad} style={clearBtnStyle}>Clear</button>
    </div>
  );
}

const padContainerStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' };
const canvasStyle = { backgroundColor: '#fff', borderRadius: '8px', cursor: 'crosshair', border: '2px solid #333' };
const clearBtnStyle = { marginTop: '10px', padding: '5px 15px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' };

export default SignaturePad;