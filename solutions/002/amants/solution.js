const draw = function (ctx) {
  const colors = [
    "#4fc3f7",
    "#00695c",
    "#ef6c00",
    "#0d47a1",
    "#2196f3",
    "#b71c1c",
    "#4fc3f7",
  ];

  const roundedRectangle = (ctx, x, y, width, height, rounded) => {
    const halfRadians = (2 * Math.PI) / 2;
    const quarterRadians = (2 * Math.PI) / 4;

    ctx.arc(
      rounded + x,
      rounded + y,
      rounded,
      -quarterRadians,
      halfRadians,
      true
    );

    ctx.lineTo(x, y + height - rounded);

    ctx.arc(
      rounded + x,
      height - rounded + y,
      rounded,
      halfRadians,
      quarterRadians,
      true
    );

    ctx.lineTo(x + width - rounded, y + height);

    ctx.arc(
      x + width - rounded,
      y + height - rounded,
      rounded,
      quarterRadians,
      0,
      true
    );

    ctx.lineTo(x + width, y + rounded);

    ctx.arc(
      x + width - rounded,
      y + rounded,
      rounded,
      0,
      -quarterRadians,
      true
    );

    ctx.lineTo(x + rounded, y);
  };

  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.strokeStyle = colors[i];
    roundedRectangle(ctx, 2 + i * 4, 2 + i * 4, 96 - i * 8, 10 + i * 4, 3);
    ctx.stroke();
  }

  return ctx;
};

export default draw;
