import * as local from "passport-local";
import * as bcrypt from "bcrypt";
import { User } from "../models/user.model";

export const setUpPassportStrategy = function(passport) {
  passport.use(
    new local.Strategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false);
        }
        const match = bcrypt.compareSync(password, user.password);
        if (match) {
          done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );

  passport.serializeUser(function(user, done) {
    user.id = user._id;
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findOne({ _id: id }, "-password -salt", function(err, user) {
      done(err, user);
    });
  });
};
