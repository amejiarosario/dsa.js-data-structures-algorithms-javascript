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
    if(!this.stack2.peek()){
      while(this.stack1.peek()){
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}

module.exports = QueueViaStack;