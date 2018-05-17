class Queue {
  constructor() {
    this.input = [];
  }

  add(element) {
    this.input.push(element);
  }

  remove() {
    return this.input.shift();
  }
}

module.exports = Queue;