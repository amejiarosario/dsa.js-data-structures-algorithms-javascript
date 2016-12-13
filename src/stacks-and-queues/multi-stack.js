class MultiStack {
  constructor(size = 300, s1 = size/3, s2 = size/3, s3 = size/3) {
    this.array = [];

    this.stacks = [
      {start: 0, end: s1, current: 0},
      {start: s1, end: s1 + s2, current: s1},
      {start: s1 + s2, end: s1 + s2 + s3, current: s1 + s2},
    ];

    // TODO: validates s1 + s2 + s3 add up to size
  }

  push(stackIndex, data) {
    const stack = this.stacks[stackIndex];

    if(stack.current < stack.end) {
      this.array[stack.current] = data;
      stack.current++;
    } else {
      throw new Error(`Stack #${stackIndex} overflow at ${stack.current}`);
    }
  }

  pop(stackIndex) {
    const stack = this.stacks[stackIndex];

    if(this.isEmpty(stackIndex)) {
      return null;
    } else {
      return this.array[--stack.current];
    }
  }

  peek(stackIndex) {
    const stack = this.stacks[stackIndex];

  }

  isEmpty(stackIndex) {
    const stack = this.stacks[stackIndex];
    return stack.current < stack.start;
  }

}