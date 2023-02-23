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
// question: diff beween arrow functio, function declaration, function expression
const add3 = (a,b) => a+b;
console.log(add(10,20));
console.log(add2(10,20));
console.log(typeof add2);
console.log(add(1,5));
console.log(typeof add3);

// 3 ways to declare an arrow function:
// 1. with no parameter: just use parenthesis in place of parameter
const getPie = () => 3.14;
// 2. with single parameter: no need to use parenthesis
const value = num =>num*5;
// 3. with multiple paramerters: write them inside parenthesis
// const add3 =(a,b) =>a+b;

// NOTE: in single line arrow function, function itself return explicitly.
// for multiline function, we have to write return statement
const doMath = (a,b,c)=>{
    const jog = a+b+c;
    const gun = jog*a*b*c;
    const vag = gun/jog;
    return vag;
}