const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('ExpenseCategory', categorySchema);
