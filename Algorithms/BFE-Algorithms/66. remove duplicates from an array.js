// Given an array containing all kinds of data, 
// please implement a function deduplicate() to remove the duplicates.
// You should modify the array in place. Order doesn't matter.
 let arr= [1,2,2,3,4,5,5]
function deduplicate(arr) {
    for(let i = arr.length-1; i >= 0; i--){
      let last = arr.pop();
      if(arr.indexOf(last) === -1){
        arr.unshift(last);
      }
    }
    return arr
  }
  deduplicate(arr)