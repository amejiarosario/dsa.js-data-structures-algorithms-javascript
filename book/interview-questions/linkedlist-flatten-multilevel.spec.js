/* eslint-disable one-var, one-var-declaration-per-line, prefer-destructuring */
const { flatten, flattenBrute } = require('./linkedlist-flatten-multilevel');
const { LinkedList } = require('../../src/index');
const { ListNode } = require('../../src/index');

class Node extends ListNode {
  constructor(value) {
    super(value);
    this.child = null;
  }
}

// print linked list node with (previous and child)
const toString = (head) => {
  const arr = [];
  for (let i = head; i; i = i.next) {
    arr.push(`${i.value}(${(i.previous && i.previous.value) || ''},${(i.child && i.child.value) || ''})`);
  }
  return `{ ${arr.join(' -> ')} }`;
};

const ll = (nums) => Array.from(new LinkedList(nums, Node));

[flatten, flattenBrute].forEach((fn) => {
  describe(`flatten: ${fn.name}`, () => {
    let l1, l2, l3, l4;

    beforeEach(() => {
      l1 = ll([1, 2, 3]);
      l2 = ll([10, 12, 14, 16]);
      l3 = ll([21, 23]);
      l4 = ll([36, 37]);
    });

    it('works with flat 1 level', () => {
      // 1--- 2--- 3
      expect(toString(fn(l1[0]))).toEqual('{ 1(,) -> 2(1,) -> 3(2,) }');
    });

    it('works with flat 2 levels', () => {
      // 21--23
      //      |
      //      36--37
      l3[1].child = l4[0];
      expect(toString(l3[0])).toEqual('{ 21(,) -> 23(21,36) }');
      expect(toString(fn(l3[0]))).toEqual('{ 21(,) -> 23(21,) -> 36(23,) -> 37(36,) }');
    });

    it('works with flat 2 levels and reminder', () => {
      // 1--- 2--- 3
      //      |
      //      36--37
      l1[1].child = l4[0];
      expect(toString(l1[0])).toEqual('{ 1(,) -> 2(1,36) -> 3(2,) }');

      expect(toString(fn(l1[0]))).toEqual('{ 1(,) -> 2(1,) -> 36(2,) -> 37(36,) -> 3(37,) }');
    });

    it('should flatten 3 levels', () => {
      // 1--- 2--- 3
      //      |
      //     10---12---14---16
      //           |    |
      //           |   36---37
      //           |
      //           21--23
      l1[1].child = l2[0];
      l2[1].child = l3[0];
      l2[2].child = l4[0];

      // verify list children are present
      expect(toString(l1[0])).toEqual('{ 1(,) -> 2(1,10) -> 3(2,) }');
      expect(toString(l2[0])).toEqual('{ 10(,) -> 12(10,21) -> 14(12,36) -> 16(14,) }');

      // run
      expect(toString(fn(l1[0]))).toEqual('{ 1(,) -> 2(1,) -> 10(2,) -> 12(10,) -> 21(12,) -> 23(21,) -> 14(23,) -> 36(14,) -> 37(36,) -> 16(37,) -> 3(16,) }');
    });
  });
});
