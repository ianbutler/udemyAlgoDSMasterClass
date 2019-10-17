class Queue {
  constructor() {
    this.queue = [];
    this.length = 0;
  }

  // terrible O(n)
  dequeue() {
    return this.queue.shift();
  }

  // O(1)
  enqueue(val) {
    return this.queue.push(val);
  }
}
