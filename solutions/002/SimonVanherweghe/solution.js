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
    ctx.arc(50, 50, 49 - index * 5, 0, Math.PI * 2);
    ctx.stroke();
  });

  return ctx;
};

export default draw;
