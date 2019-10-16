function sameFrequency(num1, num2) {
  let counter = {};

  let str1 = num1.toString();
  let str2 = num2.toString();

  if (num1.length !== num2.length) return false;

  for (let char of str1) {
    counter[char] ? (counter[char] += 1) : (counter[char] = 1);
  }

  for (let char of str2) {
    if (!counter[char]) {
      return false;
    }
    counter[char]--;
  }

  return true;
} // O(n) time, O(n) space

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
