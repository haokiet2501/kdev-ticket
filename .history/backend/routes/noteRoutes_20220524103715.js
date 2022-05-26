const express = require('express')
const router = express.Router({ mergeParams: true })
const { getNotes, addNotes } = require('../controller/noteControoler')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes)

module.exports = router