const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.,
            required: [true, 'Please add a name']
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please add a password']
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Ticket', ticketSchema)