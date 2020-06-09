const draw = function (ctx) {
  ctx.fillStyle = "blue";
  ctx.fillRect(20, 20, 20, 20);
  ctx.fillRect(60, 20, 20, 20);
  ctx.fillRect(20, 60, 20, 20);
  ctx.fillRect(60, 60, 20, 20);
  return ctx;
  
};

export default draw;
