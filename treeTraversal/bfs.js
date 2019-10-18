//      10
//   5      8
// 12 13     15

function bfs(tree) {
  let queue = [];
  let visited = [];

  if (tree.root) {
    queue.push(tree.root);
  }
  while (queue.length) {
    let current = queue.shift();
    visited.push(current.value);

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }

  return visited;
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

console.log(bfs(tree)); // [10,5,8,12,13,15]
