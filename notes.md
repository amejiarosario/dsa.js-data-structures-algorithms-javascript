# Roadmap
- [ ] TreeSet should be able to store objects. Does it need a comparator? on BST in case node's values are not just numbers but also objects.
- [ ] Refactor LinkedList.remove(). It's doing to much maybe it can be refactor in terms of removeByPosition and indexOf
- [ ] Writeup on balancing trees
- [ ] More algorithm and datastructres! Greedy, Divide and Conquer etc.
- [ ] Algorithms visualizations like https://bost.ocks.org/mike/algorithms/

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
