/* 

Create a function that doubles whatever number you pass as an argument:

exampleFunction(4) //8 

The same function can multiply the number by x times if you pass x as a second argument: 

exampleFunction(4, 3) //12

*/

//Challenge 1: ES6 javascript - script_01.js

function doubleMe(a, b = 2) {
  return a * b;
}
console.log(doubleMe(6));

console.log(doubleMe(6, 4));
