class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;

    return ++this.size;
  }

  pop() {
    if (!this.size) {
      return null;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.size--;

    return oldHead.value;
  }
}
