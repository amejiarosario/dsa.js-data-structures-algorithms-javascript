const HashMap = require('./hash-maps/hashmap');
const TreeMap = require('./tree-maps/tree-map');

const mapImplementations = [
  // Map,
  // HashMap,
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
        expect(map.size).toBe(3);
        expect(map.has(1)).toBe(true);
        expect(map.delete(1)).toBe(true);
        expect(Array.from(map.keys())).toEqual([2, 3]);
      });
    });
  });
});
