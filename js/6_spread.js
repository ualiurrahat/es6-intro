const a = Math.max(10,20,30);
console.log(a);

// now find the largest in an array
let arr = [18,1,8,25,100];
// console.log(Math.max(arr)); shows Nan.
// Math.max() just takes numbers, not array

// what to do?
// soln: use spread operator to just send the numbers of array.
console.log(Math.max(...arr));

// let us copy arr within another array
let numbers = arr;
console.log(numbers);

// now push 50 to arr and 1000 to numbers and print them
arr.push(50);
numbers.push(1000);
console.log(arr);
console.log(numbers);
// what happend? both the arrays got both numbers. 
// why? soln: when we assign an array to another one. it does not copy elements
// it sends the address or reference of the array. so both array are pointing same location

// what to do: use sperad operator just to copy numbers

let arr2 = [...numbers];
arr2.push(250);
console.log(arr2);
console.log(numbers); // see. 250 is in the arr2 only

let arr4 = [400, 13, 17, ...numbers, 23];
console.log(arr4);