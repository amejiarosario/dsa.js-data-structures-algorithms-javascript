const {
  binarySearchRecursive,
  binarySearchIterative,
} = require("./02-binary-search");

const binarySearchImplementations = [
  binarySearchRecursive,
  binarySearchIterative,
];

binarySearchImplementations.forEach((binarySearchImpl) => {
  describe(binarySearchImpl.name, () => {
    let array;

    beforeEach(() => {
      array = [7, 9, 13, 23];
    });

    it("should find a middle element", () => {
      expect(binarySearchImpl(array, 9)).toEqual(1);
    });

    it("should find an first element", () => {
      expect(binarySearchImpl(array, 7)).toEqual(0);
    });

    it("should find the last element", () => {
      expect(binarySearchImpl(array, 23)).toEqual(3);
    });

    it("should not find an bigger element", () => {
      expect(binarySearchImpl(array, 9000)).toEqual(-1);
    });

    it("should find a smaller element", () => {
      expect(binarySearchImpl(array, -9)).toEqual(-1);
    });
  });
});
