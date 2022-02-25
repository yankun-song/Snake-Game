class Head {
  constructor(el) {
    // create a html element to show the head
    this.node = document.createElement("div");
    this.node.setAttribute("id", "head");
    el.appendChild(this.node);
    // init the head at the top-left corner
    this.node.style.top = 0;
    this.node.style.left = 0;

    this.currentDirection = "right";
    this.SPEED = 250;

    // give the head a target
    this.apple = null; //the target will be assigned to an apple instance

    // have a "path" property to record the path
    this.path = [];

    // have a body property
    this.snakeBody = null;

    setTimeout(this.move.bind(this), this.SPEED);
  }

  // resetApple() {
  //   this.apple.style.left = `${Math.floor(Math.random() * 13) * 50}px`;
  //   this.apple.style.top = `${Math.floor(Math.random() * 13) * 50}px`;
  // }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace("px", ""));
    let leftPosition = Number(head.style.left.replace("px", ""));

    //check if the head is within the board
    if (!(topPosition <= 650 && topPosition >= 0)) {
      return;
    }
    if (!(leftPosition <= 650 && leftPosition >= 0)) {
      return;
    }

    // move the head according to its direction
    if (direction === "right") {
      head.style.left = `${(leftPosition += 50)}px`;
    }
    if (direction === "left") {
      head.style.left = `${(leftPosition -= 50)}px`;
    }
    if (direction === "up") {
      head.style.top = `${(topPosition -= 50)}px`;
    }
    if (direction === "down") {
      head.style.top = `${(topPosition += 50)}px`;
    }

    // record the new position
    this.path.push([head.style.top, head.style.left]);

    // check if the head eats the apple
    if (
      head.style.top === this.apple.node.style.top &&
      head.style.left === this.apple.node.style.left
    ) {
      //get the apple, then we update the postion of the target
      // and increase the length of body and increment score
      this.apple.resetApple();
      this.snakeBody.length += 1;
      counter.innerText = `Score: ${this.snakeBody.length - 1}`;
    }

    // show the body of snake
    this.snakeBody.show(board);

    // continue to move
    setTimeout(this.move.bind(this), this.SPEED);
  }
}
