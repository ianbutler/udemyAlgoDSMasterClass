class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // O(1)
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  // O(n)
  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    newTail.next = null;

    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // O(1)
  shift() {
    if (!this.head) {
      return undefined;
    }

    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }
    return oldHead;
  }

  // O(1)
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  // O(n)
  get(num) {
    let counter = 0;

    if (num < 0 || num >= this.length) {
      return undefined;
    }

    let current = this.head;

    while (counter !== num) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // updates an existing node
  // O(n)
  set(index, val) {
    let current = this.get(index);

    if (!current) {
      return false;
    }

    current.val = val;
    return true;
  }

  // inserts a new node
  // O(n)
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (this.length === index) {
      this.push(val);
      return true;
    }

    let prevNode = this.get(index - 1);
    let newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;

    return true;
  }

  // remove node from index
  // O(n)
  remove(index) {
    if (index >= this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.shift();
    }
    if (index === this.length - 1) {
      return !!this.pop();
    }

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next,
      prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

let list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.reverse();

console.log("tail", list.tail);
console.log("head", list.head);

module.exports = {
  Node,
  SinglyLinkedList
};
