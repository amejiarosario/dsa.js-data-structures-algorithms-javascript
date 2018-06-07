const MySet = require('./set');

describe('Set', function () {
  let set;

  beforeEach(() => {
    set = new MySet();
  });

  it('should set size and has', () => {
    expect(set.size).toBe(0);
    expect(set.has('uno')).toBe(false);

    set.add('uno');

    expect(set.has('uno')).toBe(true);
    expect(set.size).toBe(1);
  });

  it('should not allow duplicates', () => {
    set.add('uno');
    set.add('one');
    set.add('uno');

    expect(set.size).toBe(2);
    expect(set.has('uno')).toBe(true);
    expect(set.has('one')).toBe(true);
  });

  it('should delete items', () => {
    expect(set.delete('uno')).toBe(false);

    set.add('uno');

    expect(set.delete('uno')).toBe(true);
    expect(set.size).toBe(0);
  });

  it('should return entries', () => {
    set.add(1);
    set.add(2);
    set.add(3);
    expect(set.entries()).toEqual([1,2,3]);
  });

  it('should return entries wihout holes', () => {
    set.add(0);
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.delete(2)).toBe(true);
    expect(set.delete(0)).toBe(true);

    expect(set.entries()).toEqual([1,3]);
    expect(set.size).toBe(2);
  });
});