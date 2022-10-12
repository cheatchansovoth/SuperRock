const mongoose=require('mongoose');

const userDetailsSchema= new mongoose.Schema(
    {
        Email:String,
        CreditHolderName: String,
        CreditCardNumber: String,
        ExpiredDate: Date,
        CVC:Number,
    },
    {
        collection:'paymentTbl'
    }
);

mongoose.model('paymentTbl',userDetailsSchema);