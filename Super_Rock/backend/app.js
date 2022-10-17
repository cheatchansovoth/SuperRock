const express =require('express')
const bodyparser= require('body-parser');
const cors=require('cors');
const mongoose= require('mongoose');

const app=express();
app.use(express.json());
app.use(cors());
const mongoUrl="mongodb+srv://superrockteam:vfYtSk3bgUZ5XjV@cluster0.iv25o5b.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log('DB is conntected');
}).catch((e)=>console.log(e));
const port=5000;

require('./model/userDetails');
const User= mongoose.model('UserInformation');

app.post('/register',async(req,res)=>
{
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.password;
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


require('./model/payment');
const payment=mongoose.model('paymentTbl');

app.post('/payment',async(req,res)=>
{
    const email=req.body.email;
    const creditHolderName=req.body.creditHolderName;
    const creditCardNumber=req.body.creditCardNumber;
    const expiredDate=req.body.expiredDate;
    const cvc=req.body.cvc;
    const newpayment= new payment({email:email,creditHolderName:creditHolderName,creditCardNumber:creditCardNumber,expiredDate:expiredDate,cvc:cvc});
    try
    {
        await newpayment.save();
    return res.json({user: newpayment});
    }
    catch(err)
    {
        return res.status.json({error: "This is error"});
    }
});



require('./model/order');

const order=mongoose.model('ordertable');

require('./model/history');

const history=mongoose.model('historytable');

require('./model/userContact');
const userContact=mongoose.model('UserContact');

app.post('/contact',async(req,res)=>
{
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    const text=req.body.text;

    const insertData=new userContact({name:name,email:email,phone:phone,text:text});
    try{
        await insertData.save();
        res.send({status:"ok"});
    }
    catch(err)
    {
        console.log(err);
        res.send({status:"error"});
    }
});
app.post('/login',async(req,res,next)=>
{
    const email=req.body.email;
    const password=req.body.password;
    const user= await User.findOne({email:email});

    if(user)
    {
        if(user.password==password)
        {
            return res.status(200).json({message:'Work'});
        }
        else 
        {
            return res.status(401).json({message:'error'});
        }
    }
    else 
    {
        return res.status(401).json({message:'sth wrong'});
    }
}
);
app.get('/',(req,res,next)=>
{
    res.send(`Port is running at ${port}`);
})
app.listen(port,(req,res)=>
{
    console.log(`App is running at port ${port}`);
})