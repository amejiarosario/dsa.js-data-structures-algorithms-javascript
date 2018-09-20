

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
