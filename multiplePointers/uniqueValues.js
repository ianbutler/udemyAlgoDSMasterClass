function uniqueVlaues(arr) {
  let len = arr.length;
  if (len === 0) {
    return len;
  }

  let pointerI = 0;
  let pointerJ = 1;

  while (pointerI < len && pointerJ < len) {
    if (arr[pointerI] !== arr[pointerJ]) {
      pointerI++;
      arr[pointerI] = arr[pointerJ];
    }
    pointerJ++;
  }

  return pointerI + 1;
}

const exampleArray = [1, 2, 2, 2, 3, 3, 4, 4, 5, 6];

console.log(uniqueVlaues(exampleArray)); // should return 6
