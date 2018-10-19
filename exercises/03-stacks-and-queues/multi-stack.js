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
    const stack = this.getStack(stackIndex);

    if(stack.current < stack.end) {
      this.array[stack.current++] = data;
    } else {
      throw new Error('Stack overflow');
    }
  }

  pop(stackIndex) {
    const stack = this.getStack(stackIndex);
    if(stack.current !== stack.start) {
      return this.array[--stack.current];
    }
  }

  peek(stackIndex) {
    const stack = this.getStack(stackIndex);
    return this.array[stack.current - 1];
  }

  isEmpty(stackIndex) {
    const stack = this.getStack(stackIndex);
    return stack.current === stack.start;
  }

  getStack(stackIndex) {
    if(stackIndex < 0 || stackIndex > 2) {
      throw new Error(`Stack ${stackIndex} does not exist`);
    }
    return this.stacks[stackIndex];
  }

}

module.exports = MultiStack;