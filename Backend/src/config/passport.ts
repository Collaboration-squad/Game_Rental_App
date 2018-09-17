// const { email, password } = req.body;

// return this.userService
//   .getUser({ email })
//   .then((user: IUser) => {
//     const match = bcrypt.compareSync(password, user.password);

//     return match
//       ? res.status(200).send({ msg: `user ${user._id} successfully login` })
//       : res.status(401).send({ msg: 'invalid email' });
//   })
//   .catch(err => res.status(404).send({ msg: 'wrong login or password' }));

// import * as passport from 'passport';
import * as local from 'passport-local';
import * as bcrypt from 'bcrypt';
import { User } from '../models/user.model';

export const setUpPassportStrategy = function(passport) {
  passport.use(
    new local.Strategy({ usernameField: 'email' }, (email, password, done) => {
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          console.log('wrong email, no user in db');
          return done(null, false, { message: 'wrong login or password' });
        }
        console.log(user);
        console.log(password);
        console.log(typeof password);
        const match = bcrypt.compareSync(password, user.password);
        console.log('match', match);
        if (match) {
          done(null, user);
        } else {
          return done(null, false, { message: 'invalid email' });
        }
      });
    })
  );

  passport.serializeUser(function(user, done) {
    user.id = user._id;
    console.log('userid', user);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log('called deserilaize')
    User.findOne({_id: id},'-password -salt', function(err, user) {
      done(err, user);
    });
  });
};
