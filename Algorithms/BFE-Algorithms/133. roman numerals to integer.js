//first try
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



  //second try

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
       let val = valueMap[str[i]]
       let nextVal = i < str.length - 1 ? valueMap[str[i + 1]] : undefined
       
       let sign = nextVal !== undefined && nextVal > val ? -1 : 1
       result += sign * val
     }
     return result
  }