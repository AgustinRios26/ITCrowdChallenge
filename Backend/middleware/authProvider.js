const { 
    production, 
    oauthClientID,
    oauthClientSecret,
    callbackURL,
    callbackURLDev, 
    facebookAppID, 
    facebookAppSecret, 
} = require("../config")

const GoogleStrategy = require("passport-google-oauth20").Strategy
const FacebookStrategy = require("passport-facebook").Strategy

//Inicio de sesion a traves de redes sociales

const callbackUrl = (provider)=>`${production?callbackURL:callbackURLDev}/auth/${provider}/callback`
const getProfile = (accessToken,refreshToken,profile,done)=>{
    done(null,{profile})
}

const useGoogleStrategy = () =>{
    return new GoogleStrategy({
        clientID:oauthClientID,
        clientSecret:oauthClientSecret,
        callbackURL:callbackUrl("google")
    },getProfile)
}

const useFacebookStrategy = () =>{
    return new FacebookStrategy({
        clientID:facebookAppID,
        clientSecret:facebookAppSecret,
        callbackURL:callbackUrl("facebook"),
        profileFields:['id','emails','displayName','name','photos']
    },getProfile)
    
}


module.exports = {
    useGoogleStrategy,
    useFacebookStrategy,
} 