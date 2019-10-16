function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!lookup[char]) {
      return false;
    }
    lookup[char]--;
  }
  return true;
}

console.log(validAnagram("aba", "baa"));
