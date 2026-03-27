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

// const access_element_using_id = document.querySelector('#heading_one');
// console.log(access_element_using_id);
// access_element_using_id.setAttribute('style', 'color:red');

// onclick , ondblclick , mouseover , mouseout , keydown , keyup , keypress

// function click_me() {
// console.log("button clicked");
// alert("button clicked");
// document.writeln("<h1>button clicked</h1>")
// }

// const access_button = document.getElementById("click");
// console.log(access_button);
// addEventListener()
// access_button.addEventListener()
// access_button.addEventListener("click", function fun() {
//     console.log("button clicked");
// })
// function fun() {
//     console.log(3 + 5);
// }
// addeventlistener parameter is must string and 
// access_button.addEventListener("mouseover", fun)

// accessing
// const email = document.getElementById("email");
// const error = document.getElementById("error");
// const login = document.getElementById("login");
// // console.log(email.value, login);
// const gender = document.getElementById("male");
// const gender2 = document.getElementById("female");

// function func() {
//     // console.log(gender.checked, gender2.checked);
//     const result = gender.checked ? "male" : "female";
//     console.log(result);
//     // email.value == "" || !email.value.includes('@') ? error.innerText = "email is required" : error.innerText = email.value;
//     // error.style.color = "red";
// }
// login.addEventListener("click", func)
// ananumus function --> with out any funtion name directly access
// function xyz(){}
// function (){}

// accessing 
// const access_name_input = document.getElementById('name');
// const access_btn = document.getElementById('click');
// const access_clear_btn = document.getElementById('clear');
// const access_add_btn = document.getElementById('add');
// console.log(access_clear_btn);

// console.log(access_btn);

// let access_msg = document.getElementById('msg');
// console.log(access_btn);
// access_btn.addEventListerne('string',function())
// access_btn.addEventListener("click", function () {
//     console.log("function called ........!");
// })

// access_btn.addEventListener('click', function () {
//     // console.log("function called ........!");
//     console.log(access_name_input.value);
    
    // // console.log(access_name_input.value);
    // // access_msg.innerText = access_name_input.value;
    // if (access_name_input.value === "") {
    //     access_msg.innerHTML = "Name is required";
    //     access_name_input.style.borderColor = "red";
    //     access_msg.style.color = "red";
    //     return
    // }
    // access_msg.innerHTML = access_name_input.value
// })

// access_clear_btn.addEventListener('click', function () {
//     access_name_input.value = "";
// })



// access_add_btn.addEventListener("click", function () {
    
//     console.log(eval(access_name_input.value)); 
//     access_name_input.value = eval(access_name_input.value);
// })


// dom 1st element access

// const access_btn =  document.getElementById('click');
// const access_name_input = document.getElementById('name');
// console.log(access_btn);
// access_btn.addEventListener('click',function(){
    // console.log(access_name_input.value);
    // if(access_name_input.value === ""){
        // alert("Name is required");
    // }
    // console.log(access_name_input.value);
    
    // console.log("button clicked ...!");
    
// })

// createelement 
// appendchild
// const create_element = document.createElement('h1');
// create_element.innerText = "Hello World"

// document.body.appendChild(create_element)

// access ul

// const ul = document.getElementById('list');
// const create_li = document.createElement('li');
// create_li.innerText = "Hello World"

// console.log(create_li);

// document.body.appendChild(create_li)
// ul.appendChild(create_li)

// console.log('my name is ali');
//  ``
// const name = "umar";
// const age = 21;
// console.log(`hi my name is ${name} my age is ${age}`);

let input = document.getElementById('result');
const clear = document.getElementById('clear');
const eql = document.getElementById('eql');
const one = document.getElementById('one');
const two = document.getElementById('two');
const sub = document.getElementById('sub');

clear.addEventListener('click', function () {
    // console.log(input.value);
    if(input.value) {
        input.value = ""
    }else{
        return;
    }
    
})

eql.addEventListener('click', function () {
    // console.log("eql button called..!");

    // console.log(2+3); eval()
    console.log(input);
    console.log(eval(input.value)); 
    input.value = eval(input.value);
    // input.innerText = eval(input.value);
    // input.innerHTML = eval(input.value);
    // input.textContent = eval(input.value);
})


one.addEventListener('click', function () {
    // console.log("one button called..!");
    input.value += "1";
})

two.addEventListener('click', function () {
    // console.log("two button called..!");
    input.value += "2";
})

sub.addEventListener('click', function () {
    // console.log("sub button called..!");
    input.value += "-";
})



// const obj_student = {
//     name: "umar",
//     age: 21,
//     course: "BSCS",
//     section: "A",
//     university :"uop"
// }

// const arr = [2,34,55645]    

// console.log(obj_student.name);
// console.log(obj_student.name);
// console.log(obj_student.name);
// console.log(obj_student.name);
// console.log(obj_student.name);
// console.log(obj_student.name);


// destructoring

// const {name}=obj_student;


// name,name anemkenamesknsemskenaem



const ul = document.getElementById('list');
function names(...para){
    // alert("func called")
    console.log(para);
    para.forEach((name)=>{
        // console.log(name);
        const li = document.createElement('li');
        li.innerText = name;
         ul.appendChild(li)
    })

    // para.forEach((value)=>{
    //     console.log(value);
        
    // }   )
    
}  





names("umar","ali","humam","ikram","khista","muslim");
