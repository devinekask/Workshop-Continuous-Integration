const draw = function (ctx) {
  ctx.draw()
  const colors = [
    "#4fc3f7",
    "#00695c",
    "#ef6c00",
    "#0d47a1"
  ];

  colors.forEach((color, index) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(50, index * 20, 5, 0, 2 * Math.PI);
    ctx.fill();
  });

  return ctx;

};

export default draw;
