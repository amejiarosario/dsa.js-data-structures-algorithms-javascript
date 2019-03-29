const { HashMap, TreeMap } = require('../../index');

const mapImplementations = [
  Map,
  HashMap,
  TreeMap,
];

mapImplementations.forEach((MapImplementation) => {
  describe(`Map (common interface) with ${MapImplementation.name}`, () => {
    let map;

    beforeEach(() => {
      map = new MapImplementation();
    });

    describe('#set', () => {
      it('should save an object and increase size', () => {
        expect(map.size).toBe(0);
        map.set(1, 'test');
        map.set({}, 2);
        expect(map.size).toBe(2);
      });

      it('should replace existing key its content', () => {
        map.set(1, 'test1');
        map.set(1, 'test2');
        expect(map.size).toBe(1);
        expect(map.get(1)).toBe('test2');
      });
    });

    describe('#get', () => {
      it('should save an object and increase size', () => {
        const obj = {};
        map.set(1, 'test');
        map.set(obj, 2);
        expect(map.get(1)).toBe('test');
        expect(map.get(obj)).toBe(2);
      });

      it('should handle when key is not present', () => {
        expect(map.get(404)).toBe(undefined);
      });
    });

    describe('#has', () => {
      it('should return true when key exists', () => {
        map.set(1, 1);
        expect(map.has(1)).toBe(true);
      });

      it('should return false when key is not present', () => {
        expect(map.has(1)).toBe(false);
      });
    });

    describe('#delete', () => {
      it('should return true if present', () => {
        map.set(1, 1);
        expect(map.delete(1)).toBe(true);
      });

      it('should return false if NOT present', () => {
        expect(map.delete(1)).toBe(false);
      });
    });

    describe('#keys', () => {
      beforeEach(() => {
        map.set(1, 2);
        map.set(2, 'dos');
        map.set(3, 3);
      });

      it('should return all keys', () => {
        expect(Array.from(map.keys())).toEqual([1, 2, 3]);
      });

      it('should update on delete', () => {
        expect(map.delete(1)).toBe(true);
        expect(Array.from(map.keys())).toEqual([2, 3]);
      });

      it('should handle strings', () => {
        map.set('uno', 1);
        expect(Array.from(map.keys())).toEqual([1, 2, 3, 'uno']);
      });

      it('should handle objects', () => {
        map.set({}, 1);
        expect(Array.from(map.keys())).toEqual([1, 2, 3, {}]);
      });

      it('should handle null', () => {
        map.set(null, 1);
        expect([...map.keys()].sort()).toEqual([1, 2, 3, null].sort()); // ignoring order
      });
    });

    describe('#values', () => {
      beforeEach(() => {
        map.set(1, 2);
        map.set(2, 'dos');
        map.set(3, 3);
      });

      it('should return all values', () => {
        expect(Array.from(map.values())).toEqual([2, 'dos', 3]);
      });

      it('should update on delete', () => {
        expect(map.delete(1)).toBe(true);
        expect(Array.from(map.values())).toEqual(['dos', 3]);
      });
    });

    describe('#entries', () => {
      beforeEach(() => {
        map.set(1, 2);
        map.set(2, 'dos');
        map.set(3, 3);
      });

      it('should return all entries', () => {
        expect(Array.from(map.entries())).toEqual([
          [1, 2],
          [2, 'dos'],
          [3, 3],
        ]);
      });

      it('should update on delete', () => {
        expect(map.delete(1)).toBe(true);
        expect(Array.from(map.entries())).toEqual([
          [2, 'dos'],
          [3, 3],
        ]);
      });
    });
  });
});
