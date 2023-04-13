const { authenticate } = require('passport');
const bcrypt = require('bcrypt');

const localStrategy = require('passport-local')
.Strategy;

function initialize(passport, getUserByUsername, getUserByUsername){
    const authenticateUser = async (username, password, done) => {
        const user = getUserByUsername(username);
        console.log(user);
        if(user == null){
            console.log(incorrect);
            return done(null, false, {message: 'username or password incorrect'});
        }

        try{
            if(await bcrypt.compare(password, user.password)){
                console.log(user);
                return done(null, user);
            }
            else{
                console.log(incorrect);
                return done(null, false, {message: 'username or password incorrect'});
            }

        }catch(e){
            return done(e)
        }
    }
    console.log('zooooo');
    passport.use(new localStrategy({usernameField: 'username'}, authenticateUser)) //miss usname
    passport.serializeUser((user, done) => done(null, user.username))
    passport.deserializeUser((username, done) => {
        return done(null, getUserByUsername(username));
    });
}

module.exports = initialize;