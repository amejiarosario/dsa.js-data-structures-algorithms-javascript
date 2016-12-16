const Stack = require('./stack');

class QueueViaStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(data) {
    this.stack1.push(data);
  }

  remove() {
    while(this.stack1.peek()){
      this.stack2.push(this.stack1.pop());
    }
    const first = this.stack2.pop();

    while(this.stack2.peek()){
      this.stack1.push(this.stack2.pop());
    }

    return first;
  }
}

module.exports = QueueViaStack;