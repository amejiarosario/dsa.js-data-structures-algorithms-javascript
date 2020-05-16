const Heap = require('./heap');

class MinHeap extends Heap {
  constructor() {
    super((a, b) => a - b);
  }
}
module.exports = MinHeap;
