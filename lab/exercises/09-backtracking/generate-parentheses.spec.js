const generateParenthesis = require('./generate-parentheses');

describe('Generate Parenthesis', () => {
  it('should work with 0', () => {
    expect(generateParenthesis(1)).toEqual(expect.arrayContaining([
    ]));
  });

  it('should work with 1', () => {
    expect(generateParenthesis(1)).toEqual(expect.arrayContaining([
      '()',
    ]));
  });

  it('should work with 2', () => {
    expect(generateParenthesis(2)).toEqual(expect.arrayContaining([
      '(())',
      '()()',
    ]));
  });

  it('should work with 3', () => {
    expect(generateParenthesis(3)).toEqual(expect.arrayContaining(
      ['((()))', '(()())', '(())()', '()(())', '()()()'],
    ));
  });
});
