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
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(25 + index * 8, 20);
    ctx.lineTo(25 + index * 8, 80);
    ctx.stroke();
  });

  colors.forEach((color, index) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(20 , 20 + index * 8);
    ctx.lineTo(80 , 20 + index * 8);
    ctx.stroke();
  });

  ctx.beginPath()
  ctx.rect(20, 20, 60, 60);
  ctx.strokeStyle = "#0d47a1";
  ctx.stroke(); 

  ctx.beginPath()
  ctx.strokeStyle = "#ef6c00";
  ctx.moveTo(20, 20); 
  ctx.lineTo(80, 20); 
  ctx.lineTo(50, 80); 
  ctx.closePath(); 
  ctx.stroke(); // 

  

  return ctx;
};

export default draw;
