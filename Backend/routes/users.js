const express = require("express")
const authMiddleware = require("../middleware/auth")
const UserService = require("../services/users")

function users(app){
    const router = express.Router()
    const users = new UserService()

    app.use("/users",router)
    
    router.get("/",authMiddleware(2), async (req,res)=>{
        const allUsers = await users.getAll()
        return res.json(allUsers)
    })
}

module.exports = users 