const express =require('express')
const bodyparser= require('body-parser');
const cors=require('cors');
const mongoose= require('mongoose');

const app=express();
app.use(express.json());
app.use(cors());
const mongoUrl="mongodb+srv://chansovoth:12345@cluster0.cuai0oi.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log('DB is conntected');
}).catch((e)=>console.log(e));
const port=5000;
require('./userDetails');
const User= mongoose.model('UserInformation');

app.post('/register',async(req,res)=>
{
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.email;
  const signup= new User({name:name,email:email,password:password});
  try
  {
    await signup.save();
    res.send("Inserted")
  }
  catch(err)
  {
    console.log(err);
  }
});
app.get('/',(req,res,next)=>
{
    res.send(`Port is running at ${port}`);
})
app.listen(port,(req,res)=>
{
    console.log(`App is running at port ${port}`);
})