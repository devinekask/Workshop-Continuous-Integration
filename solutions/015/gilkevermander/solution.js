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

  colors.forEach((color, index) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.fillStyle = "#b71c1c";
    ctx.fillRect(10, 10, 80, 80);
    ctx.stroke();
  });

  return ctx;
};

export default draw;
