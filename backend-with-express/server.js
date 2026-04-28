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


// const express = require('express'); // express framework import 
import express from 'express'
// const cors = require('cors');
import cors from 'cors';
const PORT = 6166; // port number
const app = express(); // express application
// const db = require('./config/database')
import db from './config/database.js'
import User from './models/Users.Models.js'

// use cors
app.use(cors()); // handle the reponses
app.use(express.json()); //handle the request

// connect db
db();
// get

app.get('/get-all-users',(req,res)=>{
    res.status(200)
    .json([{
            name:"Khista Rehman",
            age:23,
            image:'/upload/image.jpg',
            // behaviors :{}
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

app.post('/create-user',async (req,res)=>{
    try{
        // console.log(req.body)
        const newUser =  await  User.create(req.body)
        console.log(newUser)
        if(!newUser){
            console.log("Error Occure")
        }
        res.status(201).json(newUser)
    }catch(err){
        console.log(err)
    }
});

// put --> means to update

app.put('/update-user/:id',(req,res)=>{
    // User.findbyidUpdate()
});

// delete


app.delete('/delete-user/:id',async(req,res)=>{
    // Users.findbyidDelete()
    try{
        console.log(req.params.id)

const deleteSelectedUser = await User.findByIdAndDelete(req.params.id)
res.status(200).json(deleteSelectedUser)
    }catch(error){
        console.log(error)
    }
});


// get specific id

app.get('/get-specific-user/:id',(req,res)=>{
    // User.findbyid()
});

// listen 
// just use for developer
app.listen(PORT,()=>{
console.log(`Your Server Is Running On Port:${PORT}`);
})