const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type:String,
        required: [true, 'NAME_IS_REQUIRED'],
        unique: true
    }
});

module.exports = mongoose.model('ExpenseCategory', categorySchema);
