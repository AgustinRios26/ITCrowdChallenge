const express = require("express")
const {authResponse,providerResponse,deleteCookie} = require("../helpers/authResponse")
const AuthService = require("../services/auth")
const passport = require("passport")
const authValidation = require("../middleware/auth")


function auth(app){
    const router = express.Router()
    app.use("/auth",router)
    const authServ = new AuthService()

    router.post("/login",async (req,res)=>{
        const result = await authServ.login(req.body)
        return authResponse(res,result,401)
    })
    router.post("/signup",async (req,res)=>{
        const result = await authServ.signup(req.body)

        return authResponse(res,result,400)
    
    })
    router.get("/logout",(req,res)=>{
        return deleteCookie(res)
    })

    router.get("/validate",authValidation(1),(req,res)=>{
        return res.json({
            success:true,
            user:req.user
        })
    })

    router.get("/google",passport.authenticate("google",{
        scope:["email","profile"]
    }))

    
    router.get("/google/callback",passport.authenticate("google",{session:false}), async (req,res)=>{
        const user = req.user.profile
        const result = await authServ.socialLogin(user)

        return providerResponse(res,result,401)
    })
    
    router.get("/facebook",passport.authenticate("facebook",{
        scope:["email"]
    }))

    router.get("/facebook/callback",passport.authenticate("facebook",{session:false}), async (req,res)=>{
        const user = req.user.profile
        const result = await authServ.socialLogin(user)
        return providerResponse(res,result,401)
    })

}

module.exports = auth