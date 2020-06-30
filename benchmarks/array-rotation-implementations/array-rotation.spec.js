/*eslint-disable */
// npx jest benchmarks/two-sum-implementations/two-sum.spec.js --watch --collectCoverage
const implementations = [
  { name: 1, fn: require('./01-array-rotation') },
  { name: '1a', fn: require('./01a-array-rotation') },
  { name: 2, fn: require('./02-array-rotation') },
];

implementations.forEach(({name, fn}) => {
  describe(`Two Sum: ${name}`, () => {
    it('should work on worst case', () => {
      const rots = 1000;
      const array = [1, 2, 3];
      expect(fn(array, rots)).toEqual([2,3,1]);
    });
  });
});
