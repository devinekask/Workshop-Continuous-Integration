function roundedRect(ctx, x, y, width, height, radius, color) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

const draw = function (ctx) {
  roundedRect(ctx, 5, 10, 80, 80, 5, "#F44611");
  roundedRect(ctx, 15, 20, 60, 60, 5, "#F44611");
  
  return ctx;
};

export default draw;
