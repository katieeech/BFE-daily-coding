//Basic 'Array' Methods
// 1) https://gist.github.com/joyrexus/7366429
// 2) https://www.shortcutfoo.com/app/dojos/javascript-arrays/cheatsheet


//////////////////////////   Mutable Mutable Mutable Mutable Mutable  /////////////////

//////////////1. Splice - Mutable
//Splice returns the removed item
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
//reverse returns the reversed array
const array1 = ['one', 'two', 'three'];
array1.reverse();
// ["three", "two", "one"]

////////////// 3.shift - Mutable
//shift removes the FIRST element from an array and returns that REMOVED element.
const array1 = [1, 2, 3];
array1.shift();
// -> 1  //returns the removed item
array1
// [2, 3]


////////////// 4.sort - Mutable
//default sort order is ascending, built upon converting the elements into strings
//sort RETURNS the sorted(mutated) array
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort(); //returns the sorted,mutated array
//-> ['Dec', 'Feb', 'Jan', 'March']
months
// ['Dec', 'Feb', 'Jan', 'March']

//sorting number is a bit weird
const array1 = [1, 30, 4, 21, 100000];
array1.sort(); //returns the sorted array
// [1, 100000, 21, 30, 4]
//Correct way- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


////////////// 5.unshift - Mutable
// ADDS one or more elements to the beginning of an array and returns the new length of the array.
const array1 = [1, 2, 3];
array1.unshift(4, 5);
//-> 5  //new length
array1
//[4, 5, 1, 2, 3]


//Summarize the MUTABLE methods:
array.sort // Sort the elements of the array.
array.reverse // Reverse the order of the elements of the array.
array.shift // Remove the first element from the array.
array.unshift // Add one or more elements to the front of the array.
array.splice // Add or remove elements from the array.



// https://alligator.io/js/push-pop-shift-unshift-array-methods/
//push pop unshift shift




/////////////////////// IMMUTable IMMUTable IMMUTable IMMUTable IMMUTable//////////////////////

let a1 = [1,2,3,4]
let a2 = ["a","b","c","d"]
//1) concat
a1.concat(a2)
// [1, 2, 3, 4, 'a', 'b', 'c', 'd']

//2) join()
a1.join("_")
//'1_2_3_4'

//3) slice()
a1.slice(start, end)  //immutable
// 'end' is Exclusive.
//slice() RETURNS selected items in an array, as a new array.
//slice is NOT mutable (does NOT change the original array)
a1.slice(0,1) // start at 0 and ends before 1st index. 
// -> [1]
a1
//[1, 2, 3, 4]

//4) indexOf()
// returns the FIRST index at which a given element can be found in the array, or -1 if it is not present.
//(If more than one indices are found, it returns the first index)
indexOf(searchElement, fromIndex)

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

beasts.indexOf('bison')
//  1

// start from index 2
beasts.indexOf('bison', 2)
//  4    //4th index is returned because it started from the 2nd index

//5) lastIndexOf()
// returns the last index at which a given element can be found in the array, or -1 if it is not present. 
//The array is searched backwards, starting at fromIndex.
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
animals.lastIndexOf('Dodo')
// 1
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromWhichndex)
let numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2, 3);  // 3

//Summarize the IMMUtable methods:
array.concat //Join the array with other array(s) OR value(s).
array.join   //Join all elements of the array into a string.
array.slice  //Extract a section of the array.
array.indexOf  // Find the first occurrence of a value within the array.
array.lastIndexOf  // Find the last occurrence of a value within the array.



//////////////// Iteration Methods ////////////////

//1. filter()
// The filter() method Creates a NEW array with all elements that Pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
result
//  Array ["exuberant", "destruction", "present"]

//2.forEach() method 'executes' a provided function once for each array element.
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

//3.every() method tests whether ALL elements in the array pass the 
// test implemented  by the provided function. It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

array1.every(isBelowThreshold);
//true

//4.map() method Creates a NEW array populated with the results of calling a
// provided function on 'every' element in the calling array.
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);

map1
//Array [2, 8, 18, 32]


/////// * Important! * /////
// Diff between forEach and map
// map() returns a new array while . forEach() doesn't. 
// That is why you see that difference in the output. 
// * forEach() just operates on every value in the array.


//5.some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns boolean. It does NOT modify the array.
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
// % : % operator returns the remainder of two numbers (called modulo)
array.some(even);
// true


//6.reduce()
// reduce() method 'executes' a user-supplied “reducer” callback function on EACH element of the array, 
// passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a 'single value'.

// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array.

// The reducer walks through the array element-by-element, at each step adding the current array value to the result from 
// the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

array1.reduce(reducer);
// 10      ( expln: 1+2+3+4)

//another example
let grades= [89, 96, 58, 77]
const topScore = grades.reduce( (max, currVal)=> {
    if(currVal > max) return currVal;
    return max;
})
topScore
//96
/* There is a Math.max() built in method */
grades.reduce( (max, currVal) => { return Math.max(max, currVal)})



//7.reduceRight()
// reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
  );
array1;
//  [4, 5, 2, 3, 0, 1]
  

//Summarize the Iteration Methods:
array.filter //Create a new array with only the elements for which a predicate is true.
array.forEach // Call a function for each element in the array.
array.every //See if every element in the array satisfies a predicate.
array.map  //Create a new array with the result of a function of every element in the array.
array.some   //See if at least one element in the array satisfies a predicate.
array.reduce //Apply a function to reduce the array to a single value (from left-to-right).
array.reduceRight //Apply a function to reduce the array to a single value (from right-to-left).








