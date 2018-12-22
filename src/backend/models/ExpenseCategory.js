const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    }
});

module.exports = mongoose.model('ExpenseCategory', categorySchema);
