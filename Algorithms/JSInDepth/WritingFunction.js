// Regular function
function func(p1, p2) {
    return p1 * p2;   
  }
// When JS reaches a return statement, the function will stop executing.


// ES6 introduced Arrow function
let funcHere = (a,b) => {return a * b ;}
let funcHere = (a, b) => a * b;  
//Above two work the same.
//If you have only one statement then you can skip a bracket AND return keyword as in line 10.

let hello = (val) => "Hello " + val;
//if you have only one parameter, you can skip parentheses
let hello = val => "Hello " + val;


// What About 'this'?
// The handling of 'this' is also different in arrow functions compared to regular functions.

// In short, with arrow functions there are NO binding of 'this'.
// In regular functions the this keyword represented the object that called the function,
// which could be the window, the document, a button or whatever.
// With arrow functions the this keyword always represents the object that defined the arrow function.

const topScore = grades.reduce( (max, currVal)=> {
    if(currVal > max) return currVal;
    return max;
})

grades.reduce( (max, currVal) => { return Math.max(max, currVal)})
// without the return keyword, it returns undefined
grades.reduce( (max, currVal) =>  ( Math.max(max, currVal) ))
//works


//Nested function
const greet = () =>  {
  const prefix = 'Mr'
  return (name) => {
      console.log(`${prefix} ${name}, welcome!`)
  }
}

console.log(greet()('Jack'))