const mongoose=require('mongoose');

const userDetailsSchema= new mongoose.Schema(
    {
        Name:String,
        Foodname:String,
        Price:Number,
    },
    {
        collection:'historytable'
    }
);

mongoose.model('historytable',userDetailsSchema);