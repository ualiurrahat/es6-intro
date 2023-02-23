// function declaration:
function add(num1,num2)
{
    return num1+num2;
}
// function expression:
const add2 = function add2(num1,num2)
{
    return num1+num2;
}

// array function
const add3 = (a,b) => a+b;
console.log(add(10,20));
console.log(add2(10,20));
console.log(typeof add2);
console.log(add(1,5));
console.log(typeof add3);