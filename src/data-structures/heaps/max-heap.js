const Heap = require('./heap');

class MaxHeap extends Heap {
  constructor() {
    super((a, b) => b - a);
  }
}
module.exports = MaxHeap;
