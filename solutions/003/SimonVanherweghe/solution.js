const draw = function (ctx) {
  const colors = [
    "#00695c",
    "#ef6c00",
    "#0d47a1",
    "#2196f3",
    "#b71c1c",
    "#4fc3f7",
    "#4fc3f7",
  ];

  const max = 15;
  for (let i = 0; i < max; i++) {
    ctx.beginPath();
    ctx.fillStyle = colors[Math.floor(Math.random() * 6)];
    ctx.arc(
      4 + Math.floor(Math.random() * 10) * 10,
      4 + Math.floor(Math.random() * 10) * 10,
      4,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  return ctx;
};

export default draw;
