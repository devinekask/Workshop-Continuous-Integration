import draw1 from "./works/work1.js";
import draw2 from "./works/work2.js";

const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");
draw1(ctx1);

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
draw2(ctx2);
