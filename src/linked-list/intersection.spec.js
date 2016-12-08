const expect = require('chai').expect;
const LinkedList = require('./linkedlist');

const intersection = require('./intersection');

describe('Intersection', function () {
  it('should not have intersection', function () {
    const list1 = new LinkedList();
    list1.addLast('a');
    list1.addLast('b');
    list1.addLast('c');

    const list2 = new LinkedList();
    list2.addLast('x');
    list2.addLast('y');
    list2.addLast('z');

    expect(intersection(list1, list2)).to.equal(null);
  });

  it('should have intersection', function () {
    const list1 = new LinkedList();
    list1.addLast('a');
    const b = list1.addLast('b');

    const list2 = new LinkedList();
    list2.addLast(b);

    console.log(list1.toString());
    console.log(list2.toString());

    expect(intersection(list1, list2).data).to.equal(b.data);
  });

  it('should have intersection case 2', function () {
    const list1 = new LinkedList();
    const a = list1.addLast('a');
    list1.addLast('b');
    list1.addLast('c');

    const list2 = new LinkedList();
    const z = list2.addLast('z');
    z.next = a;

    expect(intersection(list1, list2).data).to.equal(a.data);
  });

  it('should have intersection case 3', function () {
    const list1 = new LinkedList();
    list1.addLast('a');
    list1.addLast('b');
    const c = list1.addLast('c');
    list1.addLast('d');

    const list2 = new LinkedList();
    list2.addLast('z');
    list2.addLast('x');
    const y = list2.addLast('y');
    y.next = c;

    expect(intersection(list1, list2).data).to.equal(c.data);
  });
});