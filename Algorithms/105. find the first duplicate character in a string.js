firstDuplicate('abca')
// 'a'
firstDuplicate('abcdefe')
// 'e'
firstDuplicate('abcdef')
// null


//Below is NOT Correct. Bc of line 18.
 function firstDuplicate(str) {
    if(str.length <= 1){return null}
  
    let firstDup = ""
   for(letter of str){
    if(str.indexOf(letter) !== str.lastIndexOf(letter)){
      firstDup = letter
      return firstDup
    } else return null  //causing error
  }
  }
  
//This is Correct. (moved line 18 to line 30. Also line 11 not needed)
  function firstDuplicate(str) {
   for(letter of str){
    if(str.indexOf(letter) !== str.lastIndexOf(letter)){
      return letter
    } 
  } return null
  }
  
  console.log(firstDuplicate("abcdefe"))
  // console.log(firstDuplicate('abca'))
