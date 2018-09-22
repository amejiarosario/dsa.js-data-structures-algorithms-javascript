const HashMap = require('./hashmap');
// import HashMap from './hash-map';


describe('HashMap Tests', () => {
  describe('without collisions', () => {
    let hashMap;

    beforeEach(() => {
      hashMap = new HashMap();
    });

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
      expect(hashMap.getLoadFactor()).toBe(1 / 16);
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
    let hashMap;

    beforeEach(() => {
      hashMap = new HashMap(1, 0);

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

      expect(hashMap.keys()).toEqual(['Despacito', 'Bailando', 'Dura']);

      expect(hashMap.delete('Bailando')).toBe(true);
      expect(hashMap.delete('Bailando')).toBe(false);
      expect(hashMap.get('Bailando')).toBe(undefined);

      expect(hashMap.size).toBe(2);
      expect(hashMap.keys()).toEqual(['Despacito', 'Dura']);
    });
  });

  xdescribe('#rehash', () => {
    let hashMap;

    beforeEach(() => {
      hashMap = new HashMap();

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

    it('should rehash after 12 items by default', () => {
      expect(hashMap.getLoadFactor()).toBe(11 / 16);
      expect(hashMap.buckets.length).toBe(16);
      hashMap.set('Alone', 'Alan Walker');
      expect(hashMap.getLoadFactor()).toBe(0.75);

      hashMap.set('Levels', 'Avicii');

      expect(hashMap.getLoadFactor()).toBe(13 / 32);
      expect(hashMap.buckets.length).toBe(32);

      expect(hashMap.get('Dura')).toBe('Daddy Yankee');
      expect(hashMap.get('Bailando')).toBe('Enrique Iglesias');
      expect(hashMap.get('Levels')).toBe('Avicii');
    });
  });
});
