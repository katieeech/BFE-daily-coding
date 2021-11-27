// Given an array of integers, all integers appear twice except one integer, could you quickly target it ?

const arr = [10, 2, 2 , 1, 0, 0, 10]
findSingle(arr) // 1


function findSingle(arr) {
  return  arr.filter((num) => {
    return arr.indexOf(num) === arr.lastIndexOf(num)
  })[0] //need [0] at the end because it returns an array and we want the element from it
}
//*filter() returns a new array with the elements that pass the test.


//My solution
function findSingle(arr) {
  let single = null
 for(let i=0; i < arr.length;i++){
   if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
     single = arr[i]
   }
 }
 return single
 }
const arr = [10, 2, 2 , 1, 0, 0, 10]
console.log(findSingle(arr))