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


//approach
  function merge(arrList) {
    return arrList.flat().sort((a, b) => a - b)
  }
//approach
  function merge(arrList) {
    if (!arrList.length) return arrList;
    return arrList.reduce((prevValue, currValue) => ([...prevValue, ...currValue])).sort((a,b) => a - b);
  }
  //
  function merge(arrList) {
  return arrList.flat(arrList.length).sort((a,b) => a - b);
}