class HashTable {
  constructor(size = 100) {
    this.size = +size;
    this.table = new Array(size);
  }

  set(key, value) {
    this.table[this.hash(key)] = value;
  }

  get(key) {
    return this.table[this.hash(key)];
  }

  hash(key, max) {
    return JSON.stringify(key).split('').reduce((sum, letter) => sum += letter.charCodeAt(), 0) % this.size;
  }
}

module.exports = HashTable;