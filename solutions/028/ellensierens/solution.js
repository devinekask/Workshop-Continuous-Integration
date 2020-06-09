const draw = function (ctx, canvas) {

const step = 5;
const width = 90;
console.log(width);
console.log(step);

for(let j= 0; j< 5; j++){
for(let i= 0; i< 5; i++){
   console.log(width- (i*(width/5)))
  ctx.beginPath();
  ctx.ellipse(width- (i*(width/4))+5 , width- (j*(width/4))+5, 5, 5, 0, 0, Math.PI*2);
  ctx.fillStyle = "#ef6c00";
  ctx.fill();
  ctx.closePath;
}
}
  return ctx;
};

export default draw;
