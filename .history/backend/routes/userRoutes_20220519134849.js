const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controller/userController')

router.post('/', registerUser)

router.post('/login', (req, res) => {
    res.send('Login Route')
})
module.exports = router