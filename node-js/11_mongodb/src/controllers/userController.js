import User from "../models/user"

// Create User
const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}

// Read User
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(201).json(users)
    } catch (error) {
        next(error)
    }
}

// Read Single User
const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        res.json({
            success: true,
            data: user
        })
    } catch (error) {
        next(error)
    }
}

// Update User
const updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)

        if (!user) {
            return res.status(404).json({ message: "User not Found" })
        }

        res.json({ user })
    } catch (error) {
        next(error)
    }
}

// Delete User
const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).json({ message: 'user not found' })
        }

        res.json({ message: "User deleted" })
    } catch (error) {
        next(error)
    }
}

export default createUser;