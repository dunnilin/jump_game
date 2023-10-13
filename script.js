
const player = {
  x: 200,
  y: 200,
  width: 50,
  height: 50,
  speed: 5,
};

// 定義障礙物
const obstacles = [];
for (let i = 0; i < 10; i++) {
  obstacles.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    width: 100,
    height: 50,
  });
}

let gameTime = 0;

    // 定義特別道具
const items = [];
for (let i = 0; i < 5; i++) {
  items.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    type: Math.floor(Math.random() * 2),
  });
}

// 定義道具類型
const ITEM_TYPE_SPEED = 0;
const ITEM_TYPE_INVINCIBLE = 1;

// 檢查主體是否碰到道具
function checkItemCollision() {
  for (const item of items) {
    if (
      player.x + player.width > item.x &&
      player.x < item.x + item.width &&
      player.y + player.height > item.y &&
      player.y < item.y + item.height
    ) {
      // 主體碰到道具
      switch (item.type) {
        case ITEM_TYPE_SPEED:
          // 加速
          player.speed = 10;
          break;
        case ITEM_TYPE_INVINCIBLE:
          // 無敵
          player.invincible = true;
          break;
      }
      // 移除道具
      items.splice(items.indexOf(item), 1);
    }
  }
}

// 遊戲畫面
function draw() {
  // 
  const ctx = document.querySelector("canvas").getContext("2d");
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  // 畫出主體
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // 畫出障礙物
  ctx.fillStyle = "blue";
  for (const obstacle of obstacles) {
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }


  // 畫出道具
  for (const item of items) {
    ctx.fillStyle = item.type === ITEM_TYPE_SPEED ? "green" : "yellow";
    ctx.fillRect(item.x, item.y, item.width, item.height);
  }

  // ...
  gameTime++;
}

// 遊戲事件
// ...
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 32) {
    // 空白鍵點擊後主體跳躍
    player.y -= player.speed;
  }
});

// 定義遊戲循環
setInterval(draw, 1000 / 60);

// 檢查主體是否碰到障礙物
// ...
// 檢查主體是否碰到障礙物
function checkCollision() {
  for (const obstacle of obstacles) {
    if (
      player.x + player.width > obstacle.x &&
      player.x < obstacle.x + obstacle.width &&
      player.y + player.height > obstacle.y &&
      player.y < obstacle.y + obstacle.height
    ) {
      // 主體碰到障礙物，遊戲結束
      console.log("遊戲結束");
      return true;
    }
  }
  return false;
}

// 遊戲結束後清除畫布
function gameOver() {
  const ctx = document.querySelector("canvas").getContext("2d");
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

// 檢查主體是否碰到道具
draw();
while (true) {
  if (checkCollision()) {
    gameOver();
    break;
  }
  checkItemCollision();
  draw();
}

/*

// 定義主體
const player = {
  x: 200,
  y: 200,
  width: 50,
  height: 50,
  speed: 5,
};

// 定義遊戲時間
let gameTime = 0;

// 定義遊戲畫面
function draw() {
  // 清除畫布
  const ctx = document.querySelector("canvas").getContext("2d");
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  // 畫出主體
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // 畫出障礙物
  ctx.fillStyle = "blue";
  for (const obstacle of obstacles) {
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }

  // 計算遊戲時間
  gameTime++;
}

// 定義遊戲事件
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 32) {
    // 空白鍵點擊後主體跳躍
    player.y -= player.speed;
  }
});

// 定義遊戲循環
setInterval(draw, 1000 / 60);

// 檢查主體是否碰到障礙物
function checkCollision() {
  for (const obstacle of obstacles) {
    if (
      player.x + player.width > obstacle.x &&
      player.x < obstacle.x + obstacle.width &&
      player.y + player.height > obstacle.y &&
      player.y < obstacle.y + obstacle.height
    ) {
      // 主體碰到障礙物，遊戲結束
      console.log("遊戲結束");
      return true;
    }
  }
  return false;
}

// 遊戲結束後清除畫布
function gameOver() {
  const ctx = document.querySelector("canvas").getContext("2d");
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

// 每幀檢查主體是否碰到障礙物
draw();
while (true) {
  if (checkCollision()) {
    gameOver();
    break;
  }
  draw();
}
*/