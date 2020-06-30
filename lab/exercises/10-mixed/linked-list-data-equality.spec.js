const hasSameData = require('./linked-list-data-equality');
const { LinkedList } = require('../../../src/index');

describe('Linked List: Has Same Data', () => {
  it('should work', () => {
    const l1 = new LinkedList(['h', 'i']);
    const l2 = new LinkedList(['hi']);
    expect(hasSameData(l1.first, l2.first)).toEqual(true);
  });

  it('should work', () => {
    const l1 = new LinkedList(['he', 'll', 'o']);
    const l2 = new LinkedList(['hel', 'l', 'o']);
    expect(hasSameData(l1.first, l2.first)).toEqual(true);
  });

  it('should work', () => {
    const l1 = new LinkedList(['he', 'll', 'o']);
    const l2 = new LinkedList(['ho', 'l', 'a']);
    expect(hasSameData(l1.first, l2.first)).toEqual(false);
  });

  it('should work when one is empty', () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList(['ho', 'l', 'a']);
    expect(hasSameData(l1.first, l2.first)).toEqual(false);
  });

  it('should work when both are empty', () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList();
    expect(hasSameData(l1.first, l2.first)).toEqual(true);
  });

  it('should work when one is empty and other null', () => {
    const l1 = new LinkedList(['']);
    const l2 = new LinkedList();
    expect(hasSameData(l1.first, l2.first)).toEqual(false);
  });
});
