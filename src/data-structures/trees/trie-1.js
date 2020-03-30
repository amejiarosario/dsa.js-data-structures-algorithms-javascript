class Trie {
  constructor(val) {
    this.val = val;
    this.children = {};
    this.isWord = false;
  }

  /**
   * Insert word into trie and mark last element as such.
   * @param {string} word
   * @return {undefined}
   */
  insert(word) {
    let curr = this;

    for (const char of word) {
      curr.children[char] = curr.children[char] || new Trie(char);
      curr = curr.children[char];
    }

    curr.isWord = true;
  }

  /**
   * Search for complete word (by default) or partial if flag is set.
   * @param {string} word - Word to search.
   * @param {boolean} options.partial - Whether or not match partial matches.
   * @return {boolean}
   */
  search(word, { partial } = {}) {
    let curr = this;

    for (const char of word) {
      if (!curr.children[char]) { return false; }
      curr = curr.children[char];
    }

    return partial ? true : curr.isWord;
  }

  /**
   * Return true if any word on the trie starts with the given prefix
   * @param {string} prefix - Partial word to search.
   * @return {boolean}
   */
  startsWith(prefix) {
    return this.search(prefix, { partial: true });
  }

  /**
   * Returns all the words from the current `node`.
   * Uses backtracking.
   *
   * @param {string} prefix - The prefix to append to each word.
   * @param {string} node - Current node to start backtracking.
   * @param {string[]} words - Accumulated words.
   * @param {string} string - Current string.
   */
  getAllWords(prefix = '', node = this, words = [], string = '') {
    if (node.isWord) {
      words.push(`${prefix}${string}`);
    }

    for (const char of Object.keys(node.children)) {
      this.getAllWords(prefix, node.children[char], words, `${string}${char}`);
    }

    return words;
  }

  /**
   * Return true if found the word to be removed, otherwise false.
   * Iterative approach
   * @param {string} word - The word to remove
   * @returns {boolean}
   */
  remove(word) {
    const stack = [];
    let curr = this;

    for (const char of word) {
      if (!curr.children[char]) { return false; }
      stack.push(curr);
      curr = curr.children[char];
    }

    if (!curr.isWord) { return false; }
    let node = stack.pop();

    do {
      node.children = {};
      node = stack.pop();
    } while (node && !node.isWord);

    return true;
  }

  /**
   * Return true if found the word to be removed, otherwise false.
   * recursive approach
   * @param {string} word - The word to remove
   * @returns {boolean}
   */
  remove2(word, i = 0, parent = this) {
    if (i === word.length - 1) {
      return true;
    }
    const child = parent.children[word.charAt(i)];
    if (!child) return false;

    const found = this.remove(word, i + 1, child);

    if (found) {
      delete parent.children[word.charAt(i)];
    }
    return true;
  }
}

// Aliases
Trie.prototype.add = Trie.prototype.insert;

module.exports = Trie;
