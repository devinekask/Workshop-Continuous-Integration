const ROWS = 10;
const COLUMNS = 10;
const CIRCLERADIUS = 4;

const calculateGrid = (ctx) => {
  const squareSide = 100 / ROWS;
  const grid = [];
  for (let i = 1; i <= COLUMNS; i++) {
    const x = squareSide * i - squareSide / 2;
    for (let j = 1; j <= ROWS; j++) {
      const y = squareSide * j - squareSide / 2;
      grid.push({ x, y });
    }
  }
  return grid;
};

const draw = function (ctx) {
  let grid = calculateGrid(ctx);
  const colors = [
    "#4fc3f7",
    "#00695c",
    "#ef6c00",
    "#0d47a1",
    "#2196f3",
    "#b71c1c",
    "#4fc3f7",
  ];

  // Math.floor(Math.random() * items.length)
  for (let i = 0; i < 15; i++) {
    ctx.beginPath();
    let color =
      i > colors.length - 1
        ? colors[Math.floor(Math.random() * colors.length)]
        : colors[i];
    ctx.fillStyle = color;
    const randomId = Math.floor(Math.random() * grid.length);
    ctx.arc(grid[randomId].x, grid[randomId].y, CIRCLERADIUS, 0, 2 * Math.PI);
    ctx.fill();
    delete grid[randomId];
    grid = grid.filter((value) => value);
  }

  return ctx;
};

export default draw;
