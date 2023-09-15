const express = require('express');
const app=express();
const cors=require('cors');
const port=process.env.PORT || 5000;

app.use(cors());

const courses=require('./data/courses.json');
const blog=require('./data/blog.json');

app.get('/',(req,res)=>{
    res.send('Coding school api running...')
});

app.get('/courses',(req,res)=>{
    res.json(courses);
});

app.get('/courses/:id',(req,res)=>{
    const id=req.params.id;
    const selectedCourse=courses.find((c)=>c.id===id);
    res.send(selectedCourse);
});

app.get('/blog',(req,res)=>{
    res.json(blog);
});

app.listen(port,()=>{
    console.log(`Conding School server running on port ${port}`)
})

module.exports=app;



