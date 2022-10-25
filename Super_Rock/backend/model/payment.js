const mongoose=require('mongoose');

const userDetailsSchema= new mongoose.Schema(
    {
        Email:String,
        CreditHolderName: String,
        CreditCardNumber: Number,
        ExpiredDate: String,
        CVC:Number,
    },
    {
        collection:'PaymentTbl'
    }
);

mongoose.model('PaymentTbl',userDetailsSchema);