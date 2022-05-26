const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
import 

router.route('/').get(protect, getTickets).post(protect, createTicket)

module.exports = router