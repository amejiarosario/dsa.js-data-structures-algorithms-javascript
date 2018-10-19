/* JavaScript Built-in Map Usage
// tag::snippet[]
const myMap = new Map();

// mapping values to keys
myMap.set('string', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');
const obj1 = {};
myMap.set(obj1, 'test');

// searching values by key
myMap.get(1); //↪️ bar
myMap.get('str'); //↪️ foo
myMap.get({}); //↪️ undefined
myMap.get(obj1); //↪️ test
// end::snippet[]
// */
