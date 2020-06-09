const draw = function (ctx) {
  ctx.fillStyle = "#0d47a1";
  ctx.fillRect(20, 20, 20, 20);
  ctx.fillRect(60, 20, 20, 20);
  ctx.fillRect(20, 60, 20, 20);
  ctx.fillRect(60, 60, 20, 20);
  return ctx;
  
};

export default draw;
