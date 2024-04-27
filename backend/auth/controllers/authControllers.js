const User = require('../models/UserModel');
const createError = require('../utils/appErrors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, 'secretkey123', {
        expiresIn: '90d'
    });
};

exports.signup = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(new createError('User already exists!', 400)); // Pass 400 as the status code
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            ...req.body // You may want to specify the fields explicitly
        });

        const token = generateToken(newUser._id);

        res.status(200).json({
            status: 'success',
            message: 'User created',
            token
        });
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return next(new createError('User not found!', 404));
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return next(new createError('Wrong password!', 401));
        }

        const token = generateToken(user._id);

        res.status(200).json({
            status: 'success',
            message: 'User logged in',
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        next(err);
    }
};
