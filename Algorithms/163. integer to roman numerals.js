//first try
const valueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  
  function romanToInteger(str) {
     let result = 0
     for (let i = 0; i < str.length; i++) {
       const val = valueMap[str[i]]
       const nexVal = i < str.length - 1 ? valueMap[str[i + 1]] : undefined
       
       const sign = nexVal !== undefined && nexVal > val ? -1 : 1
       result += sign * val
     }
     return result
  }


  //second try
  function romanToInteger(str) {
    const map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    }
  
    let sum = 0
  
    for (let i = 0; i < str.length; i++) {
      const sign = map[str[i]] < map[str[i+1]] ? -1 : 1
  
      sum += map[str[i]] * sign
    }
  
    return sum
  }
  
  console.log(romanToInteger('MMMCDXX'))