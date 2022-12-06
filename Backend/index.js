const express = require("express")
const session = require("express-session")
const morgan = require("morgan")
const cookie = require("cookie-parser")
const { port, sessionSecret } = require("./config")
const { connection } = require("./config/db")
const passport = require("passport")
const cors = require("cors")


// Routes:
const auth = require("./routes/auth")
const users = require("./routes/users")
const products = require("./routes/products")
const { useGoogleStrategy,useFacebookStrategy } = require("./middleware/authProvider")

const app = express()


connection()

// // Utilizando middleware
app.use(express.json())
app.use(cookie())
app.use(cors({
    origin: process.env.URL_FRONTEND,
    credentials:true
}))

app.use(session({
    secret:sessionSecret,
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())

//usando strategys
passport.use(useGoogleStrategy())
passport.use(useFacebookStrategy())

passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})

// // Usando rutas:
auth(app)
users(app)
products(app)

app.get("/",(req,res)=>{
    return res.json({
        name:"ITCrowd"
    })
})


app.listen(port,()=>{
    console.log("Listening on: http://localhost:"+port)
})