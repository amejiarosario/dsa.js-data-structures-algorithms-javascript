## Algorithms
1. Searching algorithms (WIP)
2. Sorting algorithms (WIP)

# Roadmap
- [ ] Refactor LinkedList.remove(). It's doing to much maybe it can be refactor in terms of removeByPosition and indexOf
- [ ] Use comparators on BST in case node's values are not just numbers but also objects.
- [ ] Writeup on balancing trees
- [ ] More algorithm and datastructres! Greedy, Divide and Conquer etc.
- [ ] Algorithms visualizations like https://bost.ocks.org/mike/algorithms/

Compare content with:
- [ ]	https://adrianmejia.com/blog/2018/04/28/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Stacks
- [ ]	https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c
- [ ]	https://leetcode.com/explore/learn/
- [ ]	https://github.com/trekhleb/javascript-algorithms
- [ ]	https://www.khanacademy.org/computing/computer-science/algorithms
- [ ]	Compare with: Data Structures and Algorithms.pdf by Lydia Hallie
- [ ]	Cracking code interviews
- [ ]	Grokking Algorithms
- [ ]	CS Distilled
- [ ]	Create poster like: http://bigocheatsheet.com/, http://bigoref.com/,
- [ ]	https://introcs.cs.princeton.edu/java/11cheatsheet/



# Troubleshooting
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
