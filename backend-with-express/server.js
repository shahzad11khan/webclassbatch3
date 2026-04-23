const express = require('express');
const PORT = 7777;
const app = express();

// make a route

app.get('/',(request,response)=>{
    // console.log("Your Request is Processed..!")
    response.send("Your Request is Processed..!")
})



app.listen(PORT,()=>{
    console.log("Express Server Is Running..!");
    
})