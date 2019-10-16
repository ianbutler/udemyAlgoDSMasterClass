class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // O(1)
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // O(1)
  pop() {
    if (!this.length) {
      return undefined;
    }
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  // O(1)
  shift() {
    if (!this.length) {
      return undefined;
    }

    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      shiftedNode.next = null;
      this.head.prev = null;
    }

    this.length--;
    return shiftedNode;
  }

  // O(1)
  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    let midpoint = this.length / 2;
    if (index >= this.length || index < 0) {
      return false;
    }

    if (index <= midpoint) {
      let node = this.head;
      for (let i = 1; i <= index; i++) {
        node = node.next;
      }
      return node;
    } else {
      let node = this.tail;
      let count = this.length - 1;
      while (count !== index) {
        node = node.prev;
        count--;
      }
      return node;
    }
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      return !!this.push(val);
    } else if (index === 0) {
      return !!this.unshift(val);
    }

    let newNode = new Node(val);

    let prev = this.get(index - 1);
    let next = prev.next;

    prev.next = newNode;
    newNode.prev = prev;

    next.prev = newNode;
    newNode.next = next;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.shift();
    } else if (index === this.length - 1) {
      return !!this.pop();
    }

    let current = this.get(index);

    let prev = current.prev;
    let next = current.next;

    prev.next = next;
    next.prev = prev;

    current.next = null;
    current.prev = null;

    this.length--;
    return current;
  }

  reverse() {
    let midpoint = this.length / 2;
    let counter = 0;
    let start = this.head;
    let end = this.tail;
    while (counter < midpoint) {
      let temp = start.value;
      start.value = end.value;
      end.value = temp;
      start = start.next;
      end = end.prev;
      counter++;
    }

    return true;
  }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

list.reverse();

console.log(list.head);
