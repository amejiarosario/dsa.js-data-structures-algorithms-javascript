// npx jest lab/exercises/10-mixed/critical-connections.spec.js --watch
const criticalConnections = require('./critical-connections');

describe('Critical Connections', () => {
  it('should work with 4 nodes', () => {
    const n = 4;
    const connections = [
      [0, 1],
      [1, 2],
      [2, 0],
      [1, 3],
    ];
    expect(criticalConnections(n, connections)).toEqual([
      [1, 3],
    ]);
  });

  it('should work with nodes in line (all critical)', () => {
    const n = 4;
    const connections = [
      [0, 1],
      [1, 2],
      [2, 3],
    ];
    expect(criticalConnections(n, connections)).toEqual(expect.arrayContaining([
      [0, 1],
      [1, 2],
      [2, 3],
    ]));
  });

  it('should work with nodes in daisy chain (no critical)', () => {
    const n = 4;
    const connections = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ];
    expect(criticalConnections(n, connections)).toEqual(expect.arrayContaining([]));
  });
});
