const colors = [
  "#4fc3f7",
  "#00695c",
  "#ef6c00",
  "#0d47a1",
  "#2196f3",
  "#b71c1c",
  "#4fc3f7",
];


function drawCircle(ctx, x, y, radius, startAngle, endAngle, clockWise = false, color) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.arc(x, y, radius, 0, Math.PI * 2, false );
  ctx.stroke();
}

const draw = function (ctx) {
  

    drawCircle(ctx, 50, 70, 30, 0, Math.PI*2, false, "#4fc3f7");
    drawCircle(ctx, 50, 90, 10, 0, Math.PI*2, false, "#00695c");
    drawCircle(ctx, 50, 80, 20, 0, Math.PI*2, false, "#ef6c00");
    drawCircle(ctx, 50, 65, 35, 0, Math.PI*2, false, "#0d47a1");
    drawCircle(ctx, 50, 60, 40, 0, Math.PI*2, false, "#2196f3");
    drawCircle(ctx, 50, 85, 15, 0, Math.PI*2, false, "#b71c1c");
    drawCircle(ctx, 50, 95, 5, 0, Math.PI*2, false, "#4fc3f7");
    return ctx;


};

export default draw;
