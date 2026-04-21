const http = require('http')
const PORT = 9000;
const server = http.createServer((request,response)=>{
    
    // const usersObj = 
    console.log(request.url, request.method)
    if(request.url === '/users' && request.method === 'GET'){
        response.writeHead(200,{'Content-Type':'application/json'});
      response.end('name:ali')
    }
    // use for user/client
            // response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('server is running');
});

server.listen(PORT,()=>{
    // use for developer
    console.log('server is running..!');
    console.log(`http://localhost:${PORT}`);
    
});