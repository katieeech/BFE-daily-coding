function count(str) {
  const map = {};
  for (let letter of str) {
    map[letter] = map[letter] + 1 || 1;
    //   When letter is 'a',
    // map will return  {a: 1}
  }
  const max = Math.max(...Object.values(map));
  // const max = Math.max(...map.values())//?
  const result = Object.keys(map).filter((k) => map[k] == max);
  return result.length <= 1 ? result[0] : result;
}
