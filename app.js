const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

const unit = 20;
//定义行、列数，划分出一个16*16的方框
const row = c.height / unit;
const column = c.width / unit;

//定义一个存放蛇身体的数组
let snake = [];

//定义一个蛇方向变量

window.addEventListener("keydown", changeDirection);
let d = "Right";
function changeDirection(e) {
  if (e.key == "ArrowLeft" && d != "Right") {
    d = "Left";
  } else if (e.key == "ArrowUp" && d != "Down") {
    d = "Up";
  } else if (e.key == "ArrowRight" && d != "Left") {
    d = "Right";
  } else if (e.key == "ArrowDown" && d != "Up") {
    d = "Down";
  }
}
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

class Fruit {
  constructor() {
    this.x = Math.floor(Math.random() * column) * unit;
    this.y = Math.floor(Math.random() * row) * unit;
  }

  drawFruit() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, unit, unit);
  }
}

createSnake();
let myFruit = new Fruit();
//创建绘画蛇的函数
function draw() {
  //绘制背景
  ctx.fillStyle = "#272727";
  ctx.fillRect(0, 0, c.width, c.height);

  //调用绘制果实的函数
  myFruit.drawFruit();

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

    //设定蛇的身体可以穿墙
    if (snake[i].x >= c.width) {
      snake[i].x = 0;
    }
    if (snake[i].x < 0) {
      snake[i].x = c.width;
    }
    if (snake[i].y >= c.height) {
      snake[i].y = 0;
    }
    if (snake[i].y < 0) {
      snake[i].y = c.height;
    }
  }

  //移动蛇
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  if (d == "Left") {
    snakeX -= unit;
  } else if (d == "Up") {
    snakeY -= unit;
  } else if (d == "Right") {
    snakeX += unit;
  } else if (d == "Down") {
    snakeY += unit;
  }

  //将新的头部坐标插入进去
  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.pop();
  snake.unshift(newHead);
}

let game = setInterval(draw, 100);
