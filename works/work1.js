const draw = function (ctx) {
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 20, 20);
  ctx.fillRect(80, 10, 20, 20);
  ctx.fillRect(80, 80, 20, 20);
  ctx.fillRect(10, 80, 20, 20);
  return ctx;
};

export default draw;
