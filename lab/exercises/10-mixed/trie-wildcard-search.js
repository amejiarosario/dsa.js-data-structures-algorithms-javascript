/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
class WordDictionary {
  children = {};
  isWord = false;
  /**
   * Initialize your data structure here.
   */
  constructor() {
  }

  /**
   * Adds a word into the data structure.
   * @param {string} word
   * @return {void}
   */
  addWord (word) {
    let curr = this;

    for (let char of word) {
      if (!curr.children[char]) curr.children[char] = new WordDictionary();
      curr = curr.children[char];
    }

    curr.isWord = true;
  }

  /**
   * Returns if the word is in the data structure.
   * A word could contain the dot character '.' to represent any one letter.
   * @param {string} word
   * @return {boolean}
   */
  search (word, curr = this, index = 0) {
    if (index > word.length) return true; // e.g. final '.'
    for (let [i, char] of [...word.slice(index)].entries()) {
      if (char === '.') {
        for (let child of Object.keys(curr.children)) {
          if (this.search(word, curr.children[child], i + 1)) return true;
        }
      }
      else if (!curr || !curr.children[char]) return false;
      curr = curr.children[char];
    }

    return curr.isWord;
  }
}

module.exports = WordDictionary;
