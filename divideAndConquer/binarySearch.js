function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29], 15));
// returns 8... becuase htat is the index where 15 is at
