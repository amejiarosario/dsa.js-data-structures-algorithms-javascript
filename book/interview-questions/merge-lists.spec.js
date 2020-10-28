const { mergeTwoLists } = require('./merge-lists');
const LinkedList = require('../../src/data-structures/linked-lists/linked-list');

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
    const actual = mergeTwoLists(l1, l2);
    const expected = '1 -> 2 -> 2 -> 3 -> 4';
    expect(asString(actual)).toEqual(expected);
  });

  it('should handle empty list 1', () => {
    const l1 = new LinkedList().first;
    const l2 = new LinkedList([1, 2]).first;
    const actual = mergeTwoLists(l1, l2);
    const expected = '1 -> 2';
    expect(asString(actual)).toEqual(expected);
  });

  it('should handle empty list 2', () => {
    const l1 = new LinkedList([2, 3, 4]).first;
    const l2 = new LinkedList().first;
    const actual = mergeTwoLists(l1, l2);
    const expected = '2 -> 3 -> 4';
    expect(asString(actual)).toEqual(expected);
  });

  it('should handle empty lists', () => {
    const l1 = new LinkedList().first;
    const l2 = new LinkedList().first;
    const actual = mergeTwoLists(l1, l2);
    const expected = '';
    expect(asString(actual)).toEqual(expected);
  });
});
