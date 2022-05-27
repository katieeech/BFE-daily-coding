const arr2 = [10, 2, 2, 1, 0, 0, 10];
console.log(findSingle(arr2));

//map vs filter
let exMap = arr2.map((num) => {
  return arr2.indexOf(num) === arr2.lastIndexOf(num);
});
let exFilter = arr2.filter((num) => {
  return arr2.indexOf(num) === arr2.lastIndexOf(num);
});
let exForeach = arr2.forEach((num) => {
  return arr2.indexOf(num) === arr2.lastIndexOf(num);
});

console.log("map", exMap);
console.log("filter", exFilter);
console.log("foreach", exForeach);

let myArr = [
  { x: 100, y: 200 },
  { x: 200, y: 500 },
];
// console.log(Math.max(...myArr.map((i) => i.x)));
// console.log(Math.max(...myArr.filter((i) => i.x)));
