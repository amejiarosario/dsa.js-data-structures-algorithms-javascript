// tag::snippet[]
/**
 * TreeNode - each node can have zero or more children
 */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }
}
// end::snippet[]

module.exports = TreeNode;
