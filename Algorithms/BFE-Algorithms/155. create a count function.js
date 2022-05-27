//Please create a function count(), when called it should return
//how many times it has been called, count.reset() should also implemented.
// your code here

//first approach
let counter = 0;
let count = () => ++counter;
count.reset = () => (counter = 0);

//same approach - longer code
let counter = 0;

let count = function () {
  return ++counter;
};
count.reset = function () {
  counter = 0;
};

//second approach
// this is a self-executing anonymous function where you define a function and force executing it immediately.
const count = (() => {
  let num = 0;
  const func = () => ++num;
  func.reset = () => (num = 0);
  return func;
})();

//Below does NOT work properly
let count = function () {
  let num = 0;
  let func = () => ++num;
  func.reset = () => (num = 0);
  return func;
};
