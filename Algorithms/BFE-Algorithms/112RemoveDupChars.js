// 112. remove duplicate characters in a string
// Given a string which, write a function to remove the duplicate characters to make sure that each character only occurs once.

// For example 'xyzabcxyzabc'
// Each character appears twice, we could make it unique as follows

// 'xyzabc'
// 'xyabcz'
// 'xabcyz'
// 'abcxyz'
// 'abxyzc'
// .....
// Above all substrings subsequences (*) contains unique characters, but you need to return the smallest one in lexicographical order( 'a' -> 'z'), which is 'abcxyz'.

// All input only contains valid lowercase alphabets only.

//Another approach:
function smallestUniqueSubstr(str) {
  let arr = str.split("");
  return [...new Set(arr)].sort((a, b) => a.localeCompare(b)).join("");
}

//A solution using hashMap
// https://github.com/kalpeshsingh/data-structure-agorithms-in-js/blob/master/112.md

//Still solving- my solution
function smallestUniqueSubstr(str) {
  let strNew = str.split("");

  for (l of strNew) {
    if (strNew.indexOf(l) === strNew.lastIndexOf(l)) {
      return strNew.join("");
    } else if (strNew.indexOf(l) !== strNew.lastIndexOf(l)) {
      strNew.splice(strNew.lastIndexOf(l), 1);
      return strNew.sort().join("");
    }
  }
}
console.log("bab");
