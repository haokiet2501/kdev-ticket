const express = require('express')
const router = express.Router({ mergeParams: true })
const { getNotes, addNote } = require('../controller/noteControoler')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes)

module.exports = router