const TreeNode = require('./tree-node');
const {
  leftRotation,
  rightRotation,
  leftRightRotation,
  rightLeftRotation,
} = require('./tree-rotations');

describe('Tree rotations', () => {
  let n1;
  let n2;
  let n3;
  let n4;
  let n5;

  beforeEach(() => {
    n1 = new TreeNode(1);
    n2 = new TreeNode(2);
    n3 = new TreeNode(3);
    n4 = new TreeNode(4);
  });

  describe('#leftRotation (LL Rotation)', () => {
    it('should rotate left with root (LL Rotation)', () => {
      // 1
      //  \
      //   2*
      //    \
      //     3
      //      \
      //       4
      n1.right = n2;
      n2.right = n3;
      n3.right = n4;

      const newParent = leftRotation(n2);

      expect(newParent).toBe(n3);
      expect(n3.left).toBe(n2);
      expect(n3.right).toBe(n4);
      expect(n3.parent).toBe(n1);
    });

    it('should rotate left with root', () => {
      // 1*
      //  \
      //   2
      //    \
      //     3
      //      \
      //       4
      n1.right = n2;
      n2.right = n3;
      n3.right = n4;

      const newParent = leftRotation(n1);

      expect(newParent).toBe(n2);
      expect(n2.left).toBe(n1);
      expect(n2.right).toBe(n3);
      expect(n2.parent).toBe(null);
    });

    it('should rotate last two', () => {
      //        4
      //      /
      //    3
      //  /
      // 1*
      //  \
      //   2
      n4.left = n3;
      n3.left = n1;
      n1.right = n2;

      const newParent = leftRotation(n1);
      expect(newParent).toBe(n2);

      expect(n3.left.value).toBe(2);
      expect(n2.left.value).toBe(1);
      expect(n1.left).toBe(undefined);
    });
  });

  describe('#rightRotation (RR Rotation)', () => {
    it('should rotate single trees', () => {
      //           4
      //         /
      //       3*
      //     /
      //    2
      //  /
      // 1
      n4.left = n3;
      n3.left = n2;
      n2.left = n1;

      const newParent = rightRotation(n3);

      expect(newParent).toBe(n2);
      expect(n2.left).toBe(n1);
      expect(n2.right).toBe(n3);
      expect(n2.parent).toBe(n4);
      expect(n3.parent).toBe(n2);
      expect(n4.left).toBe(n2);
    });

    it('should right rotate at the top', () => {
      //       3*
      //     /
      //    2
      //  /
      // 1
      n3.left = n2;
      n2.left = n1;

      const newParent = rightRotation(n3);

      expect(newParent).toBe(n2);
    });
  });

  describe('#leftRightRotation (LR Rotation)', () => {
    it('should do LL rotation and RR rotation', () => {
      //        4
      //      /
      //    3*
      //  /
      // 1
      //  \
      //   2
      n4.left = n3;
      n3.left = n1;
      n1.right = n2;

      const newParent = leftRightRotation(n3);

      expect(newParent).toBe(n2);
      expect(n2.left).toBe(n1);
      expect(n2.right).toBe(n3);
      expect(n2.parent).toBe(n4);
      expect(n4.left).toBe(n2);
    });
  });
});
