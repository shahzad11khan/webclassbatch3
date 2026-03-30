console.log("async await");
console.log('1');
console.log('2');
console.log('3');
apicall();
console.log('4');
console.log('5');
console.log('6');



async function apicall(){
// console.log("api called...!");

let api_end_point = "https://jsonplaceholder.typicode.com/users"
let response = await fetch(api_end_point);
let data = await response.json();
console.log(data)

}



