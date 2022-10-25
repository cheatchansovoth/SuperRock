const mongoose=require('mongoose');

const userDetailsSchema= new mongoose.Schema(
    {
        Email:String,
        PaymentID:String,
        Name:String,
        Price:Number,
    },
    {
        collection:'ordertable'
    }
);

mongoose.model('ordertable',userDetailsSchema);