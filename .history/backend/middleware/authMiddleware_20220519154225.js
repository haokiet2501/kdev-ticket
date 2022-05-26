const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]
            // Verify token
            const decoded = jwt.verity(token, process.env.JWT_SECRET)
            // Get user from token
            req.user = await User.findById(decoded.id)
        } catch (error) {
            
        }
    }
})