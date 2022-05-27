//below from my real trip algo (goorm)
let str = ["(()){[]}"];

let symbols = {
  "(": ")",
  "[": "]",
  "{": "}",
  ")": "(",
  "]": "[",
  "}": "{",
};

function validBraces(braces) {
  let bList = { "(": ")", "{": "}", "[": "]" };
  let verify = braces.split("").reduce(function (ac, cv) {
    if (cv === bList[ac[ac.length - 1]]) {
      ac.pop();
    } else {
      ac.push(cv);
    }
    return ac;
  }, []);
  return verify.length === 0;
}

console.log(validBraces("(()){[]}"));
