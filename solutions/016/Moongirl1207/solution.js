const draw = function (ctx) {
  ctx.fillStyle = "#4fc3f7";
  ctx.fillRect(10, 35, 60, 10);

  ctx.fillStyle = "#00695c";
  ctx.fillRect(35, 10, 10, 60);
  return ctx;
};

export default draw;
