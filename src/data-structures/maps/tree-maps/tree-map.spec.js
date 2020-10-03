// some parts tested on src/data-structures/maps/map.spec.js

const TreeMap = require('./tree-map');

describe('TreeMap: keep values sorted', () => {
  let map;

  beforeEach(() => {
    map = new TreeMap();
  });

  describe('when map is empty', () => {
    describe('.lastEntry and .firstEntry', () => {
      it('should get last/first entry', () => {
        expect(map.lastEntry()).toEqual([]);
        expect(map.firstEntry()).toEqual([]);
      });
    });
  });

  describe('when map has entries', () => {
    beforeEach(() => {
      map.set(20, { title: '3sum', passed: true });
      map.set(30, { title: '3sum', passed: false });
      map.set(10, { title: '2sum', passed: true });
      map.set(5, { title: '4sum', passed: false });
    });

    describe('.lastEntry and .firstEntry', () => {
      it('should get last/first entry', () => {
        expect(map.lastEntry()).toEqual([
          30,
          { title: '3sum', passed: false },
        ]);

        expect(map.firstEntry()).toEqual([
          5,
          { title: '4sum', passed: false },
        ]);
      });
    });
  });
});
