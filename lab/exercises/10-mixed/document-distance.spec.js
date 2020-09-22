const { documentDistance } = require('./document-distance');

describe('documentDistance', () => {
  it('should work with different files', () => {
    const file1 = 'This is a cat.';
    const file2 = 'This is a dog.';
    expect(documentDistance(file1, file2)).toBeCloseTo(0.722);
  });

  it('should work with different files', () => {
    const file1 = 'This is a cat.';
    const file2 = 'Occaecat irure enim sint cupidatat id cillum cupidatat ipsum officia ea reprehenderit eiusmod voluptate. Est in laboris esse anim tempor sit in labore eiusmod consectetur aliqua. Quis nulla sunt incididunt magna velit in reprehenderit officia ut esse. Duis proident aute sint laborum consectetur eu reprehenderit amet et esse esse deserunt.';
    expect(documentDistance(file1, file2)).toBeCloseTo(1.57);
  });

  it('should work with equal files', () => {
    const file1 = 'This is a cat.';
    expect(documentDistance(file1, file1)).toEqual(0);
  });
});
