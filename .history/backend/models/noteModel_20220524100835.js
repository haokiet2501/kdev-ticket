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
        text: {
            type: String,
            required: [true, 'Please please add some text'],
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