// https://www.shortcutfoo.com/app/dojos/javascript-arrays/cheatsheet
let a1=[1,2,3,4]
let a2=["a","b","c","d"]


a1.concat(a2)

a1.join(",")

a1.slice(start, end)

// splice
a1.splice(start, deleteCount, items)
// https://www.w3schools.com/jsref/jsref_splice.asp
let fruits = ["Banana", "Orange", "Apple", "Mango"];
// At position 2, add 2 elements: 
fruits.splice(2, 0, "Lemon", "Kiwi");
// At position 2, add new items, and remove 1 item:
fruits.splice(2, 1, "Lemon", "Kiwi");
// At position 2, remove 2 items:
fruits.splice(2, 2);



// https://alligator.io/js/push-pop-shift-unshift-array-methods/
//push pop unshift shift