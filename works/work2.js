const draw = function (ctx) {
  ctx.fillStyle = "green";
  ctx.arc(50, 50, 40, 0, Math.PI * 2);
  ctx.fill();
  return ctx;
};

export default draw;
