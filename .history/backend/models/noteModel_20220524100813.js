const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        ticket: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Ticket'
        },
        product: {
            type: String,
            required: [true, 'Please select a product'],
            enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
        },
        description: {
            type: String,
            required: [true, 'Please enter a description of the issue']
        },
        status: {
            type: String,
            required: true,
            enum: ['new', 'open', 'closed'],
            default: 'new',
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Note', noteSchema)