const userController = require("../controller/user")
const express = require("express")
const userRouter = express.Router();

userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.signin)

module.exports=userRouter;