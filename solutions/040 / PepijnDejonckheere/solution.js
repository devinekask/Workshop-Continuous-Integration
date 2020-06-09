const draw = function (ctx) {
  const colors = [
    "#4fc3f7",
    "#0d47a1",
    "#2196f3",
    "#4fc3f7",
  ];

    ctx.fillStyle = "#4fc3f7";
    ctx.fillRect(1, 1, 40, 40);

    ctx.fillStyle = "#0d47a1";
    ctx.fillRect(1, 60, 40, 40);
    
    ctx.fillStyle = "#2196f3";
    ctx.fillRect(60, 1, 40, 40);
   
    ctx.fillStyle = "#4fc3f7";
    ctx.fillRect(60, 60, 40, 40);

  

  return ctx;
};

export default draw;

