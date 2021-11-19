//Finding all the occurrences of an element
// The following example uses lastIndexOf to find all the indices of an element in a given array,
//  using push to add them to another array as they are found.

let indices = [];
let array = ['a', 'b', 'a', 'c', 'a', 'd'];
let element = 'a';
let idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]