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
function printInt(){ 
    let num
    for(let i = 0; i< 101; i++){
    return i
    }
    }
