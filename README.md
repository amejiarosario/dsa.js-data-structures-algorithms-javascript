

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
