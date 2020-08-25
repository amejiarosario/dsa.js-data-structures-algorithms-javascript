const { mergeTwoLists } = require('./merge-lists');
const LinkedList = require('../../src/data-structures/linked-lists/linked-list');
// const ListNode = require('../../src/data-structures/linked-lists/node');

describe('Linked List: Merge Lists', () => {
  function asString(root) {
    const values = [];
    for (let curr = root; curr; curr = curr.next) {
      values.push(curr.value);
    }
    return values.join(' -> ');
  }

  it('should merge in asc order', () => {
    const l1 = new LinkedList([2, 3, 4]).first;
    const l2 = new LinkedList([1, 2]).first;
    console.log({l1: asString(l1), l2: asString(l2)});
    const actual = mergeTwoLists((l1, l2));
    const expected = '1 -> 2 -> 2 -> 3 -> 4';
    expect(asString(actual)).toEqual(expected);
  });
});
