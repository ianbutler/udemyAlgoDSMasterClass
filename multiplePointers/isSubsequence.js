function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;

  if (str1.length > str2.length || !str1) {
    return false;
  }

  while (pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
      if (pointer1 >= str1.length) {
        return true;
      }
    }

    pointer2++;
  }
  return false;
} // O(n) time, O(1) space

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
