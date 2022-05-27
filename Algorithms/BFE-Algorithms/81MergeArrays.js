// You are given a list of sorted non-descending integer arrays, 
//write a function to merge them into one sorted non-descending array.

merge(
  [
    [1,1,1,100,1000,10000],
    [1,2,2,2,200,200,1000],
    [1000000,10000001],
    [2,3,3]
  ]
)
// [1,1,1,1,2,2,2,2,3,3,100,200,200,1000,1000,10000,1000000,10000001]

//approach1
function merge(arrList) {
  return arrList.flat().sort((a, b) => a - b)
}
//approach2
function merge(arrList) {
  if (!arrList.length) return arrList;
  return arrList.reduce((prevValue, currValue) => ([...prevValue, ...currValue])).sort((a,b) => a - b);
}



//my approach
function merge(arrList) {
    if(arrList.length === 0) return [];
    if(arrList.length === 1){
    return arrList[0].sort(function(a, b){return a-b}) }
  
    const concatArr = []
    concatArr[0]= arrList[0].concat(arrList[1])
    let i = 0;
    while(i<arrList.length-2){
    i++
    concatArr[0]= concatArr[0].concat(arrList[i+1])
    } 
    return concatArr[0].sort(function(a, b){return a-b})
  }

//flat() creates a New array with all sub-array elements concatenated into it recursively up to the specified depth.

