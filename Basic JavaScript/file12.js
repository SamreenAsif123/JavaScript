// Loops are used to execute a piece of code again and again.

// for loop
for (let i = 0; i < 5; i++) {
    // Here i=0 is the initial expression, i<5 is the condition, i++ is the increment expression
    console.log('Samreen');
  }
  
  // While Loop
  let j = 1;
  while (j < 5) {
    console.log(j);
    j++;
  }
  
  // do-while loop
  // This loop is similar to a while loop, but there is a slight difference.
  // The do-while loop executes a block of code at least once and then repeats the execution as long as a specified condition is true.
  let count = 5;
  
  do {
    console.log(count);
    count++;
  } while (count <= 5);

  // Using for...in loop to iterate over the properties of an object
const person = {
    name: 'Ali',
    age: 20,
    occupation: 'Doctor'
  };
  
  console.log('Using for...in loop:');
  for (let key in person) {
    // Iterating over the properties of the object
    console.log(key, person[key]);
  }
  

 // Using for...of loop to iterate over the elements of an array
const fruits = ['apple', 'orange', 'banana'];

console.log('Using for...of loop:');
for (let fruit of fruits) {
  // Iterating over the elements of the array
  console.log(fruit);
}


  

