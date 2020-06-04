import 'babel-polyfill';
import util from 'util';
import glob from 'glob';
import path from 'path';
import fs from 'fs';

import nc from 'canvas';

const globp = util.promisify(glob);
const lstatp = util.promisify(fs.lstat);

describe('solutions', () => {
  it('each solution folder should be a nr', async () => {
    const folderNames = (await globp('./solutions/*', { ignore: ['./solutions/template']}))
      .map(folderPath => path.basename(folderPath));
    for (let folderName of folderNames) {
      expect(isNaN(parseInt(folderName))).toBe(false);
    }
  });
  it('each solution folder should only contain subfolders', async () => {
    const userFolders = (await globp('./solutions/*/*', { ignore: ['./solutions/template/**']}));
    for (let userFolder of userFolders) {
      const lstat = await lstatp(userFolder);
      expect(lstat.isDirectory()).toBe(true);
    }
  });
  it('each solution subfolder should have a solution.js file', async () => {
    const userFolders = (await globp('./solutions/*/*', { ignore: ['./solutions/template/**']}));
    for (let userFolder of userFolders) {
      const lstat = await lstatp(`${userFolder}/solution.js`);
      expect(lstat.isFile()).toBe(true);
    }
  });
  it('each solution.js file should export a default function', async () => {
    const userFolders = (await globp('./solutions/*/*', { ignore: ['./solutions/template/**']}));
    for (let userFolder of userFolders) {
      const { default: draw } = await import(`${userFolder}/solution.js`);
      expect(typeof draw === "function").toBe(true);
    }
  });
  it('each draw function receives a ctx and returns that same ctx', async () => {
    const userFolders = (await globp('./solutions/*/*', { ignore: ['./solutions/template/**']}));
    for (let userFolder of userFolders) {
      const { default: draw } = await import(`${userFolder}/solution.js`);
      const canvas = nc.createCanvas(100, 100);
      const ctx = canvas.getContext('2d');
      expect(draw(ctx)).toBe(ctx);
    }
  });
});