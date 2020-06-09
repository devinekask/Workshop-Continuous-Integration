const draw = function (ctx, canvas) {
  const colors = [
    "#4fc3f7",
    "#00695c",
    "#ef6c00",
    "#0d47a1",
    "#2196f3",
    "#b71c1c",
    "#4fc3f7",
  ];

  const width = canvas.width;
  colors.forEach((color, index) => {
    for (var i = 0; i < 10; i += 1) {
      const randomPoint = Math.random() * width;
      ctx.beginPath();
      ctx.setLineDash([Math.random() * 20, 5]);
      ctx.strokeStyle = color;
      ctx.moveTo(0, randomPoint);
      ctx.lineTo(width, randomPoint);
      ctx.stroke();
    }
  });

  return ctx;
};

export default draw;
