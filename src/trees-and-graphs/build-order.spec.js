const expect = require('chai').expect;
const Graph = require('./graph').Graph;
const getBuildOrder = require('./build-order');

describe('Graph: build order', function () {

  it('should work where a node links to a node that cannot immediately follow it', function () {
    const projects = ['a', 'b', 'c', 'f'];
    const dependencies = [['f', 'c'], ['f', 'a'], ['f', 'b'], ['c', 'a'], ['b', 'a']];
    expect(getBuildOrder(projects, dependencies).join('')).to.match(/^f(?=.*c)(?=.*b).*a$/);
    // https://regex101.com/r/xI9qT0/6
    // http://www.rubular.com/r/yf9y5NEi99
  });

  it('should find the right order', function () {
    const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
    const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
    expect(getBuildOrder(projects, dependencies).join()).to.equal('e,f,b,a,d,c');
  });

  it('should find the right order 2', function () {
    const projects = ['a', 'b', 'c', 'd'];
    const dependencies = [['a', 'b'], ['c', 'd']];
    expect(getBuildOrder(projects, dependencies).join()).to.equal('a,b,c,d');
  });

  it('should work with complex graph', function () {
    const projects = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const dependencies = [['f', 'c'], ['f', 'b'], ['f', 'a'], ['c', 'a'], ['b', 'a'], ['a', 'e'], ['b', 'e'], ['d', 'g']];
    expect(getBuildOrder(projects, dependencies).join()).to.equal('f,c,b,a');
  });
});