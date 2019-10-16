function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item === target) {
      return i;
    }
  }
  return -1;
}
