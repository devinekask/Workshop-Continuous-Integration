const draw = function (ctx) {
  //Twee gevulde halve cirkels in hetzelfde kleur die de volledige hoogte in nemen en naast elkaar staan

  ctx.beginPath();
  ctx.strokeStyle = "#4fc3f7";
  ctx.fillStyle = "#4fc3f7";
  ctx.arc(26, 50, 24, 0, 2 * Math.PI);
  ctx.arc(74, 50, 24, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  return ctx;
};

export default draw;
