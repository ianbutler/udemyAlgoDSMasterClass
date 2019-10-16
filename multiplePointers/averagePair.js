function averagePair(arr, target) {
  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  if (arr.length < 2) {
    return false;
  }

  while (pointer1 < pointer2) {
    let avgPair = (arr[pointer1] + arr[pointer2]) / 2;
    if (avgPair === target) {
      return true;
    } else if (avgPair < target) {
      pointer1++;
    } else {
      pointer2--;
    }
  }
  return false;
} // O(n) time, O(1) space

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
