const mongoose=require('mongoose');

const userDetailsSchema= new mongoose.Schema(
    {
        FoodID:String,
        UserID:String,
        Phone:String,
        pickuptyle:String,
    },
    {
        collection:'ordertable'
    }
);

mongoose.model('ordertable',userDetailsSchema);