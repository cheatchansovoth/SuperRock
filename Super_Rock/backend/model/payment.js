const mongoose=require('mongoose');

const userDetailsSchema= new mongoose.Schema(
    {
        email:String,
        creditHolderName: String,
        creditCardNumber: String,
        expiredDate: Date,
        cvc:Number,
    },
    {
        collection:'PaymentTbl'
    }
);

mongoose.model('PaymentTbl',userDetailsSchema);