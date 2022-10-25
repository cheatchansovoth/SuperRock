const express =require('express')
const bodyparser= require('body-parser');
const cors=require('cors');
const multer=require('multer');
const path=require('path');
const nodemailer = require("nodemailer");
const mongoose= require('mongoose');
const jwt=require('jsonwebtoken');

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
const JWT_SECRET='umi@mooni';
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../frontend/public/images/");
    },
    filename:(req,file,callback)=>
    {
        console.log(file)
        callback(null,file.originalname);
    }
})
const uploadImage=multer({storage:storage});
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
require('./model/userContact');
const userContact=mongoose.model('UserContact');

require('./model/payment');
const Payment=mongoose.model('PaymentTbl');

app.post('/user/payment',async (req,res)=>
{
    const Email=req.body.email;
    const Cardholder=req.body.Cardholder;
    const CardNumber=req.body.CarNumber;
    const expiredDate=req.body.expiredDate;
    const cvc=req.body.cvc;
    const payment= new Payment({Email:Email,CreditHolderName:Cardholder,CreditCardNumber:CardNumber,ExpiredDate:expiredDate,CVC:cvc})
    try 
    {
        await payment.save();
        res.status(200).json({Message:'Receive'});
        console.log(payment)
    }
    catch(err)
    {
        res.status(402).json({Error:err});
        console.log(err)
    }

})

require('./model/order');

const order=mongoose.model('ordertable');

app.post('/user/order',async (req,res)=>
{
    const Email=req.body.Email
    const PaymentID=req.body.PaymentID
    const Name=req.body.Name
    const Price=req.body.Price

    const newOrder= new order({Email:Email,PaymentID:PaymentID,Name:Name,Price:Price})
    try 
    {
        await newOrder.save();
        res.send({result:newOrder})
    }
    catch(err)
    {
        res.status(400).json({Message:err});
    }
})
app.get('/orderList', async (req,res)=>
{
    order.find({},(err,result)=>
  {
    if(err)
    {
      res.send(err);
      console.log(err)
    }
    else
    {
      res.send(result)
    }
  })
})
require('./model/menu');

const menuOrder=mongoose.model('articleImg');

app.post('/articleUpload',uploadImage.single('articleImg'),async(req,res)=>
{
    const newArticle=new menuOrder({articlename:req.body.articlename,description:req.body.description,type:req.body.type,price:req.body.price,articleimage:req.file.originalname})
    await newArticle.save();
    res.send({Message:'Succcess'})

})
app.delete('/admin/deletemenu/:id',async(req,res)=>
{
  const id=req.params.id;
  
  await menuOrder.findByIdAndRemove(id).exec();
  res.send('deleted');
})

const sendEmail=(Email,Name,OrderID)=>
{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'cheatchansovoth@gmail.com',
          pass: 'wsuizluhrmmmtrcu'
        }
      });
      
      var mailOptions = {
        from: 'cheatchansovoth@gmail.com',
        to: Email,
        subject: `Order Number:${OrderID}`,
        html:`<p> Hi ${Name} Your food is ready</p>`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    })
}
const resetPassword=(link,userEmail)=>
{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cheatchansovoth@gmail.com',
      pass: 'wsuizluhrmmmtrcu'
    }
  });
  
  var mailOptions = {
    from: 'cheatchansovoth@gmail.com',
    to: `${userEmail}`,
    subject: 'Reset Password',
    html:`<h1>Your token is here do not share it</h1> <br/>
      ${link}
    `
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
})
}

app.get('/orderready/:id',async(req,res)=>
{
    const id=req.params.id
        order.findById(id, function (err, result) {
        if (err){
          res.json({message:'not find book'});
        }
        else{
          res.send({BookDetails:result});
          console.log(result.Email)
          sendEmail(result.Email,result.Name,result.PaymentID)
        }
    })

})

app.get('/cardTest', async (req,res)=>
{
    menuOrder.find({},(err,result)=>
  {
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send(result)
    }
  })
})
require('./model/history');

const history=mongoose.model('historytable');

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
                return res.status(200).json({UserInfo:user});
            }
            else 
            {
                return res.status(401).json({message:'Incorrect Password'});
            }
        }
    else 
    {
        return res.status(401).json({message:'User/Password does not exists'});
    }
}
);
app.post('/reset-password',async(req,res,next)=>
{
  const email=req.body.email;
  const findUser= await User.findOne({email:email});
  if(!findUser)
  {
    res.status(401).json({error:'Incorrect Email'})
  }
  else 
  {
    const secret=JWT_SECRET+findUser.password;
    const payload={
      email:findUser.email,
      id:findUser._id,
    }
    const link=`http://localhost:3000/user/newpassword/${findUser._id}`;
    const token=jwt.sign(payload,secret,{expiresIn:'15m'})
    console.log(findUser)
  }
});
app.get('/reset-password/:id',async (req,res)=>
{
    const id=req.params.id;
    User.findById(id, function (err, result) {
    if (err){
    }
    else{
      res.json({User:result})
    }
})});
app.put('/reset-password/update',async(req,res)=>
{
  const Password=req.body.Password;
  const id=req.body.id;

  try{
    User.findById(id,(err,updateInfo)=>
    {
      updateInfo.password=Password;
      updateInfo.save();
      res.send(updateInfo);
      console.log(updateInfo)
    })
  }catch(err)
  {
    console.log(updateInfo)
    res.send(err)
    
  }
})
app.get('/',(req,res,next)=>
{
    res.send(`Port is running at ${port}`);
})
app.listen(port,(req,res)=>
{
    console.log(`App is running at port ${port}`);
})