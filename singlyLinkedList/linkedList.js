class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;

    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);

    let temp = this.head;
    this.head = newNode;
    this.head.next = temp;
    this.length++;
    if (this.length === 1) {
      this.tail = this.head;
    }

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count = 0;
    let node = this.head;
    while (count < index) {
      node = node.next;
      count++;
    }
    return node;
  }

  insert(index, val) {
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    if (index > this.length) return undefined;

    let node = this.get(index - 1);
    let newNode = new Node(val);
    const temp = node.next;
    node.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length) {
      return this.pop();
    }

    let prevNode = this.get(index - 1);
    prevNode.next = prevNode.next.next;
    this.length--;
    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

const a = new LinkedList();
a.push(34);
a.push(21);
a.push(45);
a.push(75);
a.reverse();

console.log(a);
