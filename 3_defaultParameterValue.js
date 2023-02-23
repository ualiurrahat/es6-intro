// before es6 that is how we used to check undesired argument value
// function add(first,second)
// {
//     // second = second || 0; 
//     // changes the second value from undefined to 0. bitwise opertaion.
//     const result = first + second;
//     return result;
// }

// if we set a default parameter value, function will consider default value if user does not set value .
// we usually set default value in last parameter. here, default value is set in second parameter.
function add(first, second = 0)
{
    const res = first + second;
    return res;
}

console.log(add(10,20));
console.log(add(10));