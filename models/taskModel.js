const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        validate: {
            validator: (value) => typeof value === 'string',
            message: 'Title must be a string',
        },
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
