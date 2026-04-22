// const http = require('http')
// const PORT = 9000;
// const server = http.createServer((request,response)=>{
    
//     // const usersObj = 
//     console.log(request.url, request.method)
//     if(request.url === '/users' && request.method === 'GET'){
//         response.writeHead(200,{'Content-Type':'application/json'});
//       response.end('name:ali')
//     }
//     // use for user/client
//             // response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end('server is running');
// });

// server.listen(PORT,()=>{
//     // use for developer
//     console.log('server is running..!');
//     console.log(`http://localhost:${PORT}`);
    
// });





// core http, fs

const http = require('http');
const fs = require('fs');
// http used for send a request and give back a response

const server =http.createServer((request,response)=>{
    // console.log(request);
    // fs.writeFileSync('text.txt','this is text file')
// setTimeout(() => {
//     fs.unlinkSync('humam.txt');
// }, 2000);

const data = fs.readFileSync('text.txt','utf-8');
console.log(data);

    response.end("Your Request is Accepted..");
    
}); // create a server

server.listen(1234,()=>{
    console.log("Server is Running...!");
}); //listen the request specific port









