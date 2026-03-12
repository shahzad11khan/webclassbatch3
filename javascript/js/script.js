// loops in js
// console.log("javascript");
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
// let password = Number(prompt("Enter your password"));
// let db_password = 1357;
// console.log(password, db_password)
// // console.log(password == db_password)
// while (password != db_password) {
//     password = Number(prompt("Enter your password"));
//     console.log("passowrd is not correct!!")
// }
// console.log("password is correct!!")

// function
// syntax
// function  user_define_name(){ // body of function }

// user_define_name()   // calling

// example
// const variable_name = 10;
// function Simple_Function() {
//     console.log("Called Function..!");
// }

// Simple_Function()
//  parameterized function
// function Addition(num, num2) {
//     console.log(num + num2);

// }
// Addition(1, 2);
// Addition(1, 2);
// Addition(10, 20);
// Addition(11, 22);
// Addition(101, 202);

// default para
// name = "shahzhad";
// function Subtraction(num = 10) {
// function Subtraction(num = 10, num2) {
// function Subtraction(num, num2 = 90) {
//     console.log(num - num2)
// }
// call
// Subtraction();
// Subtraction(10, 70);

// arrow function

// css
// Simple_Function{}
// object
// const Simple_Function={}
// arrow
// Simple_Function();  // error
// const Simple_Function = () => {
//     console.log("Function called...!");

// }

// Simple_Function(); // good practice


// array
// syntax

// const javascript = ["web", "class", "batch", "III"];
// console.log(javascript);
// console.log(javascript[2]); // access value in array
// push --> to add a new value
// pop --> to remove a value
// shift --> to remove the first index value
// unshift --> to add a new value at the first index


// javascript.push(true);
// javascript.push(120);
// console.log(javascript);


// javascript.pop();
// console.log(javascript);


// javascript.unshift("Encoderbytes");
// console.log(javascript);

// javascript.shift();
// console.log(javascript)

// const student = {
//     name: "umr",
//     age: 21,
// }
// console.log(student)
// console.log(student.age)
// // console.log(student.field = "web")
// student.xyz = "web"
// console.log(student)

// student.name = "shahzad";
// console.log(student)


// DOM


// getelementbyid , getelementbyclassname, getelementbytagname

// result is an array
// const access = document.getElementsByTagName('h1');
// console.log("access element:", access[0]);

// const access_useing_class = document.getElementsByClassName('para');
// console.log(access_useing_class[0]);


// byid

// const access_element_using_id = document.getElementById('heading_two');

// console.log("first accesss:", access_element_using_id.innerText);


// access_element_using_id.style.color = "blue";
// console.log("access element using id:", access_element_using_id.innerHTML);
// console.log("access element using id:", access_element_using_id.innerText);
// console.log("access element using id:", access_element_using_id.textContent);

// access_element_using_id.innerHTML = "<h4>heading two updated</h4>";

// console.log(access_element_using_id)


// query selector


// document.querySelector() with tag name
// const access_element_using_query_selector = document.querySelector("h1");
// console.log(access_element_using_query_selector);
// docuemt.gueryselector() with class name
// const access_element_using_query_selector_with_class_name = document.querySelector(".qury");
// console.log(access_element_using_query_selector_with_class_name);
// docuemt.gueryselector() with id
// const access_element_using_query_selector_with_id = document.querySelector("#qury");
// console.log(access_element_using_query_selector_with_id);

// query selector all

// document.queryselectorAll()  with tag name

// const access_element_using_queryselectorall_with_tag_name = document.querySelectorAll('h1');
// console.log(access_element_using_queryselectorall_with_tag_name);

// const access_element_using_queryselectorall_with_tag_name = document.querySelectorAll('.qury');
// console.log(access_element_using_queryselectorall_with_tag_name);

// class activity by id




// set attribute

// const access_element_using_id = document.querySelector('#image');
// console.log(access_element_using_id); //print
// image\updateimage.png
// D:\batchIII\HTML\image\updateimage.png
// access_element_using_id.setAttribute('src', '../../image/updateimage.png');

const access_element_using_id = document.querySelector('#heading_one');
console.log(access_element_using_id);
access_element_using_id.setAttribute('style', 'color:red');







