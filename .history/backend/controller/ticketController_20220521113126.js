const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// @desc    Get current user
// @route   /api/users/me
// @access  Private
const get = asyncHandler(async(req, res) => {
    
    res.status(200).json(user)
})