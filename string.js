const name = "Bappa";
const repoCount = 50;
// console.log(name + repoCount +"value" );

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Bappa-ditya');
console.log(typeof gameName);
console.log(gameName[1]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 5);
console.log(newString);


const anotherString = gameName.slice(0, 5);
console.log(anotherString);

const newStringOne = "    Bappa   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bappaditya.com/bappa%20ditya";
console.log(url.replace('%20', '_'));

console.log(url.includes('bappa'));

console.log(gameName.split('-'));