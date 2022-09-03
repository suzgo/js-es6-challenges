var arr = ["HTML", "JavaSctipt", "CSS"];

/*
Log out all array items using a for-of-loop and a console.log() statement
- Pro Tip: You can log out the index of each item using arr.entries() in the loop
*/

//Challenge 4: ES6 javascript - script_04.js

for (const [index, value] of arr.entries()) {
  console.log(`Index: ${index}, Value: ${value}`);
}

//or

for (const value of arr) {
  console.log("Value:", value);
}
