import nc from "canvas";
import fs from "fs";
import path from "path";

const solutionsPath = "./solutions";
const canvas = nc.createCanvas(100, 100);
const ctx = canvas.getContext("2d");

const createImageFromScript = async (file, ctx) => {
  const { default: draw } = await import(`./${file}`);
  ctx.clearRect(0, 0, 100, 100);
  ctx = draw(ctx);

  const regex = /solutions\/(\d\d\d)\/(\w*)\/solution\.js/;

  const parts = regex.exec(file);
  const filename = `${parts[1]}-${parts[2]}`.toLowerCase();
  const out = fs.createWriteStream(`./builds/${filename}.png`);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on("finish", () =>
    console.log(`The PNG file -${filename}- was created.`)
  );
};

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

const allFiles = getAllFiles(solutionsPath);
const regex = /solutions\/\d\d\d\/\w*\/solution\.js/g;
allFiles
  .filter((file) => {
    return regex.test(file);
  })
  .forEach(function (file) {
    createImageFromScript(file, ctx);
  });
