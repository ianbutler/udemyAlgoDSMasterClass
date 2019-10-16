function capitalizeWords(arr) {
  const newArr = [];

  if (!arr.length) {
    return newArr;
  }

  newArr.push(arr[0].toUpperCase());

  return newArr.concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(["car", "taco", "banana"])); // ['Car', 'Taco', 'Banana']
