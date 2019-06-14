let bricklength = 30;
let brickheight = 20;
let bricks = [];
let ball;
let yvel;
let xvel;
let score = 0;
function setup() {
createCanvas(600,600);
    for (let i = 0; i < 14; i++) {

    bricks[i] = {
    x: i * 40 + 20,
    y: 50,
    color: {
      r:random(0,255),
      g:random(0,255),
      b:random(0,255),
    }
    };
}
   ball = {
   x: width/2,
   y: height/2,
   yvel: 7,
   xvel: 3,
 };
}
function draw() {
  background(0);
  fill(255, 0, 0);
  rect(mouseX, height - 25, 100, 20);
  fill(255, 255, 255);
  circle(ball.x,ball.y,10);
  for (let brick of bricks) {
    fill(brick.color.r,brick.color.g,brick.color.b);
    rect(brick.x, brick.y, bricklength, brickheight);
  }
  ball.x += ball.xvel;
  ball.y += ball.yvel;
  if (paddlehit()) {
    ball.yvel=-ball.yvel;
  }
  if (checksides1()){
    ball.xvel=-ball.xvel;
  }
  checksides2();
  hitbricky();
  showscore();
}

function paddlehit() {

if ( ball.x > mouseX && ball.x < mouseX + 100 && ball.y + 10 >= height - 25) {
  return true;
}
else {
  return false;
}
}

function checksides1() {
if ( ball.x + 10 >= width || ball.x <= 0) {
return true;
}
else {
  return false;
}
}
// the bottom of the canvas. The top of the canvas is considered as 0 meanwhile the bottom is considered the height
// the left side of the canvas is considered the 0 meanwhile the right side is considered the width
function checksides2() {
  if (ball.y - 10 > height) {
    return true;
  }
  else {
    return false;
  }
}

function hitbricky() {
  for ( let i = bricks.length-1; i>= 0; i--) {
    if ( ball.y - 10 <= bricks[i].y + 20 && ball.x >= bricks[i].x && ball.x <= bricks[i].x + 30) {
      console.log("hitbricky");
      bricks.splice(i,1);
      ball.yvel= -ball.yvel;
      score = score + 1;
      return;
    }
  }
}
function showscore(){
document.querySelector("#result").innerHTML = score
}
