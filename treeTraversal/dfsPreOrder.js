function dfs(tree) {
  let list = [];

  function helper(node) {
    list.push(node);
    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right);
    }
  }

  helper(tree.root);

  return list;
}

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

//      10
//     /   \
//    5      8
//   / \      \
//  12 13     15

// build tree
let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.left.left = new Node(12);
tree.root.left.right = new Node(13);
tree.root.right = new Node(8);
tree.root.right.right = new Node(15);

console.log(dfs(tree));
// [10,5,12,13,8,15]
