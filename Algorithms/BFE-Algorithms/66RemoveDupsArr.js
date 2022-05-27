// Given an array containing all kinds of data,
// please implement a function deduplicate() to remove the duplicates (just keep one of them)
// You should modify the array in place. Order doesn't matter.
let arr = [1, 2, 2, 3, 4, 5, 5];
function deduplicate1(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let last = arr.pop();
    if (arr.indexOf(last) === -1) {
      arr.unshift(last);
    }
  }
  return arr;
}
deduplicate1(arr);

//Below is a diff problem- it removes the duplicates completely.
function deduplicate(arr) {
  // console.log(arr);
  let uniq = arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num));

  // for (let i = arr.length - 1; i >= 0; i--) {
  // let last = arr.pop();
  // if (arr.indexOf(last) === -1) {
  //   arr.unshift(last);
  // }
}

console.log(deduplicate(arr));
