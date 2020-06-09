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

  colors.forEach((color, index) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, index * 14, 100, 10);
    console.log(index)
  });
  
  return ctx;
};

export default draw;
