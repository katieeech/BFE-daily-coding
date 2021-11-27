
function median(arr1, arr2) {
    let sortedArr = arr1.concat(arr2).sort((a,b) => a-b)
    // let median = ""
    if(sortedArr.length % 2 !== 0){
     while(sortedArr.length > 3){
       sortedArr.pop()
       sortedArr.shift()
     } return sortedArr[1]
    } 
   else {
       while(sortedArr.length > 4){
       sortedArr.pop()
       sortedArr.shift()
       }
   return (sortedArr[1]+sortedArr[2])/2
     }
  }
  console.log(median([1,2],[3,4,5]))
  console.log(median([1,2],[3,4]))
  