// npx jest lab/exercises/10-mixed/critical-routers.spec.js --watch
const critialRouters = require('./critical-routers');

describe('Critical Routers', () => {
  it('should work', () => {
    const numRouters = 7;
    const numLinks = 7;
    const links = [[1, 2], [1, 3], [2, 4], [3, 4], [3, 6], [6, 7], [4, 5]];
    expect(critialRouters(numRouters, numLinks, links)).toEqual([3, 4, 6]);
  });
});
