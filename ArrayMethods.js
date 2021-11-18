//Basic 'Array' Methods
// 1) https://gist.github.com/joyrexus/7366429
// 2) https://www.shortcutfoo.com/app/dojos/javascript-arrays/cheatsheet


//////////////////////////   Mutable Mutable Mutable Mutable Mutable  /////////////////

//////////////1. Splice - Mutable
a1.splice(start, deleteCount, items)  //splice is mutable
let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi"); // Starting at position 2, add 2 elements: 
//[]  //*Important* Splice returns the removed item"
fruits
//['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

fruits.splice(2, 1, "Lemon", "Kiwi"); // Starting at position 2, remove 1 item and add 2 new items :
// -> ['Apple']
fruits
// ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango']

// Starting at position 2, remove 2 items:
fruits.splice(2, 2);
// -> ['Apple', 'Mango']
fruits
//['Banana', 'Orange']

////////////// 2.reverse - Mutable
//reverse
const array1 = ['one', 'two', 'three'];
array1.reverse();
// ["three", "two", "one"]

////////////// 3.shift - Mutable
//shift removes the FIRST element from an array and returns that REMOVED element.
const array1 = [1, 2, 3];
array1.shift();
// -> 1
array1
// [2, 3]


////////////// 4.sort - Mutable
//default sort order is ascending, built upon converting the elements into strings
//sort RETURNS the sorted(mutated) array
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
//-> ['Dec', 'Feb', 'Jan', 'March']
months
// ['Dec', 'Feb', 'Jan', 'March']

//sorting number is a bit weird
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
// [1, 100000, 21, 30, 4]
//Correct way- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


////////////// 5.unshift - Mutable
// adds one or more elements to the beginning of an array and returns the new length of the array.
const array1 = [1, 2, 3];
array1.unshift(4, 5);
//-> 5  //new length
array1
//[4, 5, 1, 2, 3]


//Summarize the MUTABLE methods:
array.reverse // Reverse the order of the elements of the array.
array.shift // Remove the first element from the array.
array.sort // Sort the elements of the array.
array.splice // Add or remove elements from the array.
array.unshift // Add one or more elements to the front of the array.


// https://alligator.io/js/push-pop-shift-unshift-array-methods/
//push pop unshift shift




/////////////////////// IMMUTable IMMUTable IMMUTable IMMUTable IMMUTable//////////////////////

let a1 = [1,2,3,4]
let a2 = ["a","b","c","d"]
a1.concat(a2)
// [1, 2, 3, 4, 'a', 'b', 'c', 'd']

a1.join("_")
//'1_2_3_4'

a1.slice(start, end)  //immutable
// 'end' is Exclusive.
//slice() RETURNS selected items in an array, as a new array.
//slice is NOT mutable (does NOT change the original array)
a1.slice(0,1) // start at 0 and ends before 1st index. 
// -> [1]
a1
//[1, 2, 3, 4]


