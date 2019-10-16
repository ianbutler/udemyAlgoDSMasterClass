function naiveStringSearch(str, target) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    let match = true;
    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      counter++;
    }
  }

  return counter;
}

console.log(naiveStringSearch("zomwie oomg, zomg", "omg"));
