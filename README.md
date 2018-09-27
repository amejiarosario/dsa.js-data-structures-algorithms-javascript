

# Data Structures and Algorithms in JavaScript

This repository covers the implementation of the most important algorithms and data structures.

This goes alone with [these posts series](https://adrianmejia.com/tags/tutorial-algorithms/) that explain each implementation in details.

[![Interactive Data Structures](https://user-images.githubusercontent.com/418605/46118890-ba721180-c1d6-11e8-82bc-6a671428b422.png)](https://embed.kumu.io/85f1a4de5fb8430a10a1bf9c5118e015)

## Data Structures
We are covering the following data structures.

### Linear Data Structures
1. **Arrays**: Built-in in most languages so not implemented here. [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/arrays/array.js) | [Details](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Array).
2. **Linked Lists**: each data node has a link to the next (and previous). [Code](https://github.com/amejiarosario/algorithms.js/tree/master/src/data-structures/linked-lists) | [Details](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Linked-Lists).
3. **Queue**: data flows in a "first-in, first-out" (FIFO) manner. [Code](https://github.com/amejiarosario/algorithms.js/tree/master/src/data-structures/queues) | [Details](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Queues).
4. **Stacks**:  data flows in a "last-in, first-out" (LIFO) manner. [Code](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Stacks) | [Details](https://github.com/amejiarosario/algorithms.js/tree/master/src/data-structures/stacks).

### Non-Linear Data Structures
1. **Trees**: data nodes has zero or more adjacent nodes a.k.a. children. Each node can only have one parent node otherwise is a graph not a tree. [Code](https://github.com/amejiarosario/algorithms.js/tree/master/src/data-structures/trees) | [Details](https://adrianmejia.com/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/)
	1. **Binary Trees**: same as tree but only can have two children at most. [Details](https://adrianmejia.com/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/#Binary-Trees)
	1. **Binary Search Trees** (BST): same as binary tree, but the nodes value keep this order `left < parent < rigth`. [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/trees/binary-search-tree.js) | [Details](https://adrianmejia.com/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/#Binary-Search-Tree-BST)
	2. **AVL Trees**: Self-balanced BST to maximize look up time. [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/trees/avl-tree.js) | [Details](https://adrianmejia.com/blog/2018/07/16/self-balanced-binary-search-trees-with-avl-tree-data-structure-for-beginners/)
	3. **Red-Black Trees**:  Self-balanced BST more loose than AVL to maximize insertion speed. [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/trees/red-black-tree.js) | Details
2. **Maps**: key-value store.
	1. **Hash Maps**: implements map using a hash function. [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/hash-maps/hashmap.js) | [Details](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#HashMaps)
	2. **Tree Maps**: implement map using a self-balanced BST. WIP
3. **Graphs**: data *nodes* that can have a connection or *edge* to zero or more adjacent nodes. Unlike trees, nodes can have multiple parents, loops. [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/graphs/graph.js) | [Details](https://adrianmejia.com/blog/2018/05/14/data-structures-for-beginners-graphs-time-complexity-tutorial/)

## Algorithms
1. Searching algorithms (WIP)
2. Sorting algorithms (WIP)

# Notes
Some notes while working on this project

## Tests
Running one test without changing file
```sh
jest -t '#findNodeAndParent'
```

Running one test changing code
```js
it.only('should return with an element and its parent', () => {
// ...
});
```

##  English Words

Getting some (200k+) English words are useful for testing and benchmarking.

```sh
cat /usr/share/dict/words > benchmarks/dict.txt
```

## ESLint

 Disabling ESLints
```js
somthing(t) =>  1  // eslint-disable-line no-unused-vars
// eslint-disable-next-line no-use-before-define
const  thing  =  new Thing();

/*eslint-disable */
//suppress all warnings between comments
alert('foo');
/*eslint-enable */

/* eslint-disable no-alert, no-console */
alert('foo');
console.log('bar');
/* eslint-enable no-alert */
```
