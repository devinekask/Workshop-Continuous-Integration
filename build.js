import nc from "canvas";
import fs from "fs";
import path from "path";
import util from "util";
import stream from "stream";

const solutionsPath = "./solutions";
const canvas = nc.createCanvas(100, 100);
const ctx = canvas.getContext("2d");

const finished = util.promisify(stream.finished);

if (!fs.existsSync("./build")) {
  fs.mkdirSync("./build");
}

const init = async () => {
  const allFiles = getAllFiles(solutionsPath);
  const regex = /solutions\/\d\d\d\/\w*\/solution\.js/g;
  const processed = await Promise.all(
    allFiles
      .filter((file) => {
        return regex.test(file);
      })
      .map(async (file) => {
        const image = await createImageFromScript(file, ctx);
        return { link: file.replace("solution.js", "index.html"), image };
      })
  );
  shuffle(processed);
  generateIndexHtml(processed);
};

const createImageFromScript = async (file, ctx) => {
  const { default: draw } = await import(`./${file}`);
  ctx.clearRect(0, 0, 100, 100);
  ctx = draw(ctx);

  const regex = /solutions\/(\d\d\d)\/(\w*)\/solution\.js/;

  const parts = regex.exec(file);
  const filename = `${parts[1]}-${parts[2]}`.toLowerCase();
  const out = fs.createWriteStream(`./build/${filename}.png`);

  const stream = canvas.createPNGStream();
  stream.pipe(out);
  await finished(out);
  console.log(`${filename} generated`);
  return filename;
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

const generateIndexHtml = (images) => {
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tech workshop</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      ${images
        .map(
          (data) =>
            `<a href="${data.link}"><img src="${data.image}.png" src="${data.image}" /></a>`
        )
        .join("")}
    </body>
  </html>
  `;
  fs.writeFileSync("build/index.html", html);
  console.log(`HTML page generated with ${images.length} images`);
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

init();
