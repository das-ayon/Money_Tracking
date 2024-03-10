// import { model,Schema } from "mongoose";
const mongoose= require('mongoose');

// const transactionSchema=new Schema({
//     name:{ type: String,required: true},
//     description:{ type: String,required: true},
//     datetime:{ type: Date,required: true}
// });


// const transcationModel= model('Transaction',transactionSchema)

const transactionSchema=new mongoose.Schema({
    name:{ type: String,required: true},
    price:{ type: Number,required: true},
    description:{ type: String,required: true},
    datetime:{ type: Date,required: true}
});


const transcationModel= mongoose.model('Transaction',transactionSchema)

module.exports=transcationModel;