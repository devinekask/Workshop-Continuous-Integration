const draw = function (ctx) {


  const colors = [
    "#4fc3f7",
    "#00695c",
    "#ef6c00",
    "#0d47a1"
  ];

  colors.forEach((color, index) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(50, index * 20, 12, 0, 2 * Math.PI);
    ctx.stroke();
  });

  return ctx;

};

export default draw;
