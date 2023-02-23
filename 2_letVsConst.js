// es6 does not use var anymore.

// const can not be reassigned.
const name = "rahat";
console.log(name);
// name = "minul"; not allowed 

// but const array and const object allow to add new elements by using their funcitons.
// but you can not rename other objects with the same name delcared as const objects

const numbers = [18,1,8,5,20];
console.log(numbers);
numbers.push(200);
numbers.shift();
console.log(numbers);

