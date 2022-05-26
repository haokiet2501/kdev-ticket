const express = require('express')
const dotenv = require('dotenv').config()
const {  }
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(201).json({message: 'Wellcome to support desk API'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => {
    console.log(`Server started on PORT, ${PORT}`);
})