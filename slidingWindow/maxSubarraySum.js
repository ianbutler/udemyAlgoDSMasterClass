function maxSubarraySum(arr, val) {
  if (arr.length < val) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < val; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = val; i < arr.length; i++) {
    tempSum = tempSum - arr[i - val] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
} // O(n) time, O(1) space

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
