const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwProvider.js");
const bcrypt = require("bcrypt");
const cartService = require("../services/cart.service.js");

// User Registration
const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken({ userId: user._id });
        await cartService.createCart(user);

        return res.status(200).send({ jwt, message: "Registration successful" });
    } catch (err) {
        
        return res.status(500).send({ error: err.message });
    }
};

// User Login
const login = async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(404).send({ message: `User not found with email: ${email}` });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid password" });
        }

        const jwt = jwtProvider.generateToken({ userId: user._id });
        return res.status(200).send({ jwt, message: "Login successful" });
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
};

module.exports = { register, login };
