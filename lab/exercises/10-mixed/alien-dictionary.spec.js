// npx jest lab/exercises/10-mixed/alien-dictionary.spec.js --watch
const alienOrder = require('./alien-dictionary');

describe('Alien Dictionary', () => {
  it('should work', () => {
    const words = ['wrt', 'wrtkj', 'wrtkjd'];
    expect(Array.from(alienOrder(words))).toEqual(expect.arrayContaining(Array.from('djkrtw')));
  });

  it('should work', () => {
    const words = [
      'wrt',
      'wrf',
      'er',
      'ett',
      'rftt',
    ];
    expect(alienOrder(words)).toEqual('wertf');
  });

  it('should work', () => {
    const words = ['aac', 'aabb', 'aaba'];
    expect(alienOrder(words)).toEqual('cba');
  });

  it('should work', () => {
    const words = ['ab', 'cd', 'ef', 'f', 'x', 'xb', 'xc', 'zd', 'ze'];
    expect((alienOrder(words))).toEqual('abcdefxz');
  });

  it('should work', () => {
    const words = ['a', 'b', 'ca', 'cc'];
    expect((alienOrder(words))).toEqual('abc');
  });

  it('should detect loops', () => {
    const words = ['z', 'x', 'z'];
    expect((alienOrder(words))).toEqual('');
  });

  it('should detect loops', () => {
    const words = ['a', 'b', 'c', 'cc', 'ca'];
    expect((alienOrder(words))).toEqual('');
  });

  it('detects length issues (prefixes are first)', () => {
    const words = ['ab', 'a'];
    expect((alienOrder(words))).toEqual('');
  });

  it('should work with one word and letter', () => {
    const words = ['a'];
    expect((alienOrder(words))).toEqual('a');
  });

  it('should work with one word', () => {
    const words = ['abc'];
    expect(Array.from(alienOrder(words))).toEqual(expect.arrayContaining(Array.from('abc')));
  });
});
