const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {
    getTickets, 
    getTicket, createTicket} = require('../controller/ticketController')

router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket)

module.exports = router