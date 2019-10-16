function factorial(num) {
  if (num < 2) return num;
  return num * factorial(num - 1);
}

console.log(factorial(3)); // should return 6
console.log(factorial(4)); // should return 24
