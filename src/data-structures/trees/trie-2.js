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
   * Return true if found the word to be removed, otherwise false.
   * @param {string} word - The word to remove
   * @returns {boolean}
   */
  remove(word) {
    return this.removeHelper(word);
  }

  /**
   * Remove word from trie, return true if found, otherwise false.
   * @param {string} word - The word to remove.
   * @param {Trie} parent - The parent node.
   * @param {number} index - The index.
   * @param {number} meta.stop - Keeps track of the last letter that won't be removed.
   * @returns {boolean}
   */
  removeHelper(word, parent = this, index = 0, meta = { stop: 0 }) {
    if (index === word.length) {
      parent.isWord = false;
      if (Object.keys(parent.children)) { meta.stop = index; }
      return true;
    }
    const child = parent.children[word.charAt(index)];
    if (!child) { return false; }
    if (parent.isWord) { meta.stop = index; }
    const found = this.removeHelper(word, child, index + 1, meta);
    // deletes all the nodes beyond `meta.stop`.
    if (found && index >= meta.stop) {
      delete parent.children[word.charAt(index)];
    }
    return found;
  }

  /**
   * Retun last node that matches word or prefix or false if not found.
   * @param {string} word - Word to search.
   * @param {boolean} options.partial - Whether or not match partial matches.
   * @return {Trie|false}
   */
  searchNode(word) {
    let curr = this;

    for (const char of word) {
      if (!curr.children[char]) { return false; }
      curr = curr.children[char];
    }

    return curr;
  }

  /**
   * Search for complete word (by default) or partial if flag is set.
   * @param {string} word - Word to search.
   * @param {boolean} options.partial - Whether or not match partial matches.
   * @return {boolean}
   */
  search(word, { partial } = {}) {
    const curr = this.searchNode(word);
    if (!curr) { return false; }
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
   */
  getAllWords(prefix = '', node = this) {
    let words = [];

    if (!node) { return words; }
    if (node.isWord) {
      words.push(prefix);
    }

    for (const char of Object.keys(node.children)) {
      const newWords = this.getAllWords(`${prefix}${char}`, node.children[char]);
      words = words.concat(newWords);
    }

    return words;
  }

  /**
   * Return a list of words matching the prefix
   * @param {*} prefix - The prefix to match.
   * @returns {string[]}
   */
  autocomplete(prefix = '') {
    const curr = this.searchNode(prefix);
    return this.getAllWords(prefix, curr);
  }
}

// Aliases
Trie.prototype.add = Trie.prototype.insert;

module.exports = Trie;
