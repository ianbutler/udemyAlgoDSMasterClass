function areThereDuplicates(...args) {
  const counter = {};

  for (let key in args) {
    let value = args[key];
    if (counter[value]) {
      return true;
    }
    counter[value] = true;
  }
  return false;
} // O(n) time, O(n) space

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
