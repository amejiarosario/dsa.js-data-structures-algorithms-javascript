class HashTable {
  constructor(size = 100) {
    this.size = +size;
    this.table = new Array(size);
  }

  set(key, value) {
    if(!this.table[this.hash(key)]) {
      this.table[this.hash(key)] = [];
    }
    this.table[this.hash(key)].push({key, value});
  }

  get(key) {
    const bucket = this.table[this.hash(key)];

    if(bucket) {
      for(let b of bucket) {
        if(JSON.stringify(b.key) === JSON.stringify(key)) {
          return b.value;
        }
      }
    }
  }

  hash(key, max) {
    return JSON.stringify(key).split('').reduce((sum, letter) => sum += letter.charCodeAt(), 0) % this.size;
  }
}

module.exports = HashTable;