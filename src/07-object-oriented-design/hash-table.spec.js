const expect = require('chai').expect;
const HashTable = require('./hash-table');

describe('HashTable', function() {
  it('should set and element and get it', function () {
    const hash = new HashTable();
    hash.set('adrian', 100);
    expect(hash.get('adrian')).to.equal(100);
  });

  it('should set an array as key and get it', function () {
    const hash = new HashTable();
    hash.set([10, 293], 'bomb');
    expect(hash.get([10,   293])).to.equal('bomb');
  });

  it('should take size as parameter', function () {
    const hash = new HashTable(1);
    hash.set(1, 'test');
    expect(hash.get(1)).to.equal('test');
  });

  it('should avoid collisions', function () {
    const hash = new HashTable(1);
    hash.set('en', 'test');
    hash.set('sp', 'prueba');
    expect(hash.get('en')).to.equal('test');
    expect(hash.get('sp')).to.equal('prueba');
  });
});