const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {

    done(null, user.id);
 
 });
 
 passport.deserializeUser((id, done) => {
 
    User.findById(id)
       .then(user => {
          done(null, user);
       });
 
 });

passport.use( new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    proxy: true
},
async (accessToken, refreshToken, profile, done) => {
   console.log(accessToken)

    const existingUser =  await User.findOne({

       googleID: profile.id,
       displayName: profile.displayName 
    
    });

          if(existingUser) {
             // there's already a record of the user
             done(null, existingUser);

          } else {
             // no record of this user, so save it to Mongo
             const user = await new User({

                googleID: profile.id,
                displayName: profile.displayName

             }).save();

             done(null, user);
          }
       
}));
