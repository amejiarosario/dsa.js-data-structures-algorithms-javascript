class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.array = [];
    this.comparator = (i1, i2) => comparator(this.array[i1], this.array[i2]);
  }

  add(value) {
    this.array.push(value);
    this.bubbleUp();
  }

  peek() {
    return this.array[0];
  }

  remove() {
    this.swap(0, this.size() - 1);
    const value = this.array.pop();
    this.bubbleDown();
    return value;
  }

  size() {
    return this.array.length;
  }

  bubbleUp() {
    let index = this.size() - 1;
    const parent = (i) => Math.ceil(i / 2 - 1);
    while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
      this.swap(parent(index), index);
      index = parent(index);
    }
  }

  bubbleDown() {
    let index = 0;
    const left = (i) => 2 * i + 1;
    const right = (i) => 2 * i + 2;
    const getTopChild = (i) => (right(i) < this.size()
      && this.comparator(left(i), right(i)) > 0 ? right(i) : left(i));

    while (left(index) < this.size() && this.comparator(index, getTopChild(index)) > 0) {
      const next = getTopChild(index);
      this.swap(index, next);
      index = next;
    }
  }

  swap(i1, i2) {
    [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
  }
}

module.exports = Heap;
