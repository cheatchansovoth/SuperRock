const express =require('express')
const bodyparser= require('body-parser');

const mongoose= require('mongoose');
const app=express();

const port=5000;

app.get('/',(req,res,next)=>
{
    res.send(`Port is running at ${port}`);
})
app.listen(port,(req,res)=>
{
    console.log(`App is running at port ${port}`);
})
