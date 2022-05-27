firstDuplicate("abca");
// 'a'
firstDuplicate("abcdefe");
// 'e'
firstDuplicate("abcdef");
// null
//using filter
function firstDu(str) {
  return str.split("").filter((letter) => {
    return str.indexOf(letter) !== str.lastIndexOf(letter);
  });
}
console.log(firstDu("abcdefe"), "first");

//This is Correct. (moved line 18 to line 30. Also line 11 not needed)
function firstDuplicate(str) {
  for (letter of str) {
    if (str.indexOf(letter) !== str.lastIndexOf(letter)) {
      return letter;
    }
  }
}

console.log(firstDuplicate("abcdefe"), "sec");
// console.log(firstDuplicate('abca'))
