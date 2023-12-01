const accountId = 147852369;
let accountEmail = "bappadity@gmail.com";
var accountCity = "kolkata";
accountPassword = "123456789";

let accountState;

// accountId = 545678964 //not allowed

accountEmail = "bappa@gmail.com";
accountCity = "contai";
accountPassword = "8748965";
// console.log("accid", accountId);
// console.log("accEmail: ", accountEmail);
// console.log("accCity: ", accountCity);
// console.log("accpasswd: ", accountPassword);


console.table([accountCity, accountEmail, accountId, accountPassword, accountState]);

/*
prefer not to use var
because of issue in block scope and functional scope 
*/