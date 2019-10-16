function sumZero(arr) {
  let index1 = 0;
  let index2 = arr.length - 1;

  while (index1 < index2) {
    let item1 = arr[index1];
    let item2 = arr[index2];
    let sum = item1 + item2;
    if (sum === 0) {
      return [item1, item2];
    } else if (sum < 0) {
      index1++;
    } else {
      index2--;
    }
  }

  return false;
}

const sortedArr = [-4, -3, -2, -1, 0, 1, 2, 5];
console.log(sumZero(sortedArr)); // return first pair that equals 0... so for this example[-2,2]
