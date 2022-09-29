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
  const oldUser=await User.findOne({email});
  if(oldUser) return res.status(401).json({error:"This email is already in use"})
  const signup= new User({name:name,email:email,password:password});
  try
  {
    await signup.save();
   return res.json({user: signup});
  }
  catch(err)
  {
    return res.status.json({error: "This is error"});
  }
});
app.post('/login',async(req,res,next)=>
{
    const email=req.body.email;
    const password=req.body.password;
    const user= await User.findOne({email:email});
    if(!user || user.password!==password)
    {
        return res.status(200).json({message:'Working'});
    }
    else 
    {
        return res.status(401).json({message:'Duplicate user'});
    }
}
)
app.get('/',(req,res,next)=>
{
    res.send(`Port is running at ${port}`);
})
app.listen(port,(req,res)=>
{
    console.log(`App is running at port ${port}`);
})