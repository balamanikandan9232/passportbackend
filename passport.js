const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "113572612031-q70nf7vsv07gtjdrt8j0bqsqp2mljbk7.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "ce8133b6b89ac16d8ca7";
const GITHUB_CLIENT_SECRET = "a882bf86c444870eed82dc9c0a4e676425b7de78";

const FACEBOOK_APP_ID = "1111057222913379";
const FACEBOOK_APP_SECRET = "c830ecf5a8d564056c7d3d08af7a3cc9";


passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
