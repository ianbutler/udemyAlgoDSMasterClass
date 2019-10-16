function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
    if (!Array.isArray(obj[key]) && typeof obj[key] === "object") {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

let obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(stringifyNumbers(obj1));

// returns:
// {
//   num: "1",
//   test: [],
//   data: {
//     val: "4",
//     info: {
//       isRight: true,
//       random: "66"
//     }
//   }
// };
