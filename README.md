# Data Structures and Algorithms in JavaScript

![CircleCI](https://img.shields.io/circleci/build/github/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/master.svg) [![NPM version](https://badge.fury.io/js/dsa.js.svg)](https://badge.fury.io/js/dsa.js) [![Slack](https://dsajs-slackin.herokuapp.com/badge.svg)](https://dsajs-slackin.herokuapp.com)


<!--
[![CircleCI](https://circleci.com/gh/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript.svg?style=svg)](https://circleci.com/gh/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript)
[![Code Style Airbnb](https://img.shields.io/badge/code%20style-Airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![ProductHunt](https://img.shields.io/badge/product%20hunt-vote-orange.svg)](https://www.producthunt.com/posts/dsa-js)
https://bundlephobia.com/result?p=dsa.js
https://img.shields.io/bundlephobia/min/dsa.js.svg - 16.7kB
https://img.shields.io/github/repo-size/amejiarosario/dsa.js.svg - 98.1 MB
-->

This repository covers the implementation of the classical algorithms and data structures in JavaScript.

## Usage

You can clone the repo or install the code from NPM:

```sh
npm install dsa.js
```

and then you can import it into your programs or CLI

```js
const { LinkedList, Queue, Stack } = require('dsa.js');
```

For a full list of all the exposed data structures and algorithms [see](https://github.com/amejiarosario/dsa.js/blob/master/src/index.js).

## Book

You can check out the [dsa.js book](https://books.adrianmejia.com) that goes deeper into each topic and provide additional illustrations and explanations.

- Algorithmic toolbox to avoid getting stuck while coding.
- Explains data structures similarities and differences.
- Algorithm analysis fundamentals (Big O notation, Time/Space complexity) and examples.
- Time/space complexity cheatsheet.

<a href="https://books.adrianmejia.com"><img src="https://user-images.githubusercontent.com/418605/55248546-60ebad80-5220-11e9-8cb5-85923f44e196.png" height="400px" alt="dsajs algorithms javascript book"></a>

<!--
WARNING: Although you can find the [book text on this repo](https://github.com/amejiarosario/dsa.js/blob/master/book/book.adoc), there are some things that doesn't work well with Github's Asciidoc unfortunately. For instance rendering Graphviz diagrams, internal link references, embedding code into docs and so on. For better reading experience and nicer presentation you can get the [PDF format here](https://books.adrianmejia.com).
-->

## Data Structures

We are covering the following data structures.

[![Interactive Data Structures](https://user-images.githubusercontent.com/418605/46118890-ba721180-c1d6-11e8-82bc-6a671428b422.png)](https://embed.kumu.io/85f1a4de5fb8430a10a1bf9c5118e015)

### Linear Data Structures

1. **Arrays**: Built-in in most languages so not implemented here. [Array Time complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/array.adoc#array-complexity)
    <!-- [Post](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Array). -->

2. **Linked Lists**: each data node has a link to the next (and
    previous).
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/linked-lists/linked-list.js)
    |
    [Linked List Time Complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/linked-list.adoc#linked-list-complexity-vs-array-complexity)
    <!-- [Post](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Linked-Lists) -->

3. **Queue**: data flows in a "first-in, first-out" (FIFO) manner.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/queues/queue.js)
    |
    [Queue Time Complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/queue.adoc#queue-complexity)
    <!-- [Post](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Queues) -->

4. **Stacks**: data flows in a "last-in, first-out" (LIFO) manner.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/stacks/stack.js)
    |
    [Stack Time Complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/stack.adoc#stack-complexity)
    <!-- [Post](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Stacks) -->

### Non-Linear Data Structures

1. **Trees**: data nodes has zero or more adjacent nodes a.k.a.
    children. Each node can only have one parent node otherwise is a
    graph not a tree.
    [Code](https://github.com/amejiarosario/algorithms.js/tree/master/src/data-structures/trees)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/tree.adoc)
    <!-- [Post](https://adrianmejia.com/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/) -->

    1. **Binary Trees**: same as tree but only can have two children at
        most.
        [Code](https://github.com/amejiarosario/algorithms.js/tree/master/src/data-structures/trees)
        |
        [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/tree.adoc#binary-tree)
        <!-- [Post](https://adrianmejia.com/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/#Binary-Trees) -->

    2. **Binary Search Trees** (BST): same as binary tree, but the
        nodes value keep this order `left < parent < right`.
        [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/trees/binary-search-tree.js)
        |
        [BST Time complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/tree--binary-search-tree.adoc#tree-complexity)
        <!-- [Post](https://adrianmejia.com/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/#Binary-Search-Tree-BST) -->

    3. **AVL Trees**: Self-balanced BST to maximize look up time.
        [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/trees/avl-tree.js)
        |
        [AVL Tree docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/tree--avl.adoc)
        |
        [Self-balancing & tree rotations docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/tree--self-balancing-rotations.adoc)
        <!-- [Post](https://adrianmejia.com/blog/2018/07/16/self-balanced-binary-search-trees-with-avl-tree-data-structure-for-beginners/) -->

    4. **Red-Black Trees**: Self-balanced BST more loose than AVL to
        maximize insertion speed.
        [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/trees/red-black-tree.js)

2. **Maps**: key-value store.

    1. **Hash Maps**: implements map using a hash function.
        [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/maps/hash-maps/hash-map.js)
        |
        [HashMap time complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/map-hashmap.adoc#hashmap-time-complexity)
        <!-- [Docs](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#HashMaps) -->
        <!-- [Post](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#HashMaps) -->

    2. **Tree Maps**: implement map using a self-balanced BST.
        [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/maps/tree-maps/tree-map.js)
        |
        [TreeMap docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/map-treemap.adoc)
        |
        [TreeMap time complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/map-hashmap-vs-treemap.adoc#treemap-time-complexity-vs-hashmap)

3. **Graphs**: data **nodes** that can have a connection or **edge** to
    zero or more adjacent nodes. Unlike trees, nodes can have multiple
    parents, loops.
    [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/graphs/graph.js)
    |
    [Graph Time Complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/graph.adoc#graph-complexity)
    <!-- [Post](https://adrianmejia.com/blog/2018/05/14/data-structures-for-beginners-graphs-time-complexity-tutorial/) -->

## Algorithms

- Sorting algorithms

  - Bubble Sort.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/sorting/bubble-sort.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/bubble-sort.adoc)

  - Insertion Sort.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/sorting/insertion-sort.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/insertion-sort.adoc)

  - Selection Sort.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/sorting/selection-sort.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/selection-sort.adoc)

  - Merge Sort.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/sorting/merge-sort.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/merge-sort.adoc)

  - Quick sort.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/sorting/quick-sort.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/quick-sort.adoc)

- Greedy Algorithms

  - Fractional Knapsack Problem.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/knapsack-fractional.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/greedy-algorithms--knapsack-problem.adoc)

- Divide and Conquer

  - Merge Sort.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/sorting/merge-sort.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/merge-sort.adoc)

  - Fibonacci Numbers.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/fibonacci-recursive.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/divide-and-conquer--fibonacci.adoc)

- Dynamic Programming

  - Fibonacci with memoization.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/fibanacci-dynamic-programming.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/dynamic-programming--knapsack-problem.adoc)

- Backtracking algorithms

  - Word permutations.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/permutations-backtracking.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/backtracking.adoc)
