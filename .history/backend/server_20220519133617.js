const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
    res.status(201).json({message: 'Chào mừng đến với Support Desk'})
})

app.listen(PORT, () => {
    console.log(`Server đang chạy với PORT, ${PORT}`);
})