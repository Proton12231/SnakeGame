const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

const unit = 20;
//定义行、列数，划分出一个16*16的方框
const row = c.height / unit;
const column = c.width / unit;

//定义一个存放蛇身体的数组
let snake = [];

//创建蛇的函数
function createSnake() {
  snake[0] = {
    x: 80,
    y: 0,
  };

  snake[1] = {
    x: 60,
    y: 0,
  };

  snake[2] = {
    x: 40,
    y: 0,
  };

  snake[3] = {
    x: 20,
    y: 0,
  };
}

createSnake();

//创建绘画蛇的函数
function draw() {
  //绘制背景
  ctx.fillStyle = "#272727";
  ctx.fillRect(0, 0, c.width, c.height);

  //绘制蛇

  for (let i = 0; i < snake.length; i++) {
    //判断蛇头蛇身
    if (i == 0) {
      ctx.fillStyle = "lightgreen";
    } else {
      ctx.fillStyle = "lightblue";
    }

    ctx.strokeStyle = "white";
    ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
    ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
  }
}

let game = setInterval(draw, 100);
