/**
 * Return true if an array is empty and false otherwise
 * @param {array|string|object} thing
 * @example
 *      isEmpty() // => true
 *      isEmpty([]) // => true
 *      isEmpty({}) // => true
 *      isEmpty('') // => true
 *      isEmpty([8, 9, 6]) // => false
 *      isEmpty('text') // => false
 *      isEmpty({a: 1}) // => false
 */
function isEmpty2(thing) {
  return !thing || thing.length < 1 || !Object.keys(thing).length;
}


/**
 * Return true if an array is empty and false otherwise
 * @param {array|string} thing
 * @example
 *      isEmpty() // => true
 *      isEmpty([]) // => true
 *      isEmpty('') // => true
 *      isEmpty([8, 9, 6]) // => false
 *      isEmpty('text') // => false
 */
function isEmpty(thing) {
  return !thing || thing.length < 1;
}

module.exports = isEmpty;
