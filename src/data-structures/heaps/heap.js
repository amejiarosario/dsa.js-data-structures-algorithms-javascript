/**
 * Heap data structure a.k.a Priority Queue
 *
 * Used to get min or max values from a collection in constant time.
 *
 * @author Adrian Mejia <adrian@adrianmejia.com>
 */
class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.array = [];
    this.comparator = (i1, i2) => comparator(this.array[i1], this.array[i2]);
  }

  /**
   * Insert element
   * @runtime O(log n)
   * @param {any} value
   */
  add(value) {
    this.array.push(value);
    this.bubbleUp();
  }

  /**
   * Retrieves, but does not remove, the head of this heap
   * @runtime O(1)
   */
  peek() {
    return this.array[0];
  }

  /**
   * Retrieves and removes the head of this heap, or returns null if this heap is empty.
   * @runtime O(log n)
   */
  remove() {
    if (!this.size()) return null;
    this.swap(0, this.size() - 1);
    const value = this.array.pop();
    this.bubbleDown();
    return value;
  }

  /**
   * Returns the number of elements in this collection.
   * @runtime O(1)
   */
  size() {
    return this.array.length;
  }

  /**
   * Move new element upwards on the heap, if it's out of order
   * @runtime O(log n)
   */
  bubbleUp() {
    let index = this.size() - 1;
    const parent = (i) => Math.ceil(i / 2 - 1);
    while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
      this.swap(parent(index), index);
      index = parent(index);
    }
  }

  /**
   * After removal, moves element downwards on the heap, if it's out of order
   * @runtime O(log n)
   */
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

  /**
   * "Private": Swap elements on the heap
   * @runtime O(1)
   * @param {number} i1 index 1
   * @param {number} i2 index 2
   */
  swap(i1, i2) {
    [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
  }
}

// aliases
Heap.prototype.poll = Heap.prototype.remove;
Heap.prototype.offer = Heap.prototype.add;
Heap.prototype.element = Heap.prototype.peek;

module.exports = Heap;
