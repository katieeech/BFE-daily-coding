console.log(median([1, 2], [3, 4, 5]));
console.log(median([1, 2], [3, 4]));

function median(arr1, arr2) {
  const result = [...arr1, ...arr2].sort((a, b) => a - b);
  const isEven = result.length % 2 === 0;
  let mid = Math.floor(result.length / 2);

  if (isEven) {
    return (result[mid] + result[mid - 1]) / 2;
  }

  return result[mid];
}
