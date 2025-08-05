// npm install passport passport-facebook express-session

const FacebookStrategy = require('passport-facebook').Strategy;
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "https://yourdomain.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // Lưu hoặc tìm user trong DB
    return done(null, profile);
  }
));
