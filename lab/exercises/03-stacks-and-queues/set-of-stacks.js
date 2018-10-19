class SetOfStacks {
  constructor(threshold = 100) {
    this.threshold = threshold;
    this.sets = [];
    this.index = 0;
  }

  push(data) {
    if(!this.sets[this.index]) {
      this.sets[this.index] = [data];
    } else {
      this.sets[this.index].push(data);
    }

    // move to next set
    if(this.sets[this.index].length >= this.threshold) {
      this.index++;
    }
  }

  pop() {
    if(!this.sets[this.index]) { return; }
    if(this.sets[this.index].length === 0) { this.index--; }
    return this.sets[this.index].pop();
  }

  popAt(index = 0) {
    if(!this.sets[index]) { return; }
    return this.sets[index].pop();
  }
}

module.exports = SetOfStacks;