// Given an array of integers, find two number that sums up to 0,
// return their indices.
// There might be multiple pairs, any of them would do.
// If not found, return null

findTwo([1, 2, 3, -1]);
// [0,3]

findTwo([1, 2, 3, -1, -2, 0]);
// [0,3] or [1,4] or [5, 5]

findTwo([1, 2, 3, 4]);
// null

function findTwo(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(0 - arr[i]) >= 0) {
      result.push(i, arr.indexOf(0 - arr[i]));
      //we're pushing 'i' bc we want to return their indices
      return result;
    }
  }
  return null;
}
