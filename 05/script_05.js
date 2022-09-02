//Challenge 5: ES6 javascript - script_5.js

const job = {
  salary: 4000,
  format: "Full-Time",
  title: "Developer",
  experience: 4,
};

/*
Use the destructuring syntax and the rest operator to define variables out of the object above: title, salary and an object details containing the job details namely format and experience

- Desired outcome:

console.log(title) // 'Developer'
console.log(salary) // 4000
console.log(details) // {format: 'Full-Time', experience: 4}

*/
//const { title, salary } = job
//add details which contain hidden: format + experience values

const {title, salary, ...details} = job
console.log('Title:', title);
console.log('Salary:', salary);
console.log('Details:', details);

