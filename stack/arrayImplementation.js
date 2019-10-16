class Stack {
  constructor() {
    this.list = [];
  }

  push(val) {
    return this.list.push(val);
  }
  pop() {
    return this.list.pop();
  }
}

let start = performance.now();
let stackArr = new StackArray();

for (let i = 0; i < 100000; i++) {
  stackArr.push(i);
}
for (let i = 0; i < 100000; i++) {
  stackArr.pop();
}

let end = performance.now();

console.log("performance", (start - end) / 1000);
