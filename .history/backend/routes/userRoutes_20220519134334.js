const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send('Đăng kí')
})

router.post('/login', (req, res) => {
    res.send('Đăng nhập')
})
module.exports = router