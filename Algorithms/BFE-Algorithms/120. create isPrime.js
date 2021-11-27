// A Prime number is a natural number greater than 1 that 
//is divisible only by itself and 1, such as 2,3,5....

// You are asked to implement isPrime() to check if a number is prime.

function isPrime(num) {
    if(num < 2) return false;
    let i = 2;
    while(i < num) {
      if (num % i === 0) {
        return false;
      }
      i++;
    }
    return true;
  }
  console.log(isPrime(1))