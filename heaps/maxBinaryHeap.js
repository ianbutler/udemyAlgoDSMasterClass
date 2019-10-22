class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);
    return this.bubbleUp();
  }

  bubbleUp() {
    if (this.values.length <= 1) {
      return;
    }
    let idx = this.values.length - 1;
    while (idx > 0) {
      const element = this.values[idx];
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
    return this.values;
  }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));
// [41, 39, 33, 18, 27, 12, 55]
//   0   1   2   3   4   5   6
