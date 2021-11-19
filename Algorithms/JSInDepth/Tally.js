//Count number for Y and N
const votes = ['y','y','n','n','y']
const results = votes.reduce( (tally, val) => {
      tally[val] = ( tally[val] || 0 ) + 1;
      return tally;
}, {})
results
//{y: 3, n: 2}


//Increment
// ++i returns the value of i after it has been incremented. i++ returns the value of i before incrementing.
// When the ++ comes before its operand it is called the "pre-increment" operator, and when it comes after it is called the "post-increment" operator.

