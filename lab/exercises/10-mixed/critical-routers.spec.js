// npx jest lab/exercises/10-mixed/critical-routers.spec.js --watch
const critialRouters = require('./critical-routers');

describe('Critical Routers', () => {
  it('should work with daisy chain nodes', () => {
    const numRouters = 3;
    const numLinks = 3;
    const links = [
      [1, 2],
      [2, 3],
      [3, 1],
    ];
    expect(critialRouters(numRouters, numLinks, links)).toEqual([]);
  });

  it('should work with 7 nodes', () => {
    const numRouters = 7;
    const numLinks = 7;
    const links = [
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 4],
      [3, 6],
      [6, 7],
      [4, 5],
    ];
    expect(critialRouters(numRouters, numLinks, links)).toEqual([3, 4, 6]);
  });

  it('should work with 6 nodes', () => {
    const numRouters = 6;
    const numLinks = 5;
    const links = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [3, 6],
    ];
    expect(critialRouters(numRouters, numLinks, links)).toEqual([2, 3, 4]);
  });

  it('should work with 10 nodes', () => {
    const numRouters = 10;
    const numLinks = 13;
    const links = [
      [1, 2],
      [1, 3],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 6],
      [5, 6],
      [5, 7],
      [6, 7],
      [7, 8],
      [8, 9],
      [8, 10],
      [9, 10],
    ];
    expect(critialRouters(numRouters, numLinks, links)).toEqual([3, 4, 7, 8]);
  });
});
