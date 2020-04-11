const fn = require('./reorder-log-files');

describe('Reorder Log Files', () => {
  it('should work', () => {
    const actual = ['6p tzwmh ige mc', 'ns 566543603829', 'ubd cujg j d yf', 'ha6 1 938 376 5', '3yx 97 666 56 5', 'd 84 34353 2249', '0 tllgmf qp znc', 's 1088746413789', 'ys0 splqqxoflgx', 'uhb rfrwt qzx r', 'u lrvmdt ykmox', 'ah4 4209164350', 'rap 7729 8 125', '4 nivgc qo z i', 'apx 814023338 8'];
    const expected = ['ubd cujg j d yf', 'u lrvmdt ykmox', '4 nivgc qo z i', 'uhb rfrwt qzx r', 'ys0 splqqxoflgx', '0 tllgmf qp znc', '6p tzwmh ige mc', 'ns 566543603829', 'ha6 1 938 376 5', '3yx 97 666 56 5', 'd 84 34353 2249', 's 1088746413789', 'ah4 4209164350', 'rap 7729 8 125', 'apx 814023338 8'];
    expect(fn(actual)).toEqual(expected);
  });

  it('should work', () => {
    const actual = ['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero'];
    const expected = ['let1 art can', 'let3 art zero', 'let2 own kit dig', 'dig1 8 1 5 1', 'dig2 3 6'];
    expect(fn(actual)).toEqual(expected);
  });
});
