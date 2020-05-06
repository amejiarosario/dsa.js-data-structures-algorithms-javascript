// npx jest lab/exercises/10-mixed/integer-to-words.spec.js --watch

const numberToWords = require('./integer-to-words');

describe('Integer to English Words', () => {
  it('should convert 0', () => {
    expect(numberToWords(0)).toEqual('Zero');
  });
});
