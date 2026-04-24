// const express = require('express');
// const PORT = 7777;
// const app = express();

// // make a route

// app.get('/',(request,response)=>{
//     // console.log("Your Request is Processed..!")
//     response.send("Your Request is Processed..!")
// })



// app.listen(PORT,()=>{
//     console.log("Express Server Is Running..!");
    
// })


const express = require('express'); // express framework import 
const cors = require('cors');
const PORT = 6166; // port number
const app = express(); // express application

// use cors
app.use(cors());

// get

app.get('/get-all-users',(req,res)=>{
    res.status(200)
    .json([{
            name:"Khista Rehman",
            age:23,
            image:'/upload/image.jpg'
        },{
            name:"Zia Ul Haq",
            age:90,
            image:'/upload/image.jpg'
            
        },{
            name:"Ikram Udin",
            age:120,
            image:'/upload/image.jpg'
        },]);
});

// post

app.post('/create-user',(req,res)=>{});

// put --> means to update

app.put('/update-user/:id',(req,res)=>{});

// delete


app.delete('/delete-user/:id',(req,res)=>{});


// get specific id

app.get('/get-specific-user/:id',(req,res)=>{});

// listen 
// just use for developer
app.listen(PORT,()=>{
console.log(`Your Server Is Running On Port:${PORT}`);
})