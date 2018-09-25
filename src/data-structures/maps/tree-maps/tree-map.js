const Tree = require('../trees/red-black-tree');

class TreeMap {
  constructor() {
    this.tree = new Tree();
  }

  set(key, value) {

  }
  get(key) {}
  has(key) {}
  delete(key) {}
}

// Aliases
TreeMap.prototype.containsKey = TreeMap.prototype.has;

module.exports = TreeMap;
