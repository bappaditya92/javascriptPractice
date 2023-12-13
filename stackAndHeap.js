//******************Stack and Heap****************** */

//stack(Premitive)
//Heap(Non-premitive)

let myYoutubeName = "Bappadityadotcom";

let anotherName = myYoutubeName;
anotherName = "Bappadotcom"
console.log(anotherName);
console.log(myYoutubeName);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}
console.log(user);

let userTwo = user;
userTwo.email = "userTwo@google.com";
console.log(user.email);
console.log(userTwo);