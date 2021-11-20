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

//3) Accessing Arrays
//Access by referring to the index number:
let arr= [1,2,3,4,5]
arr[2]  // get the 2nd index 
// 3 

//4) Accessing Objects
//Access by two ways. Using a key name with a dot or bracket with quotes
let obj = { child : "anna",
            parent : "bob"}
obj.child
obj["child"]
//both returns anna


//5) console.log(0.1 + 0.2 == 0.3);
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

//6) Create such function - add(2)(5); // 7 

//using arrow-1
let add = (x) => function(y){ return x + y; };
//works 
//using arrow-2
let add = (x) => ((y) => x + y );
//works!

//7) what does this return- "i'm a lasagna hog".split("").reverse().join("");


//8)What is the below code going to return?
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
// answer is
//one
//three
//two

setTimeout(callback, 0)
//https://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful
// Invoking setTimeout with a callback, and zero as
// the second argument will schedule the callback to be run asynchronously,
// after the shortest possible delay - which will be around 10ms when the tab has 
//focus and the JavaScript thread of execution is not busy.



//
// The following values are always falsy:

// false
// 0 (zero)
// "" (empty string)
// null
// undefined
// NaN (a special Number value meaning Not-a-Number!)
// All other values are truthy, including "0" (zero in quotes), "false" (false in quotes), empty functions, empty arrays ([]), and empty objects ({}).