// You must have seen the countdown before a game starts (it goes like 10, 9, 8, .... with some delay in between). Try to write a program for it.
let count = 10

for (let i = 0; i < 10; i++) {
  function timer(i) {
    setTimeout(() => {
      console.log(count)
      count--
    }, i * 500)
  }
  timer(i)
}

//Write a short program that prints each number from 1 to 100 on a new line. 
function FizzBuzz(){
    let arr = []
for (let i = 0; i <= 100; i++) {
    arr.push(i)
}
return arr.join('\n')
}
console.log(FizzBuzz())

for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
// https://dev.to/hexangel616/javascript-fizzbuzz-solution-in-details-1ih5
console.log([...Array(100)].map( (nums,i) => 
{   i++;
    return(i%15?'':'Spider')||(i%5?'':'Ghost')||(i%3?'':'Rat')||i; }
).join('\n'));
