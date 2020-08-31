const { RecentCounter } = require('./recent-counter');

describe('Queue: Recent Counter', () => {
  it('should count requests within the window', () => {
    const counter = new RecentCounter(3000);
    expect(counter.request(100)).toEqual(1); // 1
    expect(counter.request(1000)).toEqual(2); // 2
    expect(counter.request(3000)).toEqual(3); // 3
    expect(counter.request(3100)).toEqual(4); // 4
    expect(counter.request(3101)).toEqual(4); // 4 (request at time 100 is out of the 3000 window).
  });

  it('should NOT count requests out of the window', () => {
    const counter = new RecentCounter(10);
    expect(counter.request(100)).toEqual(1);
    expect(counter.request(1000)).toEqual(1);
    expect(counter.request(3000)).toEqual(1);
    expect(counter.request(3100)).toEqual(1);
    expect(counter.request(3101)).toEqual(2);
  });
});
