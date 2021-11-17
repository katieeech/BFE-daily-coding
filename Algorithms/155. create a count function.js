//Please create a function count(), when called it should return 
//how many times it has been called, count.reset() should also implemented.
// your code here
const count = (() => {
    let num = 0;
    const func = () => ++num;
    func.reset = () => num = 0;
    return func;
  })();