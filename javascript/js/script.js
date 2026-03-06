// loops in js
console.log("javascript");
// console.log("javascript");
// console.log("javascript");
// console.log("javascript");
// console.log("javascript");

// for, while , do while

// increament/decreament
// let a = 6;
// ++  --> increment by one
// --  --> decrement by one
// console.log(a);
// a = a - 2
// a -= 2;
// a += 2;
// a *= 2;
// console.log(++a);
// console.log("prefix", --a);
// console.log("postfix", a);
// for(initialization; condition; increment/decrement){}
// it run until condition is true with specified number of time
// for (let i = 1; i <= 100; i++) {
//     // body of for loop
//     console.log("my web class");
// }

// while loop
// initialization
// while(condition){
// increment/decrement
// }

// let i = 1;
// while (i >= 100) {
//     // body of while loop
//     console.log("my web class");
//     i++;
// }

// console.log("end of while loop");

// do-while loop
// let i = 1;
// do {
//     console.log("my web class");
//     i++;
// } while (i >= 100);
// console.log("end of do-while loop");


// for (let index = 0; index <= 10; index++) {
//     if (index === 5) {
//         // continue;// skip
//         break;// stop
//     }
//     console.log(index);
// }

// 
let password = Number(prompt("Enter your password"));
let db_password = 1357;
// console.log(password, db_password)
// // console.log(password == db_password)
while (password != db_password) {
    password = Number(prompt("Enter your password"));
    console.log("passowrd is not correct!!")
}
console.log("password is correct!!")