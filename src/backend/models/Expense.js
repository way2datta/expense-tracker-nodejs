const mongoose = require('mongoose');
require('./ExpenseCategory');

const ExpenseSchema = mongoose.Schema({
    amount: Number,
    description: String,
    incurredAt: Date,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ExpenseCategory',
    },
},
{ timestamps: true }
);

module.exports = mongoose.model('Expense', ExpenseSchema);
