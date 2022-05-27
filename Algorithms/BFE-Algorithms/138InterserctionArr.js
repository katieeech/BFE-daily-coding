let arr1 = [0, 1, 2, 3, 4];
let arr2 = [0, 5, 6, 7, 4];

function intCheck(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num));
}
console.log(intCheck(arr1, arr2));

//Longer approach
function intersect(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let result = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1]);
      p1 += 1;
      p2 += 1;
    } else {
      if (arr1[p1] < arr2[p2]) {
        p1 += 1;
      } else {
        p2 += 1;
      }
    }
  }

  return result;
}
