// console.log("async await");
// console.log('1');
// console.log('2');
// console.log('3');
// // apicall();
// console.log('4');
// console.log('5');
// console.log('6');



// // async function apicall(){
// // console.log("api called...!");

// // let api_end_point = "https://jsonplaceholder.typicode.com/users"
// // let response = await fetch(api_end_point);
// // let data = await response.json();
// // console.log(data)

// // }


let apiurl = 'https://jsonplaceholder.typicode.com/users';
console.log("1");
console.log("3");
api();
console.log("2");
console.log("5");
console.log("4");
// async await await a wait 

async function api(){
    // https://jsonplaceholder.typicode.com/users
    try{
 let response  =await fetch(apiurl);
 let data = await response.json()
    // console.log(data[1].email);
    data.forEach((value)=>{
        console.log(`Name : ${value.name} Email :${value.email} Phone : ${value.phone}`);
        
    });
    }catch(err){console.log(err)}
}
