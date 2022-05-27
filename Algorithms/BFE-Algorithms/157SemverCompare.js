const getVersion = (str) => str.split(".").map(Number);

function compare(v1, v2) {
  const version1 = getVersion(v1);
  const version2 = getVersion(v2);
  for (let i = 0; i < 3; i++) {
    if (version1[i] > version2[i]) return 1;
    if (version1[i] < version2[i]) return -1;
  }
  return 0;
}
//Once you hit return, the function stops executing further down.

console.log("12.1.0".split("."));
console.log("12.1.0".split(".").map(Number));
//.map(Number) is the same as .map((str, ind, arr) => Number(str, ind, arr));
//It calls Number on each value in the array (casting it to a number) // and returns the array of results.
