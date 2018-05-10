const expect = require('chai').expect;
const parenthesis = require('./parenthesis');

describe('parenthesis', function() {
  it('empty', function () {
    expect(parenthesis()).to.include.members([]);
  });

  it('1', function () {
    expect(parenthesis(1)).to.include.members(['()']);
  });

  it('2', function () {
    expect(parenthesis(2)).to.include.members(['()()', '(())']);
  });

  it('3', function () {
    expect(parenthesis(3)).to.include.members(['()()()', '()(())', '(())()', '(()())', '((()))']);
  });

  it('4', function () {
    expect(parenthesis(4)).to.include.members(['()()()()', '()()(())', '()(())()', '(())()()',
      '(()()())', '(()(()))', '((())())', '((()()))', '(((())))', '((()))()', '()((()))'
    ]);
  });
});