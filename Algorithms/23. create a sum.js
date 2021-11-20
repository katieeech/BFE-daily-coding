function sum(num) {
    const func = function(num2) { // #4
      return num2 ? sum(num+num2) : num; // #3
    }
    
    func.valueOf = () => num; // #2   //overriding the builtin valueOf method with our num
    return func; // #1
  }

  //explanation: https://bigfrontend.dev/problem/create-a-sum/discuss
  