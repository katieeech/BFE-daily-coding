let bList = { "(": ")", "{": "}", "[": "]" };
let ac = "[";
console.log(bList[ac]);
console.log("ac.length", ac.length);

console.log(bList[ac[ac.length - 1]]);
console.log(bList[ac[0]]);

// console.log(ac[ac.length - 1]);
console.log(16 % 5 ? "fir" : "sec");

console.log(0 % 2 === 0); //t
console.log(1 % 2 === 0); //f
console.log(2 % 2 === 0); //t
const dt = new Date();
console.log(dt, dt.getDate());
