// object destructuring

const me = {
    you : "rahat", 
    age : 22,
    profession : "web developer", 
    address : "tongi"
};

// we can set any properties of objects with same name as variable
const {you} = me;
const {address} = me;
const {profession} = me;
const {age} = me;
console.log(you,address,profession,age);


const {benson,lucky,royal} = {benson:"16", lucky:10, royal:6};
console.log(benson,lucky,royal);

// array destructuring 
const [first,second] = [25,33,100,300];
console.log(first,second);
const khans = ["srk", "sk", "ak"];
const [king,goat,good] = khans;
console.log(king,goat,good);