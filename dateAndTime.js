//dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());3
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 2, 23);
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
//console/log(myTimeStamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));