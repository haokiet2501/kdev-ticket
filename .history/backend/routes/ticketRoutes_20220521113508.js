const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
import {getTickets , cre}

router.route('/').get(protect, getTickets).post(protect, createTicket)

module.exports = router