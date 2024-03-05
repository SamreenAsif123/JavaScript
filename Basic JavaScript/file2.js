// Variable declaration: let and const are both used for variable declarations, but they have different characteristics.
// Differnce between let and const:
/* 
let:
1. Variable declared with let is reassigned.
2. Has block scope, meaning it is only accessible within the block where it's defined.
*/
//for example
let  number = "34"
number = "42"
console.log(number); // Valid - reassignment is allowed

/*
const:
1.Variables declared with const are constants; their values cannot be reassigned after initialization.
2. Like let, const also has block scope.
*/
//for example
const age= "20";
age="21" ;// Invalid - reassignment is not allowed
console.log(age);

