topK([1,10,8,9,10,2,3,4,8,8,6], 4)
// [10, 10, 9, 8]

// Given an unsorted array of integers which might have duplicates, 
// return the top k integers in non-ascending order.

//My solution
function topK(arr, k) {
    return arr.sort((a,b)=> b-a).slice(0,k)
  }
