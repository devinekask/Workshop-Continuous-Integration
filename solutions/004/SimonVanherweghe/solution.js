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
    ctx.arc(100, 100, 65 + index * 5, Math.PI, (Math.PI / 2) * 3);
    ctx.stroke();
  });

  return ctx;
};

export default draw;

