const expect = require('chai').expect;
const MultiStack = require('./multi-stack');

describe('Stacks: Multistack', function () {
  var multiStack;

  beforeEach(function () {
    multiStack = new MultiStack();
  });

  it('should add 300 hundred element to each stack and retrive the data', function () {
    for(let stackIndex = 0; stackIndex < 3; stackIndex++) {
      for(let data = 0; data < 300; data++) {
        multiStack.push(stackIndex, data);
      }
    }

    for(let data = 299; data > -1; data--) {
      for(let stackIndex = 0; stackIndex < 3; stackIndex++) {
        var actual = multiStack.pop(stackIndex);
        expect(actual).to.equal(data, `Expected stack #${stackIndex} data to be ${data} but was ${actual}`);
      }
    }
  });
});