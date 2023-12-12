// premitive (call by value)

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt



const score  = 100;
const scoreCard = 100.3;

const isLoggedIn = true;
const ousidetemp = null;

let userEmail;

const id = Symbol('123456');
const anotherId = Symbol('123456');
console.log(id);
console.log(anotherId);
console.log(id === anotherId);


const bigNumber = 454654656565656565656518977846511131111111111113n;
console.log(bigNumber)


//reference type (Non Premitive)

//Array, objects, Functions

const actors = ["shahrukh","hrittick", "Akshay"];
console.log(actors);

const myObj = {
    name: "Bappaditya",
    age: 30,
    nickname: "Adi",
    designation : "Application developer"
}
console.log(myObj);

const myFunc = function(){
console.log("namaste");
}
myFunc();

console.log(typeof bigNumber);

//null -- typeof object ata hai