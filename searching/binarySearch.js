function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  if (arr.length === 0) {
    return -1;
  }

  while (left <= right) {
    let midpoint = Math.floor((left + right) / 2);
    let guess = arr[midpoint];
    if (guess === target) {
      return midpoint;
    }
    if (guess < target) {
      left = midpoint + 1;
    } else {
      right = midpoint - 1;
    }
  }

  return -1;
}

// console.log(binarySearch([1], 1));
// console.log(binarySearch([], 1));
// console.log(binarySearch([1, 2], 1));
// console.log(binarySearch([1, 2], 2));
// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99
    ],
    10
  )
); // 2

console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99
    ],
    24
  )
); // -1
