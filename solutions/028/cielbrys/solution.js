const draw = function (ctx) {
  function getDocumentWidth() {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  }

  function getDocumentHeight() {
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
  }

  const color = [
    '#00695c',
    '#2196f3',
    '#0d47a1',
    '#ef6c00',
    '#b71c1c',
    '#4fc3f7',
  ];

  let getal = Math.floor(Math.random() * color.length)

  let vw = getDocumentWidth();
  let vh = getDocumentHeight();

  function drawDots() {
    let r = 2;
    let cw = 20;
    let ch = 20;

    for (let x = 4; x < vw; x += cw) {
      for (let y = 4; y < vh; y += ch) {
        ctx.fillStyle = color[getal];
        ctx.fillRect(x - r / 2, y - r / 2, r, r);
      }
    }
  }
  drawDots();
  return ctx
};

export default draw;
