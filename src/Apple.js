class Apple {
  constructor(el) {
    this.node = document.createElement("img");
    this.node.setAttribute("id", "apple");
    this.node.setAttribute("src", "src/assets/apple.jpg");

    el.appendChild(this.node);

    this.node.style.left = `${Math.floor(Math.random() * 13) * 50}px`;
    this.node.style.top = `${Math.floor(Math.random() * 13) * 50}px`;
    return this;
  }

  resetApple() {
    this.node.style.left = `${Math.floor(Math.random() * 13) * 50}px`;
    this.node.style.top = `${Math.floor(Math.random() * 13) * 50}px`;
  }
}
