//*****************Numbers***************** */
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
// console.log(typeof balance);
console.log(balance.toFixed(2));

const otherNumber = 4122.255555;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


//***************Maths*************** */

console.log(Math);
console.log(Math.abs(-451));
console.log(Math.round(4.42));
console.log(Math.ceil(4.25));
console.log(Math.floor(4.65));
console.log(Math.sqrt(81));
console.log(Math.min(45,894,9,6,7,96,86,96));
console.log(Math.max(45,894,9,6,7,96,86,96));

console.log(Math.random());
console.log(Math.floor((Math.random()*10) + 1));


const min = 100000;
const max = 999999;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);