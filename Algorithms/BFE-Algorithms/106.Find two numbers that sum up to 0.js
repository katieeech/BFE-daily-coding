function findTwo(arr) {
    let result = [];
    for(let i=0;i<arr.length;i++){
      // if(arr.indexOf( 0-arr[i])>=0 ) {
        if(arr.indexOf( 0-arr[i])>=0 ) {
        result.push(i,arr.indexOf(0-arr[i]))
        return result
      }
    }
    return null;
  }