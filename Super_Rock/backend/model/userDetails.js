const mongoose=require('mongoose');

const userDetailsSchema= new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        isAdmin: {type:String,default:'false'}
    },
    {
        collection:'UserInformation'
    }
);

mongoose.model('UserInformation',userDetailsSchema);