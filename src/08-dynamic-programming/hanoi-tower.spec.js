const expect = require('chai').expect;
const hanoiTower = require('./hanoi-tower');

describe('hanoiTower', function() {
  it('0', function () {
    expect(hanoiTower(0)).to.equal(0);
  });

  it('1', function () {
    expect(hanoiTower(1)).to.equal(2);
  });
});