const draw = function (ctx) {

  ctx.beginPath();
  ctx.rect(9.5, 20, 80, 80);
  ctx.strokeStyle = 'lightblue';
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(15, 40, 70, 60);
  ctx.strokeStyle = 'red';
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(20, 50, 60, 50);
  ctx.strokeStyle = 'green';
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(30, 60, 40, 40);
  ctx.strokeStyle = 'blue';
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(40, 75, 20, 25);
  ctx.strokeStyle = 'orange';
  ctx.stroke();

  return ctx;
};

export default draw;
