const mongoose = require('mongoose')

const userChema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
})