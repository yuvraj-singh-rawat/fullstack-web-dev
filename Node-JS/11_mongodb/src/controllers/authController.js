const User = require("../models/user");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // 1. Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // 2. Check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "Email already registered",
            });
        }

        // 3. Create user (password auto-hashed by pre-save hook)
        const user = await User.create({
            name,
            email,
            password,
        });

        // 4. Generate token
        const token = generateToken(user._id);

        // 5. Response
        res.status(201).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        next(error);
    }
};
