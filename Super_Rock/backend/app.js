const express =require('express')
const bodyparser= require('body-parser');

const mongoose= require('mongoose');
const app=express();
app.use(express.json());

const mongoUrl="mongodb+srv://chansovoth:12345@cluster0.cuai0oi.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log('DB is conntected');
}).catch((e)=>console.log(e));
const port=5000;

app.get('/',(req,res,next)=>
{
    res.send(`Port is running at ${port}`);
})
app.listen(port,(req,res)=>
{
    console.log(`App is running at port ${port}`);
})
require('./userDetails');

const User= mongoose.model('UserInformation');

app.post('/register',async(req,res,next)=>
{
    const {name,email,password}=req.body;
    try{
        await User.create({
            name:name,
            email:email,
            password:password
        });
        res.send({status:'ok'});
    }
    catch(error)
    {
        res.send({status:'error'});
    }
    finally
    {

    }
})