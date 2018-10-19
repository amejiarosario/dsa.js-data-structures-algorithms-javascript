const expect = require('chai').expect;
const hanoiTower = require('./hanoi-tower');

describe('hanoiTower', function() {
  it('0', function () {
    expect(hanoiTower(0)).to.equal(0);
  });

  it('1', function () {
    expect(hanoiTower(1)).to.equal(2);
  });

  it('2', function () {
    expect(hanoiTower(2)).to.equal(8);
  });

  it('3', function () {
    expect(hanoiTower(3)).to.equal(26);
  });

  it('4', function () {
    expect(hanoiTower(4)).to.equal(80);
  });

  it('5', function () {
    expect(hanoiTower(5)).to.equal(242);
  });

  it('6', function () {
    expect(hanoiTower(6)).to.equal(728);
  });

  it('7', function () {
    expect(hanoiTower(7)).to.equal(2186);
  });
});