[![image](https://user-images.githubusercontent.com/418605/59557258-10742880-8fa3-11e9-84fb-4d66a9d89faa.png)](https://books.adrianmejia.com/dsajs-data-structures-algorithms-javascript/)

# Data Structures and Algorithms in JavaScript

[![CircleCI](https://img.shields.io/circleci/build/github/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/master.svg)](https://circleci.com/gh/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript) [![NPM version](https://badge.fury.io/js/dsa.js.svg)](https://badge.fury.io/js/dsa.js) [![Slack](https://dsajs-slackin.herokuapp.com/badge.svg)](https://dsajs-slackin.herokuapp.com)

> This is the coding implementations of the [DSA.js book](https://books.adrianmejia.com/dsajs-data-structures-algorithms-javascript/) and the repo for the [npm package](https://www.npmjs.com/package/dsa.js).

> In this repository, you can find classical algorithms and data structures implemented and explained in JavaScript. It can be used as a reference manual where developers can refresh specific topics before an interview or looking for ideas to solve a problem more optimally.

<!-- (Check out the Time Complexity Cheatsheet) -->


<!--
[![CircleCI](https://circleci.com/gh/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript.svg?style=svg)](https://circleci.com/gh/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript)
[![Code Style Airbnb](https://img.shields.io/badge/code%20style-Airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![ProductHunt](https://img.shields.io/badge/product%20hunt-vote-orange.svg)](https://www.producthunt.com/posts/dsa-js)
https://bundlephobia.com/result?p=dsa.js
https://img.shields.io/bundlephobia/min/dsa.js.svg - 16.7kB
https://img.shields.io/github/repo-size/amejiarosario/dsa.js.svg - 98.1 MB
-->

[![Interactive Data Structures](https://user-images.githubusercontent.com/418605/46118890-ba721180-c1d6-11e8-82bc-6a671428b422.png)](https://embed.kumu.io/85f1a4de5fb8430a10a1bf9c5118e015)


## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Features](#features)
- [What's Inside](#whats-inside)
  - [📈 Algorithms Analysis](#-algorithms-analysis)
  - [🥞 Linear Data Structures](#-linear-data-structures)
  - [🌲 Non-Linear Data Structures](#-non-linear-data-structures)
  - [⚒ Algorithms Techniques](#%E2%9A%92-algorithms-techniques)
- [FAQ](#faq)
- [Support](#support)
- [Donations](#donations)
- [License](#license)
- [Book](#book)
- [Data Structures](#data-structures)
  - [Linear Data Structures](#linear-data-structures)
  - [Non-Linear Data Structures](#non-linear-data-structures)
- [Algorithms](#algorithms)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation

You can clone the repo or install the code from NPM:

```sh
npm install dsa.js
```

and then you can import it into your programs or CLI

```js
const { LinkedList, Queue, Stack } = require('dsa.js');
```

For a full list of all the exposed data structures and algorithms [see](https://github.com/amejiarosario/dsa.js/blob/master/src/index.js).


## Features

Algorithms are an essential toolbox for every programmer.

You usually need algorithms when you have to sort data, search for a value, transform data, scale your code to many users just to name a few.
Algorithms are just the step you follow to solve a problem while data structures are where you store the data for later manipulation. Both combined create programs.

> Algorithms + Data Structures = Programs.

It's true that most programming languages and libraries provides implementations for basic data structures and algorithms.
However, to make use of data structures properly, you have to know the tradeoffs so you can choose the best tool for the job.

This material is going to teach you to:

- 🛠 Apply strategies to tackle algorithm questions. Never to get stuck again. Ace those interviews!
- ✂️ Construct efficient algorithms. Learn how to break down problems in manageable pieces.
- 🧠 Improve your problem-solving skills and become a stronger developer by understanding fundamental computer science concepts.
- 🤓 Cover essential topics, such as big O time, data structures, and must-know algorithms. Implement 10+ data structures from scratch.

## What's Inside

All the code and explanations are available on this repo. You can dig through the links and code examples from the ([src folder](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/tree/master/src)). However, the inline code examples are not expanded (because of Github's asciidoc limitations) but you can follow the path and see the implementation.

_Note: If you prefer to consume the information in a more linear fashion then the [book format](https://books.adrianmejia.com/dsajs-data-structures-algorithms-javascript/) would be more appropriate for you._

The topics are divided in 4 main categories as you can see below:

_(You can click on the ⯈ to expand the topics)_

### 📈 [Algorithms Analysis](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/part1.adoc)

<!-- - Computer Science nuggets without all the mumbo-jumbo.
- Learn how to compare algorithms using Big O notation.
- 8 examples to explain with code how to calculate time complexity. -->

<blockquote>

<details>
  <summary>
    Computer Science nuggets without all the mumbo-jumbo
  </summary>

---

### [Computer Science nuggets without all the mumbo-jumbo](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/algorithms-analysis.adoc)

#### Learn to calculate run time from code examples

![Translating lines of code to an approximate number of operations](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/raw/master/book/images/image4.png)

---

</details>

<details>
  <summary>
    Learn how to compare algorithms using Big O notation.
  </summary>

---

### [Learn how to compare algorithms using Big O notation.](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/big-o-examples.adoc#finding-duplicates-in-an-array-na%C3%AFve-approach)

#### Comparing algorithms using Big O notation

Let's say you want to find the duplicates on an array.
Using Big O notation we can compare different implementations that do exactly the same but
they take different time to complete.

- [Optimal solution using a map](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/big-o-examples.adoc#linear-example)
- [Finding duplicates in an array (naïve approach)](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/big-o-examples.adoc#quadratic-example)

---

</details>

<details>
  <summary>
    8 examples to explain with code how to calculate time complexity
  </summary>

---

[8 examples to explain with code how to calculate time complexity](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/big-o-examples.adoc#summary)

#### Most common time complexities

![image](https://user-images.githubusercontent.com/418605/59617342-2a715080-90f4-11e9-9de9-9315fb0133f9.png)

<!-- - Constant time: _O(1)_
- Logarithmic time: _O(log n)_
- Linear time: _O(n)_
- Linearithmic time: _O(n log n)_
- Quadratic time: _O(n^2^)_
- Cubic time: _O(n^3^)_
- Exponential time: _O(2^n^)_
- Factorial time: _O(n!)_ -->

#### Time complexity graph

![Most common time complexities](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/raw/master/book/images/image5.png)

---

</details>
</blockquote>

### 🥞 [Linear Data Structures](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/part2.adoc)

<!-- - Understand the ins and outs of the most common data structures.
- When to use an Array or Linked List. Know the tradeoffs.
- Build a Stack and a Queue from scratch. -->

<blockquote>

  <details>
    <summary>
      Understand the ins and outs of the most common data structures.
    </summary>

---

#### [Understand the ins and outs of the most common data structures](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/part2.adoc)


- [Arrays](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/array.adoc): Built-in in most languages so not implemented here. [Array Time complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/array.adoc#array-complexity)
    <!-- [Post](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Array). -->

- [Linked List](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/linked-list.adoc): each data node has a link to the next (and
    previous).
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/linked-lists/linked-list.js)
    |
    [Linked List Time Complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/linked-list.adoc#linked-list-complexity-vs-array-complexity)
    <!-- [Post](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Linked-Lists) -->

- [Queue](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/queue.adoc): data flows in a "first-in, first-out" (FIFO) manner.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/queues/queue.js)
    |
    [Queue Time Complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/queue.adoc#queue-complexity)
    <!-- [Post](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Queues) -->

- [Stack](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/stack.adoc): data flows in a "last-in, first-out" (LIFO) manner.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/data-structures/stacks/stack.js)
    |
    [Stack Time Complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/stack.adoc#stack-complexity)
    <!-- [Post](https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Stacks) -->

---

  </details>
  <details>
    <summary>
      When to use an Array or Linked List. Know the tradeoffs.
    </summary>

---

#### [When to use an Array or Linked List. Know the tradeoffs](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/linear-data-structures-outro.adoc)

Use Arrays when…
- You need to access data in random order fast (using an index).
- Your data is multi-dimensional (e.g., matrix, tensor).

Use Linked Lists when:
- You will access your data sequentially.
- You want to save memory and only allocate memory as you need it.
- You want constant time to remove/add from extremes of the list.

---

  </details>
  <details>
    <summary>
      Build a List, Stack and a Queue.
    </summary>

  ---

  #### [Build a List, Stack and a Queue from scratch](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/part2.adoc)

  Build any of these data structures from scratch:
  - [Linked List](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/src/data-structures/linked-lists/linked-list.js)
  - [Stack](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/src/data-structures/stacks/stack.js)
  - [Queue](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/src/data-structures/queues/queue.js)

  ---

  </details>
</blockquote>

### 🌲 [Non-Linear Data Structures](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/part3.adoc)
<!-- - Understand one of the most versatile data structure of all: Maps -->
<!-- - Know the properties of Graphs and Trees. -->
<!-- - Implement a binary search tree for fast lookups. -->

<blockquote>
  <details>
    <summary>
      Understand one of the most versatile data structure of all: Maps
    </summary>

---

#### [HashMaps](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/map.adoc)

Learn how to implement different types of Maps such as:
- [HashMap](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/map-hashmap.adoc)
- [TreeMap](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/map-treemap.adoc)

Also, [learn the difference between the different Maps implementations](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/map-hashmap-vs-treemap.adoc):

- `HashMap` is more time-efficient. A `TreeMap` is more space-efficient.
- `TreeMap` search complexity is *O(log n)*, while an optimized `HashMap` is *O(1)* on average.
- `HashMap`’s keys are in insertion order (or random depending in the implementation). `TreeMap`’s keys are always sorted.
- `TreeMap` offers some statistical data for free such as: get minimum, get maximum, median, find ranges of keys. `HashMap` doesn’t.
- `TreeMap` has a guarantee always an *O(log n)*, while `HashMap`s has an amortized time of *O(1)* but in the rare case of a rehash, it would take an *O(n)*.

---

  </details>

  <details>
    <summary>
    Know the properties of Graphs and Trees.
    </summary>

---

#### [Know the properties of Graphs and Trees](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/part3.adoc)

##### [Graphs](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/graph.adoc)

Know all the graphs properties with many images and illustrations.

![graph example with USA airports](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/raw/master/book/images/image46.png)

 **Graphs**: data **nodes** that can have a connection or **edge** to
    zero or more adjacent nodes. Unlike trees, nodes can have multiple
    parents, loops.
    [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/graphs/graph.js)
    |
    [Graph Time Complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/graph.adoc#graph-complexity)

#### [Trees](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/tree.adoc)

Learn all the different kinds of trees and its properties.

![tree data structure properties](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/raw/master/book/images/image31.jpg)

- **Trees**: data nodes has zero or more adjacent nodes a.k.a.
    children. Each node can only have one parent node otherwise is a
    graph not a tree.
    [Code](https://github.com/amejiarosario/algorithms.js/tree/master/src/data-structures/trees)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/tree.adoc)
    <!-- [Post](https://adrianmejia.com/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/) -->

    - **Binary Trees**: same as tree but only can have two children at
        most.
        [Code](https://github.com/amejiarosario/algorithms.js/tree/master/src/data-structures/trees)
        |
        [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/tree.adoc#binary-tree)
        <!-- [Post](https://adrianmejia.com/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/#Binary-Trees) -->

    - **Binary Search Trees** (BST): same as binary tree, but the
        nodes value keep this order `left < parent < right`.
        [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/trees/binary-search-tree.js)
        |
        [BST Time complexity](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/tree--binary-search-tree.adoc#tree-complexity)
        <!-- [Post](https://adrianmejia.com/blog/2018/06/11/data-structures-for-beginners-trees-binary-search-tree-tutorial/#Binary-Search-Tree-BST) -->

    - **AVL Trees**: Self-balanced BST to maximize look up time.
        [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/trees/avl-tree.js)
        |
        [AVL Tree docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/tree--avl.adoc)
        |
        [Self-balancing & tree rotations docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/tree--self-balancing-rotations.adoc)
        <!-- [Post](https://adrianmejia.com/blog/2018/07/16/self-balanced-binary-search-trees-with-avl-tree-data-structure-for-beginners/) -->

    - **Red-Black Trees**: Self-balanced BST more loose than AVL to
        maximize insertion speed.
        [Code](https://github.com/amejiarosario/algorithms.js/blob/master/src/data-structures/trees/red-black-tree.js)

---

  </details>

  <details>
    <summary>
      Implement a binary search tree for fast lookups.
    </summary>

---

#### [Implement a binary search tree for fast lookups](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/tree-binary-search-tree.adoc)

- Learn how to add/remove/update values in a tree:
![inserting node in a tree](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/raw/master/book/images/image36.png)

- [How to make a tree balanced?](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/tree-self-balancing-rotations.adoc)

From unbalanced BST to balanced BST
```
1                           2
  \                       /   \
   2        =>           1     3
    \
     3
```


---

  </details>
</blockquote>

### ⚒ [Algorithms Techniques](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/part4.adoc)

- Never get stuck solving a problem with 7 simple steps.
- Master the most popular sorting algorithms (mergesort, quicksort, insertion sort, ...)
- Learn different approaches to solve problems such as divide and conquer, dynamic programming, greedy algorithms, and backtracking.

<blockquote>
  <details>
    <summary>
      Never get stuck solving a problem with 7 simple steps
    </summary>

---

#### [Never get stuck solving a problem with 7 simple steps](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/algorithmic-toolbox.adoc)

1. Understand the problem
1. Build a simple example (no edge cases yet)
1. Brainstorm solutions (greedy algorithm, Divide and Conquer, Backtracking, brute force)
1. Test your solution on the simple example (mentally)
1. Optimize the solution
1. Write Code, yes, now you can code.
1. Test your written code

Full details [here](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/algorithmic-toolbox.adoc)

---

  </details>
  <details>
    <summary>
      Master the most popular sorting algorithms (mergesort, quicksort, insertion sort, ...)
    </summary>

---

#### [Master the most popular sorting algorithms](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/sorting-intro.adoc)

We are going to explore three basic sorting algorithms O(n2) which have low overhead:
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

and then discuss efficient sorting algorithms O(n log n) such as:
  - Merge Sort.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/sorting/merge-sort.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/merge-sort.adoc)

  - Quick sort.
    [Code](https://github.com/amejiarosario/dsa.js/blob/master/src/algorithms/sorting/quick-sort.js)
    |
    [Docs](https://github.com/amejiarosario/dsa.js/blob/master/book/chapters/quick-sort.adoc)

---

  </details>
  <details>
    <summary>
      Learn different approaches to solve problems such as divide and conquer, dynamic programming, greedy algorithms, and backtracking.
    </summary>

---

#### [Learn different approaches to solve algorithmic problems](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/algorithms-intro.adoc)

We are going to discuss the following techniques for solving algorithms problems:
- [Greedy Algorithms](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/greedy-algorithms.adoc): makes greedy choices using heuristics to find the best solution without looking back.
- [Dynamic Programming](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/dynamic-programming.adoc): a technique for speeding up recursive algorithms when there are many _overlapping subproblems_. It uses _memoization_ to avoid duplicating work.
- [Divide and Conquer](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/divide-and-conquer.adoc): _divide_ problems into smaller pieces, _conquer_ each subproblem and then _join_ the results.
- [Backtracking](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/book/chapters/backtracking.adoc): search _all (or some)_ possible paths. However, it stops and _go back_ as soon as notice the current solution is not working.
- _Brute Force_: generate all possible solutions and tries all of them. (Use it as a last resort or as the starting point to optimize it with other techniques).

---

  </details>
</blockquote>

## FAQ

<details>
    <summary>How would I apply these to my day-to-day work?</summary>
    <p>
    As a programmer, we have to solve problems every day. If you want to solve problems well, then it's good to
    know about a broad range of solutions. A lot of times, it's more efficient to learn existing resources than
    stumble upon the answer yourself. The more tools and practice you have, the better. This book helps you
    understand the tradeoffs among data structures and reason about algorithms performance.
    </p>
</details>

<details>
    <summary>Hey OP, why you created this repo/book?</summary>
    <p>
        There are not many books about Algorithms in JavaScript. This material fills the gap.
        Also, it's good practice :)
    </p>
</details>

<details>
    <summary>Is there anyone I can contact if I have questions about something in particular?
    </summary>
    <p>
    Yes, open an issue or ask questions on the slack channel.
    </p>
</details>

## Support

Reach out to me at one of the following places!

- Twitter at <a href="http://twitter.com/amejiarosario" target="_blank">`@amejiarosario`</a>
- Slack at <a href="https://dsajs-slackin.herokuapp.com" target="_blank">`dsajs.slack.com`</a>


## Donations

The best way to support this project is buying the [book](https://books.adrianmejia.com/dsajs-data-structures-algorithms-javascript/), so I can invest more time into this project and keep improving it.

## License

[![License](https://img.shields.io/:license-mit-blue.svg?style=flat-square)](https://github.com/amejiarosario/dsa.js-data-structures-and-algorithms-in-javascript/blob/master/LICENSE)
