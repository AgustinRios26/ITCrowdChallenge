const jwt = require("jsonwebtoken")
const {jwtSecret} = require("../config/index")

//Validamos que tenga los permisos necesarios
function authValidation(role){
    return (req,res,next)=>{
        req.neededRole = role

        return validateToken(req,res,next)
    }
}

//validamos que el usuario tenga un token

function validateToken(req,res,next){
    const token = req.cookies.token

    if(!token){
        return res.status(403).json({
            success:false,
            message:"A token is required"
        })
    }

    return verifyToken(token,req,res,next)
}

//Verificamos el token del usuario

function verifyToken(token,req,res,next){
    try{
        const decoded = jwt.verify(token,jwtSecret)
        delete decoded.iat
        delete decoded.exp
        req.user = decoded

        return validateRole(req,res,next)
    }catch({message,name}){
        return res.status(403).json({
            success:false,
            message,
            type:name
        })
    }
}

//Validamos el rol del usuario

function validateRole(req,res,next){
  
    if(req.user.role>=req.neededRole){
        return next()
    }

    return res.status(403).json({
        success:false,
        messages:"Insufficient permissions"
    })
}

module.exports = authValidation