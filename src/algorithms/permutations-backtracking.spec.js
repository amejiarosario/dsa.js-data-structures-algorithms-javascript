const permutations = require('./permutations-backtracking.js');

describe('permute', () => {
  it('should work with nothing', () => {
    expect(permutations()).toEqual([]);
  });

  it('should solve one letter word', () => {
    expect(permutations('a')).toEqual(['a']);
  });

  it('should solve two letter word', () => {
    expect(permutations('ab')).toEqual(['ab', 'ba']);
  });

  it('should solve another two letter word', () => {
    expect(permutations('op')).toEqual(['op', 'po']);
  });

  it('should work with numbers too', () => {
    expect(permutations([1, 2, 3])).toEqual([
      '123',
      '132',
      '213',
      '231',
      '321',
      '312',
    ]);
  });

  it('should work with art', () => {
    expect(permutations('art')).toEqual(['art', 'atr', 'rat', 'rta', 'tra', 'tar']);
  });
});
