class Queue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  add(element) {
    this.input.push(element);
  }

  remove() {
    if(!this.output.length) {
      while(this.input.length) {
        this.output.push(this.input.pop());
      }
    }
    return this.output.pop();
  }
}

module.exports = Queue;