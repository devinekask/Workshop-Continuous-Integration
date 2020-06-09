const draw = function (ctx) {
  const colors = [
    "#4fc3f7",
    "#00695c",
    "#ef6c00",
    "#0d47a1",
    "#2196f3",
    "#b71c1c",
    "#4fc3f7",
  ];

  let y = 0;
  while (y <= 50) {
    ctx.beginPath();
    ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.moveTo(0, 100 / 2);
    ctx.lineTo(100 / 2, y);
    ctx.lineTo(100, 100 / 2);
    ctx.stroke();
    y += 2;
  }

  return ctx;
};

export default draw;
