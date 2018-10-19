const Stack = require('./stack');

function sort(stack) {
  if(stack.size() === 0) { return; }
  if(stack.size() === 1) { return stack; }

  const sorted = new Stack();

  while(!stack.isEmpty()) {
    var value = stack.pop();

    while(!sorted.isEmpty() && sorted.peek() > value) {
      stack.push(sorted.pop());
    }

    sorted.push(value);
  }

  return sorted;
}

module.exports.sort = sort;