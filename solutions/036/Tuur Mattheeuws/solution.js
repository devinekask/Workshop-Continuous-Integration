const draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(50, 10, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'blue';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(50, 30, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'red';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(50, 50, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(50, 70, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'orange';
  ctx.fill();
  ctx.lineWidth = 5;
  return ctx;
};


export default draw;
