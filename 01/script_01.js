//Challenge 1: ES6 javascript - script_01.js

// Create a function that doubles whatever number you pass as an argument:

// exampleFunction(4) //8

// The same function can multiply the number by x times if you pass x as a second argument:

// exampleFunction(4, 3) //12

function doubleMe(a, b = 2) {
  return a * b;
}
console.log(doubleMe(6));
// b will have a default value of 2 as not passing an argument
//1st value passed is 6 and as no value passed in 2nd value it will take default preset value of 2
//Double formula 6x2=12
// expected output: 12

console.log(multiply(6, 4));
//2 values passed, so default preset value of 2 is ignored
//6x4=24
// expected output: 24
