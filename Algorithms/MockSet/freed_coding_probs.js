//#1 Reverse String Without built-in functions (method)
// 1. abcdefg → gfedcba
const reverseStr = (str) => {
  let strArr = str.split("");
  //   console.log(strArr);
  let reversedArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedArr.push(strArr.pop());
    // console.log(i);
  }
  console.log(reversedArr.join(""));
};
//거꾸로 push
reverseStr("abcdefg");
// const checkPrime = (num) => {
//   // 1
//   // num
//   if (num < 2) {return false}
//   else if(num%n)

// };

//array practice
let arr = [1, 2, 3, 4];
console.log(
  arr.reduce((acc, curr) => {
    return acc + curr;
  })
);
//no curly and return
console.log(arr.reduce((acc, curr) => acc + curr));

//Rest params
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [one, two, ...rest] = arr1;
console.log(one, two, rest);

//Third problem
let arr3 = [500, 200, 300, 400, 500, 600, 400, 500];

function getMost(arr) {
  let tallyObj = arr.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;

    return tally;
  }, {});

  let maxVal = Math.max(...Object.values(tallyObj));
  //now use .map to get the key based on values!!
  return Object.keys(tallyObj)
    .filter((key) => tallyObj[key] === maxVal)
    .join("");
}
console.log(getMost(arr3));

//Second problem. check is prime
function checkP(num) {
  if (num <= 1) {
    return false;
  }
  let i = 2;
  while (i < num) {
    if (num % i === 0) return false;
    i++;
  }
  return true;
}
console.log(checkP("prime", 7));
