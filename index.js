const express = require('express');
const app=express();
const cors=require('cors');
const port= 5000;

app.use(cors());

const courses=require('./data/courses.json');
const blog=require('./data/blog.json');

app.get('/',(req,res)=>{
    res.send('Coding school api running...')
})

app.listen(port,()=>{
    console.log(`Conding School server running on port ${port}`)
})

module.exports=app;

