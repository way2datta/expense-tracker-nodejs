const mongoose = require('mongoose');
require('./ExpenseCategory');

const ExpenseSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    incurredAt: {
        type: Date,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ExpenseCategory',
    },
},
{ timestamps: true }
);

module.exports = mongoose.model('Expense', ExpenseSchema);
