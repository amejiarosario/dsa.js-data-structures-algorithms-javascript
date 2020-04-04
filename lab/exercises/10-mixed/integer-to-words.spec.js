const numberToWords = require('./integer-to-words');

describe('Integer to English Words', () => {
  it('should convert 0', () => {
    expect(numberToWords(0)).toEqual('Zero');
  });
});
