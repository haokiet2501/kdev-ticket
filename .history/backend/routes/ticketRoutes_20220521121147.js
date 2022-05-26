const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {getTickets, getTicket, createTicket} = require('../controller/ticketController')

router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/')

module.exports = router