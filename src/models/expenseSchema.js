const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expenseSchema = new Schema({
    
    expenseId:{
        type: Schema.Types.ObjectId,
        require: true
    },
    description:{
      type: String,
      required: true,  
    },
    category:{
        type: mongoose.Schema.Types.ObjectId, ref: 'category',
        required: true,  
      },
    finance:{
        type: mongoose.Schema.Types.ObjectId, ref: 'finance',
        required:true
    },
    value:{
        type: Number,
        required: true
    },
    data:{
        type: Date,
        default: Date.now()
    },
    
});

const expenseCollections = mongoose.model('expense', expenseSchema)


module.exports = expenseCollections