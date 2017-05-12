const expect = require('chai').expect;
const HashTable = require('./hash-table');

describe('HashTable', function() {
  it('string key', function () {
    const hash = new HashTable();
    hash.set('adrian', 100);
    expect(hash.get('adrian')).to.equal(100);
  });

  it('array key', function () {
    const hash = new HashTable();
    hash.set([10, 293], 'bomb');
    expect(hash.get([10,   293])).to.equal('bomb');
  });

  it('object key', function () {
    const hash = new HashTable();
    hash.set({a: 1}, 'bomb');
    expect(hash.get({a:  1})).to.equal('bomb');
  });


  it('number key', function () {
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