const mongoose=require('mongoose');

const userContactSchema= new mongoose.Schema(
    {
        name: String,
        email: String,
        phone: String,
        text: String,
    },
    {
        collection:'UserContact'
    }
);

mongoose.model('UserContact',userContactSchema);