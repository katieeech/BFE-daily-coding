// Given an array of integers, all integers appear twice except one integer, could you quickly target it ?

const arr = [10, 2, 2, 1, 0, 0, 10];
findSingle(arr); // 1

function findSingle(arr) {
  return arr.filter((num) => {
    return arr.indexOf(num) === arr.lastIndexOf(num);
  })[0]; //need [0] at the end because it returns an array and we want the element from it
}
//*filter() returns a new array with the elements that pass the test.

//My solution
function findSingle(arr) {
  let single = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      single = arr[i];
    }
  }
  return single;
}
const arr2 = [10, 2, 2, 1, 0, 0, 10];
console.log(findSingle(arr2));

//map vs filter
let exMap = arr2.map((num) => {
  return arr2.indexOf(num) === arr2.lastIndexOf(num);
});
let exFilter = arr2.filter((num) => {
  return arr2.indexOf(num) === arr2.lastIndexOf(num);
});

console.log("map", exMap);
console.log("filter", exFilter);

let myArr = [
  { x: 100, y: 200 },
  { x: 200, y: 500 },
];
// console.log(Math.max(...myArr.map((i) => i.x)));
// console.log(Math.max(...myArr.filter((i) => i.x)));
