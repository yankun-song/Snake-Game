class Body {
  constructor(head) {
    this.head = head;
    this.length = 1;
    return this;
  }
  show(el) {
    // clear past elements generated
    const elements = document.getElementsByClassName("snakeBody");
    while (elements.length > 0) elements[0].remove();

    for (let i = 0; i < this.length; i++) {
      const node = document.createElement("div");
      node.style.top = this.head.path[this.head.path.length - 1 - i][0];
      node.style.left = this.head.path[this.head.path.length - 1 - i][1];
      node.classList.add("snakeBody");
      el.appendChild(node);
    }
  }
}
