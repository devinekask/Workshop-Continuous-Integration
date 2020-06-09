function arc(ctx, x, y, width, height, radius, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, width, height, radius * Math.PI);
  ctx.fill();
}

const draw = function (ctx) {
  arc(ctx, 10, 10, 4, 5, 10, "#0d47a1")
  arc(ctx, 30, 10, 4, 5, 10, "#ef6c00")
  arc(ctx, 20, 20, 4, 5, 10, "#b71c1c")
  arc(ctx, 10, 30, 4, 5, 10, "#2196f3")
  arc(ctx, 30, 30, 4, 5, 10, "#4fc3f7")
  
  return ctx;
};

export default draw;
