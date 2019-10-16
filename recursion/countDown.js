function countDown(num) {
  if (num <= 0) {
    // base case is num <= 0
    console.log("All done!");
    return;
  }
  console.log(num);
  countDown(num - 1);
}

countDown(5); // should log every number
