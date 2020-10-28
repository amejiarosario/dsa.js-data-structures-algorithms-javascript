const { hasSameData } = require('./linkedlist-same-data');
const LinkedList = require('../../src/data-structures/linked-lists/linked-list');

describe('Linked List: has same data', () => {
  it('should work with same data and shape', () => {
    const l1 = new LinkedList(['hi']).first;
    const l2 = new LinkedList(['hi']).first;
    expect(hasSameData(l1, l2)).toEqual(true);
  });

  it('should work with different data', () => {
    const l1 = new LinkedList(['ab']).first;
    const l2 = new LinkedList(['a']).first;
    expect(hasSameData(l1, l2)).toEqual(false);
  });

  it('should work with same data and but different shape', () => {
    const l1 = new LinkedList(['h', 'e', 'l', 'l', 'o']).first;
    const l2 = new LinkedList(['hello']).first;
    expect(hasSameData(l1, l2)).toEqual(true);
  });

  it('should work with different data separated', () => {
    const l1 = new LinkedList(['he', 'll', 'o']).first;
    const l2 = new LinkedList(['ho', 'la']).first;
    expect(hasSameData(l1, l2)).toEqual(false);
  });

  it('should handle empty', () => {
    const l1 = new LinkedList(['hi']).first;
    const l2 = new LinkedList(['', 'h', '', 'i']).first;
    expect(hasSameData(l1, l2)).toEqual(true);
  });

  xit('should work with large data', () => {
    const size = 1e6; // 1e7 takes 4sec.
    const l1 = new LinkedList(Array(size).fill('x')).first;
    const l2 = new LinkedList(Array(size).fill('z')).first;
    expect(hasSameData(l1, l2)).toEqual(false);
  });
});
