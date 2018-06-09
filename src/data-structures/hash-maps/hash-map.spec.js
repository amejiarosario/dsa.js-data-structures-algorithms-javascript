const HashMap = require('./hash-map');
// import HashMap from './hash-map';


describe('without collisions', () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
  });

  it('gets values', () => {
    hashMap.set('test', 'one');
    expect(hashMap.get('test')).toBe('one');
  });

  it('should increase load factor and size', () => {
    expect(hashMap.getLoadFactor()).toBe(0);
    expect(hashMap.size).toBe(0);
    hashMap.set('test', 'one');
    expect(hashMap.getLoadFactor()).toBe(1 / 16);
    expect(hashMap.size).toBe(1);
  });

  it('should overwrite values and keep same size', () => {
    hashMap.set('test', 'uno');
    expect(hashMap.get('test')).toBe('uno');
    hashMap.set('test', 'dos');
    expect(hashMap.get('test')).toBe('dos');
    expect(hashMap.size).toBe(1);
  });

  it('should return with has', () => {
    expect(hashMap.has('test')).toBe(false);
    hashMap.set('test', 'uno');
    expect(hashMap.has('test')).toBe(true);
  });

  it('should update keys on deletes', () => {
    hashMap.set('Despacito', 'Luis Fonsi');
    hashMap.set('Bailando', 'Enrique Iglesias');
    hashMap.set('Dura', 'Daddy Yankee');

    expect(hashMap.delete('Bailando')).toBe(true);
    expect(hashMap.delete('Bailando')).toBe(false);
    expect(hashMap.get('Bailando')).toBe(undefined);

    expect(hashMap.keys()).toEqual(['Despacito', 'Dura']);
  });
});

describe('with many values (and collisions)', () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap(2, 0);

    hashMap.set('Pineapple', 'Pen Pineapple Apple Pen');
    hashMap.set('Despacito', 'Luis Fonsi');
    hashMap.set('Bailando', 'Enrique Iglesias');
    hashMap.set('Dura', 'Daddy Yankee');
    hashMap.set('Lean On', 'Major Lazer');
    hashMap.set('Hello', 'Adele');
    hashMap.set('All About That Bass', 'Meghan Trainor');
    hashMap.set('This Is What You Came For', 'Calvin Harris ');
  });

  it('gets values', () => {
    hashMap.set('test', 'one');
    expect(hashMap.get('test')).toBe('one');
    expect(hashMap.get('Dura')).toBe('Daddy Yankee');
    expect(hashMap.get('Bailando')).toBe('Enrique Iglesias');
  });

  it('should increase load factor and size', () => {
    expect(hashMap.getLoadFactor()).toBe(4);
    expect(hashMap.size).toBe(8);
    hashMap.set('test', 'one');
    expect(hashMap.getLoadFactor()).toBe(9 / 2);
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
});

describe('#rehash', () => {
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
