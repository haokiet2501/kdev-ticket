const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// @desc    Get user tickets
// @route   GET /api/tickets
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

// @desc    Get user tickets
// @route   GET /api/tickets/:id
// @access  Private
const getTicket = asyncHandler(async(req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) {
        res.status(404)
        throw new Error('Ticket not found')
    }

    if(ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }
    
    res.status(200).json(ticket)
})

// @desc   create new tickets
// @route   POST /api/tickets
// @access  Private
const createTicket = asyncHandler(async(req, res) => {
    const { product, description } = req.body

    if(!product || !description) {
        res.status(400)
        throw new Error('Vui lòng thêm ')
    }

    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const ticket = await Ticket.create({
        product,
        description,
        user: req.user.id,
        status: 'new'
    })
    
    res.status(201).json(ticket)
})

// @desc    delete user tickets
// @route   DELETE /api/tickets/:id
// @access  Private
const deleteTicket = asyncHandler(async(req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('Người dùng không được tìm thấy')
    }

    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) {
        res.status(404)
        throw new Error('Vé không tìm thấy')
    }

    if(ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    await ticket.remove()
    
    res.status(200).json({ success: true })
})

// @desc    update user tickets
// @route   PUT /api/tickets/:id
// @access  Private
const updateTicket = asyncHandler(async(req, res) => {
    // Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('Nguời dùng không được tìm thấy')
    }

    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) {
        res.status(404)
        throw new Error('Vé không tìm thấy')
    }

    if(ticket.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }
    
    const updateTicket = await Ticket.findByIdAndUpdate(
        req.params.id, req.body, { new: true }
    )

    res.status(200).json(updateTicket)
})

module.exports = {
    getTickets,
    getTicket,
    createTicket,
    updateTicket,
    deleteTicket,
}