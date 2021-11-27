
largestDiff([-1, 2,3,10, 9])
// 11,  obviously Math.abs(-1 - 10) is the largest

largestDiff([])
// 0

largestDiff([1])
// 0

//My solution
function largestDiff(arr) {
    // your code here
  
    let max= Math.max(...arr)
    let min= Math.min(...arr)
    // let diff= 0
    // for(let i=0; i < arr.length ; i++){
    //   diff = Math.abs(max - arr[i])
    // }
    let diff = Math.abs(max-min)
  
    if(arr.length <= 1) {return 0}
  return diff
  }