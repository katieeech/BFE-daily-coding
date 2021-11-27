validate('{}[]()') 
// true
validate('{[()]}') 
// true
validate('{[}]') 
// false, they are not in the right order
validate('{}}') 
// false, last `}` is not paired with `{`

