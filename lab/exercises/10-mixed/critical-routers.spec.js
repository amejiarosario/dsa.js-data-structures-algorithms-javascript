// npx jest lab/exercises/10-mixed/critical-routers.spec.js --watch
const critialRouters = require('./critical-routers');

describe('Critical Routers', () => {
  it('should work', () => {
    const numRouters = 7;
    const numLinks = 7;
    const links = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]];
    expect(critialRouters(numRouters, numLinks, links)).toEqual([2, 3, 5]);
  });
});
