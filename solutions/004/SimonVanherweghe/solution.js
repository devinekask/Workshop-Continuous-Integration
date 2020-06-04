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
  roundedRect(ctx, 10, 20, 80, 40, 5, "#0d47a1");
  roundedRect(ctx, 20, 30, 60, 40, 5, "#ef6c00");
  roundedRect(ctx, 30, 40, 40, 40, 5, "#b71c1c");
  roundedRect(ctx, 40, 50, 20, 40, 5, "#2196f3");
  return ctx;
};

export default draw;
