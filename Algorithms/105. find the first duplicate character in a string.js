firstDuplicate('abca')
// 'a'
firstDuplicate('abcdefe')
// 'e'
firstDuplicate('abcdef')
// null


 function firstDuplicate(str) {
    if(str.length <= 1){return null}
  
    let firstDup = ""
   for(letter of str){
    if(str.indexOf(letter) !== str.lastIndexOf(letter)){
      firstDup = letter
      return firstDup
    } else return null
  }
  }
  
  
  console.log(firstDuplicate("abcdefe"))
  // console.log(firstDuplicate('abca'))
