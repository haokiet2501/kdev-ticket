const express = require('express')
const router = express.Router({mergeParams})

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes)

module.exports = router