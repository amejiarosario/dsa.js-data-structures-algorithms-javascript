const { HashMap } = require('../../../index');


describe('HashMap Tests', () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
  });

  describe('set and get basics', () => {
    it('should hold one null key', () => {
      hashMap.set(null, 1);
      hashMap.set(null, 2);
      expect(hashMap.get(null)).toBe(2);
    });

    it('should hold multiple null values', () => {
      hashMap.set(1, null);
      hashMap.set(2, null);
      expect(hashMap.get(1)).toBe(null);
      expect(hashMap.get(2)).toBe(null);
    });
  });

  describe('#keys', () => {
    it('should get keys', () => {
      hashMap.set(0, 'foo');
      hashMap.set(null, 'fox');
      hashMap.set('a', 'bar');
      hashMap.set({}, 'baz');

      const mapIter = hashMap.keys();

      expect(mapIter.next().value).toBe(0);
      expect(mapIter.next().value).toBe(null);
      expect(mapIter.next().value).toBe('a');
      expect(mapIter.next().value).toEqual({});
    });

    it('should not have holes', () => {
      hashMap.set('0', 'foo');
      hashMap.set(1, 'bar');
      hashMap.set({}, 'baz');

      hashMap.delete(1);

      expect([...hashMap.keys()]).toEqual(['0', {}]);
    });
  });

  describe('#values', () => {
    it('should get values', () => {
      hashMap.set('0', 'foo');
      hashMap.set(1, 'bar');
      hashMap.set({}, 'baz');

      const mapIter = hashMap.values();

      expect(mapIter.next().value).toBe('foo');
      expect(mapIter.next().value).toBe('bar');
      expect(mapIter.next().value).toBe('baz');
    });

    it('should not have holes', () => {
      hashMap.set('0', 'foo');
      hashMap.set(1, 'bar');
      hashMap.set({}, 'baz');

      hashMap.delete(1);

      expect(Array.from(hashMap.values())).toEqual(['foo', 'baz']);
    });
  });

  describe('#entries', () => {
    it('should get values', () => {
      hashMap.set('0', 'foo');
      hashMap.set(1, 'bar');
      hashMap.set({}, 'baz');

      const mapIter = hashMap.entries();

      expect(mapIter.next().value).toEqual(['0', 'foo']);
      expect(mapIter.next().value).toEqual([1, 'bar']);
      expect(mapIter.next().value).toEqual([{}, 'baz']);
    });

    it('should not have holes', () => {
      hashMap.set('0', 'foo');
      hashMap.set(1, 'bar');
      hashMap.set({}, 'baz');

      hashMap.delete(1);
      expect(hashMap.length).toBe(2);
      expect(hashMap.size).toBe(2);

      expect(Array.from(hashMap.entries())).toEqual([
        ['0', 'foo'],
        [{}, 'baz'],
      ]);

      expect(Array.from(hashMap)).toEqual([
        ['0', 'foo'],
        [{}, 'baz'],
      ]);
    });
  });

  describe('without collisions', () => {
    it('set and get values', () => {
      hashMap.set('test', 'one');
      expect(hashMap.get('test')).toBe('one');
    });

    it('should increase size', () => {
      expect(hashMap.size).toBe(0);
      hashMap.set('test', 'uno');
      expect(hashMap.size).toBe(1);
    });

    it('has without value', () => {
      expect(hashMap.size).toBe(0);
      hashMap.set('uno');
      expect(hashMap.size).toBe(1);
      expect(hashMap.has('uno')).toBe(true);
      expect(hashMap.has('dos')).toBe(false);
    });

    it('should overwrite values and keep same size', () => {
      hashMap.set('test', 'uno');
      expect(hashMap.get('test')).toBe('uno');
      hashMap.set('test', 'dos');
      expect(hashMap.get('test')).toBe('dos');
      expect(hashMap.size).toBe(1);
    });

    it('should increase load factor and size', () => {
      expect(hashMap.getLoadFactor()).toBe(0);
      expect(hashMap.size).toBe(0);
      hashMap.set('test', 'one');
      expect(hashMap.getLoadFactor()).toBeGreaterThan(0);
      expect(hashMap.size).toBe(1);
    });

    it('should return with has', () => {
      expect(hashMap.has('test')).toBe(false);
      hashMap.set('test', 'uno');
      expect(hashMap.has('test')).toBe(true);
    });

    it('should delete', () => {
      hashMap.set('Despacito', 'Luis Fonsi');
      hashMap.set('Bailando', 'Enrique Iglesias');
      hashMap.set('Dura', 'Daddy Yankee');

      expect(hashMap.size).toBe(3);
      expect(hashMap.delete('Bailando')).toBe(true);
      expect(hashMap.size).toBe(2);
      expect(hashMap.delete('Bailando')).toBe(false);
      expect(hashMap.get('Bailando')).toBe(undefined);
    });
  });

  describe('with many values (and collisions)', () => {
    beforeEach(() => {
      hashMap = new HashMap(1, Number.MAX_SAFE_INTEGER);

      hashMap.set('Pineapple', 'Pen Pineapple Apple Pen');
      hashMap.set('Despacito', 'Luis Fonsi');
      hashMap.set('Bailando', 'Enrique Iglesias');
      hashMap.set('Dura', 'Daddy Yankee');
      hashMap.set('Lean On', 'Major Lazer');
      hashMap.set('Hello', 'Adele');
      hashMap.set('All About That Bass', 'Meghan Trainor');
      hashMap.set('This Is What You Came For', 'Calvin Harris ');
    });

    it('should count collisions', () => {
      expect(hashMap.collisions).toBe(7);
    });

    it('gets values', () => {
      hashMap.set('test', 'one');
      expect(hashMap.get('test')).toBe('one');
      expect(hashMap.get('Dura')).toBe('Daddy Yankee');
      expect(hashMap.get('Bailando')).toBe('Enrique Iglesias');
    });

    it('should increase load factor and size', () => {
      expect(hashMap.getLoadFactor()).toBe(8);
      expect(hashMap.size).toBe(8);
      hashMap.set('test', 'one');
      expect(hashMap.getLoadFactor()).toBe(9);
      expect(hashMap.size).toBe(9);
    });

    it('should overwrite values and keep same size', () => {
      hashMap.set('test', 'uno');
      expect(hashMap.get('test')).toBe('uno');
      hashMap.set('test', 'dos');
      expect(hashMap.get('test')).toBe('dos');
      expect(hashMap.size).toBe(9);
    });

    it('should return with has', () => {
      expect(hashMap.has('test')).toBe(false);
      hashMap.set('test', 'uno');
      expect(hashMap.has('test')).toBe(true);
    });

    it('should update keys on deletes', () => {
      // expect(hashMap.size).toBe(8);
      // expect(hashMap.has('Hello')).toBe(true);
      expect(hashMap.delete('Hello')).toBe(true);
      // expect(hashMap.has('Hello')).toBe(false);
      // expect(hashMap.size).toBe(7);
      expect(hashMap.delete('Lean On')).toBe(true);
      // expect(hashMap.has('Lean On')).toBe(false);
      // expect(hashMap.size).toBe(6);
      expect(hashMap.delete('Pineapple')).toBe(true);
      // expect(hashMap.has('Pineapple')).toBe(false);
      // expect(hashMap.size).toBe(5);
      expect(hashMap.delete('All About That Bass')).toBe(true);
      expect(hashMap.has('All About That Bass')).toBe(false);
      // expect(hashMap.size).toBe(4);
      expect(hashMap.delete('This Is What You Came For')).toBe(true);
      expect(hashMap.has('This Is What You Came For')).toBe(false);
      expect(hashMap.size).toBe(3);

      expect(Array.from(hashMap.keys())).toEqual(['Despacito', 'Bailando', 'Dura']);

      expect(hashMap.delete('Bailando')).toBe(true);
      expect(hashMap.delete('Bailando')).toBe(false);
      expect(hashMap.get('Bailando')).toBe(undefined);

      expect(hashMap.size).toBe(2);
      expect([...hashMap.keys()]).toEqual(['Despacito', 'Dura']);
    });
  });

  describe('#rehash', () => {
    beforeEach(() => {
      hashMap = new HashMap(1, 11);

      hashMap.set('Pineapple', 'Pen Pineapple Apple Pen');
      hashMap.set('Despacito', 'Luis Fonsi');
      hashMap.set('Bailando', 'Enrique Iglesias');
      hashMap.set('Dura', 'Daddy Yankee');
      hashMap.set('Lean On', 'Major Lazer');
      hashMap.set('Hello', 'Adele');
      hashMap.set('All About That Bass', 'Meghan Trainor');
      hashMap.set('Wake Me Up', 'Avicii');
      hashMap.set('Brother', 'Avicii');
      hashMap.set('Faded', 'Alan Walker');
      hashMap.set('The Spectre', 'Alan Walker');
    });

    it('should rehash', () => {
      expect(hashMap.collisions).toBe(10);
      expect(hashMap.getLoadFactor()).toBe(11);
      expect(hashMap.buckets.length).toBe(1);

      expect(hashMap.keysTrackerIndex).toBe(11);
      hashMap.delete('All About That Bass');
      hashMap.set('All About That Bass', 'Meghan Trainor');
      expect(hashMap.keysTrackerIndex).toBe(12);
      // should have a hole
      expect(hashMap.keysTrackerArray).toEqual(['Pineapple', 'Despacito', 'Bailando', 'Dura', 'Lean On', 'Hello',
        undefined,
        'Wake Me Up', 'Brother', 'Faded', 'The Spectre', 'All About That Bass']);

      hashMap.loadFactor = 0.75;
      hashMap.set('Alone', 'Alan Walker');

      // rehash
      expect(hashMap.keysTrackerIndex).toBe(12);
      expect(hashMap.collisions).toBeLessThan(10);
      expect(hashMap.buckets.length).toBe(29); // <- next prime
      expect(hashMap.getLoadFactor()).toBe(12 / 29);

      hashMap.set('Rolling in the Deep', 'Adele');

      expect(hashMap.get('Dura')).toBe('Daddy Yankee');
      expect(hashMap.get('Bailando')).toBe('Enrique Iglesias');
      expect(hashMap.get('Alone')).toBe('Alan Walker');

      expect(Array.from(hashMap.keys()).length).toBe(13);
      expect(hashMap.size).toBe(13);
      expect(hashMap.keysTrackerIndex).toBe(13);
      // after the rehash the hole should have been removed
      expect(hashMap.keysTrackerArray).toEqual(['Pineapple', 'Despacito',
        'Bailando', 'Dura', 'Lean On', 'Hello', 'Wake Me Up', 'Brother',
        'Faded', 'The Spectre', 'All About That Bass', 'Alone',
        'Rolling in the Deep']);
    });
  });
});
