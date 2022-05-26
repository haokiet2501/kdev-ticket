const mongoose = require('mongoose')

const userChema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email']
    },
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
})