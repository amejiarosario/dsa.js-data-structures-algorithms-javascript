const { isParenthesesValid } = require('./valid-parentheses');

describe('Stack: Valid Parentheses', () => {
  it('should be valid', () => {
    expect(isParenthesesValid('()')).toEqual(true);
  });

  it('should be valid with different kinds', () => {
    expect(isParenthesesValid('()[]{}')).toEqual(true);
  });

  it('should be valid with different nested kinds', () => {
    expect(isParenthesesValid('([{}])')).toEqual(true);
  });

  it('should not be valid if incomplete', () => {
    expect(isParenthesesValid('()(')).toEqual(false);
  });

  it('should not be valid if invalid character is present', () => {
    expect(isParenthesesValid('()-')).toEqual(false);
  });
});
