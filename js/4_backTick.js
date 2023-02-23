// backtick provides multile strings allowing use of dynamic values

let age = 22;
const oldMultiLineStrings = 'hi I am a web developer \n' + "I am rahat \n" + "I am " + age + " years old \n";
console.log(oldMultiLineStrings);

const newway = `hi, I am Rahat.
I am ${age} years old.
Let's meet.
`;
console.log(newway);