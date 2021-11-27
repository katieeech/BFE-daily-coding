function count(str) {
    const map = {};
    for(let letter of str){
      map[letter] = map[letter] + 1 || 1;
    //   When letter is 'a', 
    // map will return  {a: 1}
    }
    const max = Math.max(...Object.values(map));
    // const max = Math.max(...map.values())//?
    const result = Object.keys(map).filter( k => map[k] == max);
    return result.length <= 1 ? result[0] : result;
  }


//second approach
  function count(str) {
    const countsMap = {};
    const countsSorted = [];
  
    for (let char of str) {
      countsMap[char] = countsMap[char] || 0;
      countsMap[char]++;
  
      countsSorted[countsMap[char]] = (countsSorted[countsMap[char]] || []);
  
      countsSorted[countsMap[char]].push(char);
    }
    
    const mostFrequently = countsSorted.pop();
  
    return mostFrequently.length > 1 ? mostFrequently : mostFrequently[0];
  }