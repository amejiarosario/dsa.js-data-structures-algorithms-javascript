const expect = require('chai').expect;
const Graph = require('./graph').Graph;
const Node = require('./graph').Node;
const getBstSequences = require('./bst-sequence').getSequences;
const weave = require('./bst-sequence').weave;

describe('weave', function () {
  it('should weave given no array', function () {
    expect(weave(1)).to.eql([[1]]);
    expect(weave('a', [[]], [[]])).to.eql([['a']]);
    expect(weave()).to.eql([[]]);
  });

  it('should append to prefix arrays2 if arrays1 is empty', function () {
    expect(weave([2, 1], [[]], [[3]])).to.eql([
      [2, 1, 3]
    ]);
  });

  it('should append to prefix arrays1 if arrays2 is empty', function () {
    expect(weave([2, 3], [[1, 4]])).to.eql([
      [2, 3, 1, 4]
    ]);
  });

  /**
   * weave(2, 1, 3) = weave([2,1], 3) + weave([2,3], 1)
   */
  it('should weave given two arrays', function () {
    const prefix = 2;
    const arrays1 = [[1]];
    const arrays2 = [[3]];
    const weaved = [
      [2, 1, 3],
      [2, 3, 1]
    ];
    expect(weave(prefix, arrays1, arrays2)).to.eql(weaved);
  });

  /**
   * weave(5, [3,2], [8]) = weave([5,3], [2], [8]) + weave([5, 8], [3,2], [])
   */
  it('should cross array 1 with array 2 keeping the same order', function () {
    const prefix = 5;
    const arrays1 = [[3, 2]];
    const arrays2 = [[8]];
    const weaved = [
      [5, 3, 2, 8],
      [5, 3, 8, 2],
      [5, 8, 3, 2],
    ];
    expect(weave(prefix, arrays1, arrays2)).to.eql(weaved);
  });

  /**
   * weave([5,3,2], 1, 8) + weave([5,3,8])
   */
  it('should cross array 1 with array 2 keeping the same order', function () {
    const prefix = 5;
    const arrays1 = [[3, 2, 1]];
    const arrays2 = [[8]];
    const weaved = [
      [5, 3, 2, 1, 8],
      [5, 3, 2, 8, 1],
      [5, 3, 8, 2, 1],
      [5, 8, 3, 2, 1],
    ];
    expect(weave(prefix, arrays1, arrays2)).to.eql(weaved);
  });

  it('should cross array 1 with array 2 keeping the same order', function () {
    const prefix = 5;
    const arrays1 = [[3, 2, 1]];
    const arrays2 = [[8, 9]];
    const weaved = [
      [5, 3, 2, 1, 8, 9],
      [5, 3, 2, 8, 1, 9],
      [5, 3, 2, 8, 9, 1],
      [5, 3, 8, 2, 1, 9],
      [5, 3, 8, 2, 9, 1],
      [5, 3, 8, 9, 2, 1],
      [5, 8, 3, 2, 1, 9],
      [5, 8, 3, 2, 9, 1],
      [5, 8, 3, 9, 2, 1],
      [5, 8, 9, 3, 2, 1],
    ];
    expect(weave(prefix, arrays1, arrays2)).to.eql(weaved);
  });

  it('should cross array 2 with array 1 keeping the same order', function () {
    const prefix = 5;
    const arrays1 = [[3]];
    const arrays2 = [[8, 9]];
    const weaved = [
      [5, 3, 8, 9],
      [5, 8, 3, 9],
      [5, 8, 9, 3],
    ];
    expect(weave(prefix, arrays1, arrays2)).to.eql(weaved);
  });

  it('should cross array 1 with array 2 keeping the same order', function () {
    const prefix = 5;
    const arrays1 = [[3, 2]];
    const arrays2 = [[8, 6]];
    const weaved = [
      [5, 3, 2, 8, 6],
      [5, 3, 8, 2, 6],
      [5, 8, 3, 2, 6],
      [5, 8, 3, 6, 2],
      [5, 8, 6, 3, 2],
    ];
    expect(weave(prefix, arrays1, arrays2)).to.eql(weaved);
  });
});

xdescribe('Graph: BST sequence', function () {
  let graph;

  beforeEach(function () {
    graph = new Graph();
  });

  it('works 1', function () {
    const root = graph.add(2, 1);
    graph.add(2, 3);
    expect(getBstSequences(root)).to.eql([[2, 1, 3], [2, 3, 1]]);
  });

  it('works 2', function () {
    const root = graph.add(1, 2);
    graph.add(2, 3);
    expect(getBstSequences(root)).to.eql([[1, 2, 3]]);
  });

  /**
   *              3
   *         1        4
   *           2
   */
  it('works', function () {
    const root = graph.add(3, 1);
    graph.add(3, 4);
    const one = graph.getNode(1);
    one.right = new Node(2);

    expect(getBstSequences(root)).to.eql([
      [3, 1, 2, 4],
      [3, 4, 1, 2]
    ]);
  });

  /**
   *                       5
   *                 3             8
   *             2       4      6     9
   *
   */
  it('works for complete tree of height 3', function () {
    const root = graph.add(5, 3);
    graph.add(5, 8);

    graph.add(3, 2);
    graph.add(3, 4);

    graph.add(8, 6);
    graph.add(8, 9);

    expect(getBstSequences(root)).to.eql([
      [5, 3, 2, 4, 8, 6, 9],
      [5, 3, 2, 8, 4, 6, 9],
      [5, 3, 2, 8, 6, 4, 9],
      [5, 3, 2, 8, 6, 9, 4],
      [5, 3, 8, 2, 4, 6, 9],
      [5, 3, 8, 2, 6, 9, 4],
      [5, 3, 8, 6, 2, 9, 4],
      [5, 3, 8, 6, 9, 2, 4],
      [5, 8, 3, 2, 4, 6, 9],
      [5, 8, 3, 6, 9, 2, 4],
      [5, 8, 6, 3, 9, 2, 4],
      [5, 8, 6, 9, 3, 2, 4]
    ]);
  });
});