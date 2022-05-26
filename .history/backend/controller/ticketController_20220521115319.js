const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// @desc    Get user tickets
// @route   /api/tickets
// @access  Private
const getTickets = asyncHandler(async(req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const tickets = await Ticket.find({user: req.user.id})
    
    res.status(200).json(tickets)
})

// @desc   create new tickets
// @route   /api/tickets
// @access  Private
const createTicket = asyncHandler(async(req, res) => {
    const { product, description } = req.body

    if(!product )
    
    res.status(200).json({ message: 'createTicket' })
})

module.exports = {
    getTickets,
    createTicket
}