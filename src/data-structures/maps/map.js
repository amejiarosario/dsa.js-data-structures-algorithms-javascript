/* JavaScript Built-in Map Usage
// tag::snippet[]
const myMap = new Map();

// mapping values to keys
myMap.set('string', 'foo'); // string as key
myMap.set(1, 'bar'); // number as key
myMap.set({}, 'baz'); // object as key
const obj1 = {};
myMap.set(obj1, 'test');

// searching values by key
myMap.get(1); //↪️ bar
myMap.get('str'); //↪️ foo
myMap.get({}); //↪️ undefined
myMap.get(obj1); //↪️ test
// end::snippet[]
// */
