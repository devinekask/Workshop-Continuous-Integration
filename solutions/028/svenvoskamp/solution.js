const draw = function (ctx) {

  let x;
  let y;
  for(x = 0; x < 100; x=+20) {
    for(y = 0; y < 100; y=+20) {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "#0D47A1";
      ctx.fill()
    }
   }
  return ctx;
};

export default draw;
