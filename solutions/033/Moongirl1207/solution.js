const draw = function (ctx) {
  ctx.rotate((45 * Math.PI) / 180);
  ctx.strokeStyle = "#4fc3f7";
  ctx.strokeRect(50, -30, 50, 50);
  ctx.fillStyle = "#00695c";
  ctx.fillRect(50, -30, 50, 50);
  ctx.stroke();

  ctx.strokeStyle = "#4fc3f7";
  ctx.strokeRect(60, -20, 30, 30);
  ctx.fillStyle = "#00695c";
  ctx.fillRect(60, -20, 30, 30);
  ctx.stroke();

  return ctx;
};

export default draw;
