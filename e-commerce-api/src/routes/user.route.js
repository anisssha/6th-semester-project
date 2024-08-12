const express = require('express');
// const token = require('../middleware/authenticate.js')

const router = express.Router();
const userController = require("../controller/user.js");
router.get("/profile" ,userController.getUserProfile);
router.get("/", userController.getAllUsers);
module.exports = router;