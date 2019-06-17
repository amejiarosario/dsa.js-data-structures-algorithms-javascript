# Semantic Versioning

This project is using semantic versioning which means that versions has tree numbers:

> Major.Minor.Patch, e.g. 1.3.7

and the meaning the the following:

- Major: breaking (remove functionality or change API)
- Minor: Features (new functionality, adding new topics)
- Patch: Fixes (bug fixes, typos, etc.)

# Generating Changelog

We use these three sections in changelog: new features, bug fixes, breaking changes.

List of all subjects (first lines in commit message) since last release:

```sh
git log <last tag> HEAD --pretty=format:%s

# example
git log 1.1.0..HEAD --pretty=format:%s

git log 1.2.0..HEAD --pretty=format:"- %s [commit](https://github.com/amejiarosario/dsa.js/commit/%H)" --grep "BREAKING CHANGE:"
git log 1.2.0..HEAD --pretty=format:"- %s [commit](https://github.com/amejiarosario/dsa.js/commit/%H)" --grep "^feat.*:"
git log 1.2.0..HEAD --pretty=format:"- %s [commit](https://github.com/amejiarosario/dsa.js/commit/%H)" --grep "^fix.*:"
```

New features in this release

```sh
git log <last release> HEAD --grep feat
```

# Generate TOC

Install
```
npm install -g doctoc
```

Add to *.md:
```
<!-- START doctoc -->
<!-- END doctoc -->
```

Run:
```
doctoc README.md
```


# Roadmap
- [x] PDF: callouts and emojis are not showing correctly
- [x] Writeup on balancing trees
- [ ] `BinaryTree` implementation on its own. So far, we only have BST.
- [ ] TreeSet should be able to store objects. Does it need a comparator? on BST in case node's values are not just numbers but also objects.
- [ ] Refactor LinkedList.remove(). It's doing to much maybe it can be refactor in terms of removeByPosition and indexOf
- [ ] More algorithm and datastructres! Greedy, Divide and Conquer etc.
- [ ] Algorithms visualizations like https://bost.ocks.org/mike/algorithms/
- [ ] sorting algorithms needs a comparator. So, it can sort objects as well. Replace `Array.sort` for `mergesort` in `src/algorithms/knapsack-fractional.js`

# Watcher

Install fswatch http://emcrisostomo.github.io/fswatch/usage.html
```sh
# Watch for changes
brew install fswatch
```

Watch for changes in *.js and *.adoc
```sh
fswatch /Users/admejiar/Code/algorithmsJS/src/**/*.js /Users/admejiar/Code/algorithmsJS/**/*.adoc | xargs -n1 -I{} make pdf
```

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

