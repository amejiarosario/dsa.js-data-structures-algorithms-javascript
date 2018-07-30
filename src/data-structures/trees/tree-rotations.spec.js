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

  beforeEach(() => {
    n1 = new TreeNode(1);
    n2 = new TreeNode(2);
    n3 = new TreeNode(3);
    n4 = new TreeNode(4);
  });

  describe('#leftRotation (LL Rotation)', () => {
    it('basic LL rotation', () => {
      /*
       *  1*                                         2*
       *   \                                       /  \
       *    2     ---| left-rotation(1) |-->      1    3
       *     \
       *      3
       */
      n1.right = n2;
      n2.right = n3;

      const newParent = leftRotation(n1);
      expect(newParent.value).toBe(2);
      expect(n1.toValues()).toMatchObject({
        value: 1, left: undefined, right: undefined, parent: 2,
      });
      expect(n2.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
      expect(n3.toValues()).toMatchObject({
        value: 3, left: undefined, right: undefined, parent: 2,
      });
    });

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
      expect(n1.toValues()).toMatchObject({
        value: 1, left: undefined, right: 3, parent: null,
      });
      expect(n2.toValues()).toMatchObject({
        value: 2, left: undefined, right: undefined, parent: 3,
      });
      expect(n3.toValues()).toMatchObject({
        value: 3, left: 2, right: 4, parent: 1,
      });
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

      expect(n1.toValues()).toMatchObject({
        value: 1, left: undefined, right: undefined, parent: 2,
      });
      expect(n2.toValues()).toMatchObject({
        value: 2, left: 1, right: undefined, parent: 3,
      });
      expect(n3.toValues()).toMatchObject({
        value: 3, left: 2, right: undefined, parent: 4,
      });
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
      expect(n1.toValues()).toMatchObject({
        value: 1, left: undefined, right: undefined, parent: 2,
      });
      expect(n2.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: 4,
      });
      expect(n3.toValues()).toMatchObject({
        value: 3, left: undefined, right: undefined, parent: 2,
      });
      expect(n4.toValues()).toMatchObject({
        value: 4, left: 2, right: undefined, parent: null,
      });
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
      expect(n2.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
    });

    it('should last two', () => {
      //  1
      //   \
      //     3*
      //   /
      //  2
      n1.right = n3;
      n3.left = n2;

      const newParent = rightRotation(n3);

      expect(newParent).toBe(n2);
      expect(n1.toValues()).toMatchObject({
        value: 1, left: undefined, right: 2, parent: null,
      });
      expect(n2.toValues()).toMatchObject({
        value: 2, left: undefined, right: 3, parent: 1,
      });
      expect(n3.toValues()).toMatchObject({
        value: 3, left: undefined, right: undefined, parent: 2,
      });
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
      expect(n1.toValues()).toMatchObject({
        value: 1, left: undefined, right: undefined, parent: 2,
      });
      expect(n2.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: 4,
      });
      expect(n3.toValues()).toMatchObject({
        value: 3, left: undefined, right: undefined, parent: 2,
      });
    });
  });

  describe('#rightLeftRotation (RL Rotation)', () => {
    it('should do a RR rotation and then a LL rotation', () => {
      //  1*
      //   \
      //     3
      //   /
      //  2
      n1.right = n3;
      n3.left = n2;

      const newParent = rightLeftRotation(n1);
      expect(newParent).toBe(n2);
      expect(n1.toValues()).toMatchObject({
        value: 1, left: undefined, right: undefined, parent: 2,
      });
      expect(n2.toValues()).toMatchObject({
        value: 2, left: 1, right: 3, parent: null,
      });
      expect(n3.toValues()).toMatchObject({
        value: 3, left: undefined, right: undefined, parent: 2,
      });
    });
  });
});
