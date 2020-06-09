function cirkel(ctx, x, y,  height,  color) {

  ctx.beginPath()
  ctx.fillStyle = color;
  //ctx.fillRect(x, y, width, height)
  ctx.moveTo(x, y);
  
  ctx.arc(x, y, height, 0, 2 * Math.PI);   
    
  ctx.fill();


}
const draw = function (ctx) {
  cirkel(ctx, 40, 10, 8, "#0d47a1");
  cirkel(ctx, 40, 30, 8,  "#ef6c00");
  cirkel(ctx, 40, 50, 8,  "#b71c1c");
  cirkel(ctx, 40, 70, 8, "#2196f3");
 
  return ctx;
  
};

export default draw;
