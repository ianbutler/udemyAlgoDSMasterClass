class MaxBinaryHeap {
  constructor() {
    this.values = [41,39,33,18,27,12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  
  extractMax(){
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      // trickle down;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (!swap && rightChild > element) || 
          (swap && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (!swap) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.insert(45));
// [41, 39, 33, 18, 27, 12, 55]
//   0   1   2   3   4   5  6
