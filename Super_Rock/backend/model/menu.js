const mongoose=require('mongoose');

const ArticleSchema= new mongoose.Schema(
    {
        articlename: String,
        description:String,
        type:String,
        price:Number,
        articleimage: String,
    },
    {
        collection:'articleImg'
    }
);

mongoose.model('articleImg',ArticleSchema);