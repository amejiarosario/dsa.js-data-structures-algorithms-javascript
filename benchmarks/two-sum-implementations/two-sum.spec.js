/*eslint-disable */
// npx jest benchmarks/two-sum-implementations/two-sum.spec.js --watch --collectCoverage
const implementations = [
  { name: 1, fn: require('./01-two-sum') },
  { name: '1a', fn: require('./01a-two-sum') },
  { name: 2, fn: require('./02-two-sum') },
  { name: '2a', fn: require('./02a-two-sum') },
  { name: 3, fn: require('./03-two-sum') },
  { name: 4, fn: require('./04-two-sum') },
];

implementations.forEach(({name, fn}) => {
  describe(`Two Sum: ${name}`, () => {
    xit('should work', () => {
      expect(fn([1, 2, 3].concat(Array(1e2 - 3).fill(7)), 4)).toEqual([0, 2]);
    });

    it('should work on worst case', () => {
      const size = 100;
      expect(fn([...Array(size).fill(2), 3, 3 * size * 10], 3 * size * 10 + 3)).toEqual([size, size + 1]);
    });
  });
});
