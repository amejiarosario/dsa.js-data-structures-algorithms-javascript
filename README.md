

# Tests

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

Combine all words
```sh
cat src/data-structures/hash-maps/data/* > src/data-structures/hash-maps/data/00-combined.txt
```
## ESLint

```js
somthing(t) => 1 // eslint-disable-line no-unused-vars

// eslint-disable-next-line no-use-before-define
const thing = new Thing();

/*eslint-disable */
//suppress all warnings between comments
alert('foo');
/*eslint-enable */


/* eslint-disable no-alert, no-console */
alert('foo');
console.log('bar');
/* eslint-enable no-alert */
```
