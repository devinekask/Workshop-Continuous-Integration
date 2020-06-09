const draw = function (ctx) {
  const colors = [
    "#4fc3f7",
    "#0d47a1",
    "#2196f3",
    "#4fc3f7",
  ];

    ctx.fillStyle = "#b71c1c";
    ctx.fillRect(15, 40, 20, 20);
    
    ctx.fillStyle = "#b71c1c";
    ctx.fillRect(40, 40, 20, 20);
    
    ctx.fillStyle = "#b71c1c";
    ctx.fillRect(65, 40, 20, 20);

    ctx.fillStyle = "#2196f3";
    ctx.fillRect(10, 50, 80, 2);

   

  

  return ctx;
};

export default draw;

