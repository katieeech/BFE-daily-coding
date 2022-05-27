//this solution used recursion.
function sum(num) {
  const func = function (num2) {
    // #4
    return num2 ? sum(num + num2) : num; // #3
  };

  func.valueOf = () => num; // #2   //overriding the builtin valueOf method with our num
  return func; // #1
}

// function sum(num) {
//   const fn = (num2) => sum(num + num2);
//   fn.valueOf = () => num;
//   return fn;
// }

console.log(sum(1)(2) == 3); //returns true.

//we compare non-primitive (Object, functions are Objects in JS) value against a primitive value (Number). <br /> //need to use the func variable bc
// `sum(1)(2)(3) == 6`;
//explanation: https://bigfrontend.dev/problem/create-a-sum/discuss
// More thorough explanation:
// https://github.com/kalpeshsingh/data-structure-agorithms-in-js/blob/master/23.md

// const sum1 = sum(1);
// sum1(2) == 3; // true
// sum1(3) == 4; // true
// sum(1)(2)(3) == 6; // true
// sum(5)(-1)(2) == 6; // true
