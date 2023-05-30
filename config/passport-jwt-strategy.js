const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');
const env = require('./environment');

let opts = {};
opts.jwtFromRequest= ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey= env.jwt_secret;

passport.use(new JWTStrategy(opts,async function(jwtPayLoad, done){
    try
    {
        let doctor = await Doctor.findById(jwtPayLoad._id);
        if(doctor)
        {
            return done(null,doctor);
        }
        else
        {
            return done(null, false);
        }
    }
    catch(err)
    {
        console.log('Error in finding user from JWT',err);
        return;
    }
}));

module.exports = passport;