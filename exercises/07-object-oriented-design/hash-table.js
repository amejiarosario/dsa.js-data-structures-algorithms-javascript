const t = JSON.stringify;

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
    if(!bucket) { return; }

    for(let b of bucket) {
      if(t(b.key) === t(key)) {
        return b.value;
      }
    }
  }

  remove(key) {
    const bucket = this.table[this.hash(key)];
    if(!bucket) { return; }

    const index = bucket.findIndex((b) => t(b.key) === t(key));
    bucket.splice(index, 1);
  }

  hash(key) {
    return t(key).split('').reduce((sum, letter) => sum += letter.charCodeAt(), 0) % this.size;
  }
}

module.exports = HashTable;