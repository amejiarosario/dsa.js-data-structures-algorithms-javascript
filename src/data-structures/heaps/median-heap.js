const Heap = require('./heap');

/**
 * Median Heap using one MaxHeap and one MinHeap.
 *
 * Each heap contains about one half of the data.
 * Every element in the min-heap is greater or equal to the median,
 * and every element in the max-heap is less or equal to the median.
 *
 * @author Adrian Mejia <adrian@adrianmejia.com>
 */
class MedianHeap {
  constructor() {
    this.min = new Heap((a, b) => a - b);
    this.max = new Heap((a, b) => b - a);
  }

  /**
   * Add a value to the heap
   * @runtime O(log n)
   * @param {any} value
   */
  add(value) {
    if (value > this.findMedian()) {
      // If the new element is greater than the current median, it goes to the min-heap.
      this.min.add(value);
    } else {
      // If it is less than the current median, it goes to the max heap.
      this.max.add(value);
    }

    // rebalance if the sizes of the heaps differ by more than one element
    if (Math.abs(this.min.size - this.max.size) > 1) {
      // extract the min/max from the heap with more elements and insert it into the other heap.
      if (this.min.size > this.max.size) {
        this.max.add(this.min.remove());
      } else {
        this.min.add(this.max.remove());
      }
    }
  }

  /**
   * Find median
   * @runtime O(1)
   */
  findMedian() {
    let median;

    if (this.max.size === this.min.size) {
      // When both heaps contain the same number of elements,
      // the total number of elements is even.
      // The median is the mean of the two middle elements.
      median = (this.max.peek() + this.min.peek()) / 2;
    } else if (this.max.size > this.min.size) {
      // when the max-heap contains one more element than the min-heap,
      //  the median is in the top of the max-heap.
      median = this.max.peek();
    } else {
      // When the min-heap contains one more element than the max-heap,
      // the median is in the top of the min-heap.
      median = this.min.peek();
    }
    return median;
  }

  /**
   * Return size of the heap.
   */
  get size() {
    return this.min.size + this.max.size;
  }
}

module.exports = MedianHeap;
