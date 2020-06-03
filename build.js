import nc from "canvas";
import fs from "fs";
import path from "path";

const worksPath = "./works";

const canvas = nc.createCanvas(100, 100);
const ctx = canvas.getContext("2d");

const createImageFromScript = async (file, ctx) => {
  const { default: draw } = await import(`./works/${file}`);
  ctx.clearRect(0, 0, 100, 100);
  ctx = draw(ctx);

  const filename = path.parse(file).name;
  const out = fs.createWriteStream(`./builds/${filename}.png`);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on("finish", () =>
    console.log(`The PNG file -${filename}- was created.`)
  );
};

fs.readdir(worksPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    createImageFromScript(file, ctx);
  });
});
