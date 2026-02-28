import jwt from "jsonwebtoken"

const generateToken = (id) => {
    return jwt.sign(
        { id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }
    )
}

// verify token
const decoded = jwt.verify(token, process.env.JWT_SECRET)
console.log(decoded)

export default generateToken;