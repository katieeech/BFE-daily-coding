// 1)
let foo = 108 + '20';
// '10820'

//In JavaScript, the + operator is used for both numeric addition and string concatenation. 
//When you "add" a number to a string, it converts your number to a string and concatenates both together.

"hi" + 1 
// "hi1"

//2)
// NaN is a Numeric value that is NOT a number in JS.
1 + NaN 
// NaN

//3) console.log(0.1 + 0.2 == 0.3);
//false as 0.1 + 0.2 returns 0.30000000000000004
// JavaScript Numbers are Always 64-bit Floating Point
//When converting Number values to strings in JavaScript,
// the default is to use just enough digits to uniquely distinguish the Number value.
// This means that when a number is displayed as “0.1”, that does not mean it is exactly 0.1,
// just that it is closer to 0.1 than any other Number value is, so displaying just “0.1” tells you
// it is this unique Number value.

//Solution
(0.2 * 10 + 0.1 * 10) / 10;
// 0.3

// Diff between parseInt and parseFloat
// parseInt is for converting a non integer number to an int and parseFloat 
// is for converting a non float (with out a decimal) to a float (with a decimal).

//4) Create such function - add(2)(5); // 7 


