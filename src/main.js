document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const board = document.querySelector("#board");
  const counter = document.querySelector("#counter");
  counter.innerText = "Score: 0";

  const head = new Head(board);
  // everytime we create a new apple, we pass its postion into the head
  const target = new Apple(board);
  head.apple = target;

  // create a snakeBody and asssign it to the head instance
  const snakeBody = new Body(head);
  head.snakeBody = snakeBody;

  body.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft" && head.currentDirection != "right") {
      head.currentDirection = "left";
    }
    if (e.code === "ArrowRight" && head.currentDirection != "left") {
      head.currentDirection = "right";
    }
    if (e.code === "ArrowUp" && head.currentDirection != "down") {
      head.currentDirection = "up";
    }
    if (e.code === "ArrowDown" && head.currentDirection != "up") {
      head.currentDirection = "down";
    }
  });
});
