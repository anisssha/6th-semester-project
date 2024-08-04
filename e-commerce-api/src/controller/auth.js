const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwt.provider.js");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);
        //await  cartService.cerateCart(user);

        return res.status(200).send({ jwt, message: "success" })
        
    } catch (err) {
        return res.status(500).send({error: err.message});
    }
    
}
const login = async (req, res) => { 
    const { password, email } = req.body;
    try {
        
        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(404).send({ message: "user not found with email:" , email });
            
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) { 
            return res.status(40).send({ message: "Invalid password....." });

        }
        const jwt = jwtProvider.generateToken(user._id);
        return res.status(200).send({jwt, message:"login successful."});

    } catch (err) { 
        return res.status(500).send({ error: err.message });
    }
}
module.exports = { register, login };