const draw = function (ctx) {
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(80, 60);
  ctx.lineTo(25, 100);
  ctx.fillStyle = "#00695c";
  ctx.fill();
  return ctx;
};

export default draw;
